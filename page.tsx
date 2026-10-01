import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { getBestSellers, getFeatured, categories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent locale={locale as any} />;
}

function HomeContent({ locale }: { locale: "en" | "ro" | "de" | "nl" }) {
  const t = useTranslations();
  const bestSellers = getBestSellers().slice(0, 6);

  const categoryList = [
    { id: "ebooks", key: "ebooks" },
    { id: "planners", key: "planners" },
    { id: "templates", key: "templates" },
    { id: "business", key: "business" },
    { id: "productivity", key: "productivity" },
    { id: "ai-prompts", key: "aiPrompts" },
    { id: "social-media", key: "socialMedia" },
    { id: "printables", key: "printables" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {t("hero.headline")}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
              {t("hero.subheadline")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition shadow-lg shadow-indigo-900/30"
              >
                {t("hero.shopCta")}
              </Link>
              <Link
                href="/best-sellers"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-500 hover:border-white text-white font-semibold rounded-lg transition"
              >
                {t("hero.bestCta")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          {t("categories.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryList.map((cat) => (
            <Link
              key={cat.id}
              href={`/shop?category=${cat.id}`}
              className="group block p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-200 transition"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition">
                <span className="text-2xl">📁</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">
                {t(`categories.${cat.key}.title`)}
              </h3>
              <p className="text-sm text-slate-500 mb-3">
                {t(`categories.${cat.key}.description`)}
              </p>
              <span className="text-sm font-medium text-indigo-600 group-hover:underline">
                {t("categories.viewProducts")} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">
              {t("bestSellers.title")}
            </h2>
            <p className="mt-2 text-slate-600">{t("bestSellers.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} locale={locale} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/shop"
              className="inline-flex px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition"
            >
              {t("hero.shopCta")}
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-indigo-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            {t("newsletter.title")}
          </h2>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t("newsletter.placeholder")}
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 font-semibold rounded-lg transition"
            >
              {t("newsletter.button")}
            </button>
          </form>
          <p className="mt-3 text-xs text-indigo-200">{t("newsletter.note")}</p>
        </div>
      </section>
    </div>
  );
}
