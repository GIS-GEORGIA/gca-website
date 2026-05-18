import Link from "next/link";
import { Globe, BookOpen, Users, Award, Mail, Phone } from "lucide-react";

const benefits = [
  { icon: Globe, text: "ICA-ს (საერთაშორისო კარტოგრაფიული ასოციაცია) ღონისძიებებში მონაწილეობა" },
  { icon: BookOpen, text: "ასოციაციის სამეცნიერო ბულეტინის უფასო გამოწერა" },
  { icon: Users, text: "პროფესიული ქსელი — კოლეგები საქართველოდან" },
  { icon: Award, text: "სერთიფიკატები და პროფესიული განვითარების პროგრამები" },
  { icon: Globe, text: "საერთაშორისო კონფერენციებზე შეღავათიანი გადასახადი" },
  { icon: BookOpen, text: "ასოციაციის ბიბლიოთეკის და რესურსების სარგებლობა" },
];

export default function MembershipPage() {
  return (
    <div>
      <section className="bg-[#0a2342] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8a951] text-sm font-semibold uppercase tracking-widest mb-3">გაწევრიანება</p>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">გახდი ასოციაციის წევრი</h1>
          <p className="text-white/70 text-lg max-w-xl">შემოგვიერთდი ქართველ კარტოგრაფთა საზოგადოებაში.</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[#c8a951] text-sm font-semibold uppercase tracking-widest mb-2">უპირატესობები</p>
            <h2 className="text-3xl font-bold text-[#0a2342] font-serif">წევრობის სარგებელი</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-4 p-5 rounded-lg border border-[#0a2342]/10">
                <div className="w-9 h-9 bg-[#c8a951]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#c8a951]" />
                </div>
                <p className="text-[#0a2342]/80 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#f8f5ef]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c8a951] text-sm font-semibold uppercase tracking-widest mb-3">დაგვიკავშირდი</p>
          <h2 className="text-3xl font-bold text-[#0a2342] font-serif mb-4">გაწევრიანებით დაინტერესებული ხარ?</h2>
          <p className="text-[#0a2342]/65 text-lg leading-relaxed mb-10">
            დაგვიკავშირდი ელ. ფოსტით ან ტელეფონით — ყველა კითხვაზე გიპასუხებთ და გაწევრიანების პროცესში დაგეხმარებით.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfWgJ29G-9IkNjf48yj-GwpJ2ypj7vNhWF6mC8uSrtB20xHag/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#c8a951] text-[#0a2342] px-8 py-4 rounded-lg font-semibold hover:bg-[#c8a951]/90 transition-colors w-full sm:w-auto justify-center"
            >
              გაწევრიანების ფორმა
            </a>
            <a
              href="mailto:geocartographersassoc@gmail.com"
              className="inline-flex items-center gap-3 bg-[#0a2342] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0a2342]/80 transition-colors w-full sm:w-auto justify-center"
            >
              <Mail size={20} />
              geocartographersassoc@gmail.com
            </a>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-[#0a2342]/60 text-sm">
            <a href="tel:+995579711715" className="flex items-center gap-2 hover:text-[#c8a951] transition-colors">
              <Phone size={16} />
              საბა მოდებაძე — 579 711 715
            </a>
            <span className="hidden sm:block">·</span>
            <a href="tel:+995577554429" className="flex items-center gap-2 hover:text-[#c8a951] transition-colors">
              <Phone size={16} />
              გოჩა გუძუაძე — 577 554 429
            </a>
          </div>

          <p className="mt-10 text-xs text-[#0a2342]/40">
            დეტალური საკონტაქტო ინფორმაცია და მისამართი —{" "}
            <Link href="/ka/contact" className="text-[#c8a951] hover:underline">
              კონტაქტის გვერდი
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
