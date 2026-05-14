import { useTranslations } from "next-intl";
import Link from "next/link";

const posts = [
  {
    id: 1,
    date: "2026-04-15",
    title: "საქართველოს ახალი ტოპოგრაფიული ატლასი გამოიცა",
    excerpt:
      "ასოციაციამ წარადგინა 2026 წლის განახლებული ტოპოგრაფიული ატლასი, რომელიც მოიცავს ქვეყნის სრულ გეოგრაფიულ მონაცემებს.",
    category: "სიახლეები",
  },
  {
    id: 2,
    date: "2026-03-22",
    title: "ICA-ს კონფერენციაში მონაწილეობა",
    excerpt:
      "ასოციაციის წევრები მონაწილეობდნენ საერთაშორისო კარტოგრაფიული ასოციაციის ყოველწლიურ კონფერენციაში.",
    category: "ღონისძიება",
  },
  {
    id: 3,
    date: "2026-02-10",
    title: "GIS სემინარი — ციფრული კარტოგრაფია",
    excerpt:
      "ახალგაზრდა კარტოგრაფებისთვის გაიმართა GIS ტექნოლოგიებისადმი მიძღვნილი სამდღიანი სემინარი თბილისში.",
    category: "სემინარი",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ka-GE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsPreview({ locale }: { locale: string }) {
  const t = useTranslations("blog");

  return (
    <section className="py-20 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#c8a951] text-sm font-semibold uppercase tracking-widest mb-2">
              ბოლო სიახლეები
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2342] font-serif">
              {t("title")}
            </h2>
          </div>
          <Link
            href={`/${locale}/blog`}
            className="hidden md:inline-flex text-[#0a2342] border border-[#0a2342]/30 px-5 py-2 rounded text-sm hover:bg-[#0a2342] hover:text-white transition-colors"
          >
            {t("all_posts")}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#0a2342]/5"
            >
              <div className="h-2 bg-[#c8a951]" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs bg-[#0a2342]/10 text-[#0a2342] px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <time className="text-xs text-[#0a2342]/50">
                    {formatDate(post.date)}
                  </time>
                </div>
                <h3 className="font-bold text-[#0a2342] mb-3 leading-snug font-serif text-lg">
                  {post.title}
                </h3>
                <p className="text-sm text-[#0a2342]/65 mb-5 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  href={`/${locale}/blog/${post.id}`}
                  className="text-sm text-[#c8a951] font-semibold hover:underline"
                >
                  {t("read_more")} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
