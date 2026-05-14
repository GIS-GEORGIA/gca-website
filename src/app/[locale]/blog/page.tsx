import Link from "next/link";

const posts = [
  { id: 1, date: "2026-04-15", category: "სიახლეები", title: "საქართველოს ახალი ტოპოგრაფიული ატლასი გამოიცა", excerpt: "ასოციაციამ წარადგინა 2026 წლის განახლებული ტოპოგრაფიული ატლასი, რომელიც მოიცავს ქვეყნის სრულ გეოგრაფიულ მონაცემებს." },
  { id: 2, date: "2026-03-22", category: "ღონისძიება", title: "ICA-ს კონფერენციაში მონაწილეობა", excerpt: "ასოციაციის წევრები მონაწილეობდნენ საერთაშორისო კარტოგრაფიული ასოციაციის ყოველწლიურ კონფერენციაში ვენაში." },
  { id: 3, date: "2026-02-10", category: "სემინარი", title: "GIS სემინარი — ციფრული კარტოგრაფია", excerpt: "ახალგაზრდა კარტოგრაფებისთვის გაიმართა GIS ტექნოლოგიებისადმი მიძღვნილი სამდღიანი სემინარი თბილისში." },
  { id: 4, date: "2026-01-20", category: "პუბლიკაცია", title: "კარტოგრაფიის ბულეტინი 2025 — გამოვიდა", excerpt: "ყოველწლიური სამეცნიერო ბულეტინი შეიცავს 12 სტატიას ქართველი და უცხოელი მეცნიერებისგან." },
  { id: 5, date: "2025-12-05", category: "სიახლეები", title: "ახალი წევრები გამგეობაში", excerpt: "ასოციაციის საერთო კრებამ აირჩია გამგეობის ახალი შემადგენლობა 2026-2028 წლებისთვის." },
  { id: 6, date: "2025-11-18", category: "ღონისძიება", title: "კარტოგრაფიის დღე — 2025", excerpt: "ყოველწლიური პროფესიული დღის აღნიშვნა გაიმართა ეროვნული სამეცნიერო ბიბლიოთეკაში." },
];

const categories = ["ყველა", "სიახლეები", "ღონისძიება", "სემინარი", "პუბლიკაცია"];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ka-GE", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPage() {
  return (
    <div>
      <section className="bg-[#0a2342] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8a951] text-sm font-semibold uppercase tracking-widest mb-3">ბლოგი</p>
          <h1 className="text-4xl md:text-5xl font-bold font-serif">სიახლეები</h1>
        </div>
      </section>

      <section className="py-16 bg-[#f8f5ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm border border-[#0a2342]/20 hover:bg-[#0a2342] hover:text-white transition-colors first:bg-[#0a2342] first:text-white"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#0a2342]/5">
                <div className="h-2 bg-[#c8a951]" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs bg-[#0a2342]/10 text-[#0a2342] px-2 py-1 rounded">{post.category}</span>
                    <time className="text-xs text-[#0a2342]/50">{formatDate(post.date)}</time>
                  </div>
                  <h2 className="font-bold text-[#0a2342] mb-3 leading-snug font-serif text-lg">{post.title}</h2>
                  <p className="text-sm text-[#0a2342]/65 mb-5 leading-relaxed">{post.excerpt}</p>
                  <Link href={`/ka/blog/${post.id}`} className="text-sm text-[#c8a951] font-semibold hover:underline">
                    სრულად წაიკითხე →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
