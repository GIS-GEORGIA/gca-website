import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import blogPostsData from "@/data/blogPosts.json";

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  publishedAt: string;
  category?: string;
  body?: string;
  bodyEn?: string;
  thumbnailUrl: string | null;
};

const posts: BlogPost[] = blogPostsData as BlogPost[];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const post = posts.find((p) => p.slug === id) ?? null;

  if (!post) {
    return (
      <div className="bg-[#f8f5ef] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#0a2342]/50 mb-4">სტატია ვერ მოიძებნა</p>
          <Link href={`/${locale}/blog`} className="text-[#c8a951] hover:underline">← სტატიებზე დაბრუნება</Link>
        </div>
      </div>
    );
  }

  const title = locale === "en" && post.titleEn ? post.titleEn : post.title;
  const body  = locale === "en" && post.bodyEn  ? post.bodyEn  : post.body;

  return (
    <div className="bg-[#f8f5ef] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-[#0a2342]/60 hover:text-[#0a2342] text-sm mb-8 transition-colors">
          <ArrowLeft size={16} /> სტატიებზე დაბრუნება
        </Link>

        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          {post.thumbnailUrl && (
            <div className="relative h-72 w-full">
              <Image src={post.thumbnailUrl} alt={title} fill className="object-cover" />
            </div>
          )}

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-[#0a2342]/60">
              {post.category && (
                <span className="flex items-center gap-1.5">
                  <Tag size={14} />
                  <span className="bg-[#0a2342]/10 px-2 py-0.5 rounded">{post.category}</span>
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {new Date(post.publishedAt).toLocaleDateString("ka-GE", { year: "numeric", month: "long", day: "numeric" })}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#0a2342] font-serif leading-tight mb-8">
              {title}
            </h1>

            {body && (
              <div className="prose prose-lg max-w-none text-[#0a2342]/80 leading-relaxed whitespace-pre-wrap">
                {body}
              </div>
            )}

            <div className="mt-10 pt-8 border-t border-[#0a2342]/10">
              <p className="text-xs text-[#0a2342]/40 uppercase tracking-wider">ავტორი</p>
              <p className="text-[#0a2342] font-semibold mt-1">საქართველოს კარტოგრაფთა ასოციაცია</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
