import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/client";
import { postsQuery } from "@/sanity/queries";

type Post = {
  _id: string;
  title: string;
  titleEn?: string;
  slug: { current: string };
  publishedAt: string;
  category?: string;
  excerpt?: string;
  excerptEn?: string;
  imageUrl?: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ka-GE", {
    year: "numeric", month: "long", day: "numeric",
  });
}

export const revalidate = 60; // განახლება ყოველ 60 წამში

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts: Post[] = await client.fetch(postsQuery).catch(() => []);

  // თუ Sanity ჯერ კონფიგურებული არ არის, placeholder-ები ჩანს
  const fallback: Post[] = [
    { _id: "1", title: "სტატია დაემატება Sanity Studio-დან", slug: { current: "placeholder" }, publishedAt: new Date().toISOString(), category: "სიახლეები", excerpt: "Sanity Studio-ს კონფიგურაციის შემდეგ სტატიები ამ გვერდზე ავტომატურად გამოჩნდება." },
  ];

  const items = posts.length > 0 ? posts : fallback;

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((post) => (
              <article key={post._id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#0a2342]/5">
                {/* სურათი */}
                {post.imageUrl ? (
                  <div className="relative h-44 w-full">
                    <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="h-2 bg-[#c8a951]" />
                )}

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {post.category && (
                      <span className="text-xs bg-[#0a2342]/10 text-[#0a2342] px-2 py-1 rounded">{post.category}</span>
                    )}
                    <time className="text-xs text-[#0a2342]/50">{formatDate(post.publishedAt)}</time>
                  </div>
                  <h2 className="font-bold text-[#0a2342] mb-3 leading-snug font-serif text-lg">
                    {locale === "en" && post.titleEn ? post.titleEn : post.title}
                  </h2>
                  <p className="text-sm text-[#0a2342]/65 mb-5 leading-relaxed">
                    {locale === "en" && post.excerptEn ? post.excerptEn : post.excerpt}
                  </p>
                  <Link href={`/${locale}/blog/${post.slug.current}`} className="text-sm text-[#c8a951] font-semibold hover:underline">
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
