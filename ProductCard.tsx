"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import type { Product, Locale } from "@/data/products";
import { useCartStore, formatPrice } from "@/store/cart";
import { Star } from "lucide-react";

interface Props {
  product: Product;
  locale: Locale;
}

export function ProductCard({ product, locale }: Props) {
  const t = useTranslations("product");
  const currency = useCartStore((s) => s.currency);
  const addItem = useCartStore((s) => s.addItem);

  const price = product.salePrice ?? product.price;
  const hasDiscount = !!product.salePrice;

  return (
    <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
      <Link href={`/product/${product.slug}`}>
        <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative">
          <span className="text-4xl opacity-40">📄</span>
          {hasDiscount && (
            <span className="absolute top-3 left-3 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded">
              {t("sale")}
            </span>
          )}
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition line-clamp-2">
            {product.title[locale]}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-slate-500 line-clamp-2">
          {product.shortDescription[locale]}
        </p>

        <div className="mt-3 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i <= Math.round(product.rating)
                  ? "fill-amber-400 text-amber-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-xs text-slate-400 ml-1">
            ({product.rating.toFixed(1)})
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-slate-900">
              {formatPrice(price, currency)}
            </span>
            {hasDiscount && (
              <span className="ml-2 text-sm text-slate-400 line-through">
                {formatPrice(product.price, currency)}
              </span>
            )}
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <Link
            href={`/product/${product.slug}`}
            className="flex-1 text-center py-2 text-sm font-medium border border-gray-200 rounded-lg hover:border-indigo-300 hover:text-indigo-600 transition"
          >
            {t("viewProduct")}
          </Link>
          <button
            onClick={() => addItem(product)}
            className="flex-1 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            {t("addToCart")}
          </button>
        </div>
      </div>
    </div>
  );
}
