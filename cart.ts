import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/data/products";

export type Currency = "EUR" | "USD" | "GBP" | "RON";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  currency: Currency;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  setCurrency: (currency: Currency) => void;
  getSubtotal: () => number; // in base EUR, converted later
  getItemCount: () => number;
}

// Static rates for demo – replace with live API (e.g. exchangerate-api.com)
export const exchangeRates: Record<Currency, number> = {
  EUR: 1,
  USD: 1.08,
  GBP: 0.86,
  RON: 4.97,
};

export const currencySymbols: Record<Currency, string> = {
  EUR: "€",
  USD: "$",
  GBP: "£",
  RON: "lei",
};

export function formatPrice(amountEUR: number, currency: Currency): string {
  const converted = amountEUR * exchangeRates[currency];
  const symbol = currencySymbols[currency];
  if (currency === "RON") {
    return `${converted.toFixed(2)} ${symbol}`;
  }
  return `${symbol}${converted.toFixed(2)}`;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      currency: "EUR",
      addItem: (product, quantity = 1) => {
        set((state) => {
          const existing = state.items.find((i) => i.product.id === product.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.id === product.id
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
            };
          }
          return { items: [...state.items, { product, quantity }] };
        });
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((i) => i.product.id !== productId),
        }));
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.product.id === productId ? { ...i, quantity } : i
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      setCurrency: (currency) => set({ currency }),
      getSubtotal: () => {
        return get().items.reduce((sum, item) => {
          const price = item.product.salePrice ?? item.product.price;
          return sum + price * item.quantity;
        }, 0);
      },
      getItemCount: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },
    }),
    {
      name: "digital-vault-cart",
      partialize: (state) => ({ items: state.items, currency: state.currency }),
    }
  )
);
