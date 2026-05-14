import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;

  return (
    <div className="bg-[#f8f5ef] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-[#0a2342]/60 hover:text-[#0a2342] text-sm mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> სიახლეებზე დაბრუნება
        </Link>

        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Placeholder image */}
          <div className="h-64 bg-[#0a2342] flex items-center justify-center">
            <span className="text-white/30 text-6xl font-serif">GCA</span>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-[#0a2342]/60">
              <span className="flex items-center gap-1.5">
                <Tag size={14} />
                <span className="bg-[#0a2342]/10 px-2 py-0.5 rounded">სიახლეები</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                15 აპრილი, 2026
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#0a2342] font-serif leading-tight mb-6">
              სტატიის სათაური — ჩაანაცვლე რეალური სათაურით (#{id})
            </h1>

            <div className="prose prose-lg max-w-none text-[#0a2342]/80 space-y-4 leading-relaxed">
              <p>
                პირველი აბზაცი — შეიყვანე სტატიის მთავარი შინაარსი. ეს ტექსტი სატესტო პლეისჰოლდერია და ჩანაცვლდება რეალური კონტენტით.
              </p>
              <p>
                მეორე აბზაცი — სტატიის გაგრძელება. შეგიძლია ჩასვა ნებისმიერი ტექსტი, სურათი ან ინტერაქტიული ელემენტი.
              </p>
              <h2 className="text-2xl font-bold text-[#0a2342] font-serif mt-8 mb-4">ქვეთავი</h2>
              <p>
                ქვეთავის შინაარსი — ჩაამატე სასურველი ინფორმაცია. სტატია შეიძლება შეიცავდეს რამდენიმე სექციას, სურათებს და ბმულებს.
              </p>
              <p>
                დამატებითი ინფორმაცია კარტოგრაფიის, GIS ტექნოლოგიების ან ასოციაციის საქმიანობის შესახებ.
              </p>
            </div>

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
