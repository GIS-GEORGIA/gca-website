import { Check, Users, BookOpen, Globe, Award } from "lucide-react";

const benefits = [
  { icon: Globe, text: "ICA-ს (საერთაშორისო კარტოგრაფიული ასოციაცია) ღონისძიებებში მონაწილეობა" },
  { icon: BookOpen, text: "ასოციაციის სამეცნიერო ბულეტინის უფასო გამოწერა" },
  { icon: Users, text: "პროფესიული ქსელი — 200+ კოლეგა საქართველოდან" },
  { icon: Award, text: "სერთიფიკატები და პროფესიული განვითარების პროგრამები" },
  { icon: Globe, text: "საერთაშორისო კონფერენციებზე შეღავათიანი გადასახადი" },
  { icon: BookOpen, text: "ასოციაციის ბიბლიოთეკის და რესურსების სარგებლობა" },
];

const memberTypes = [
  {
    title: "სრული წევრი",
    price: "₾120",
    period: "წელიწადში",
    description: "კარტოგრაფები, გეოგრაფები, GIS სპეციალისტები",
    features: ["ხმის უფლება კრებაზე", "ყველა შეღავათი", "სამეცნიერო ბულეტინი", "ICA-ს წევრობა"],
    highlight: true,
  },
  {
    title: "სტუდენტური წევრი",
    price: "₾40",
    period: "წელიწადში",
    description: "სტუდენტები და დოქტორანტები",
    features: ["სემინარებში მონაწილეობა", "ბიბლიოთეკის სარგებლობა", "მენტორობის პროგრამა"],
    highlight: false,
  },
  {
    title: "კორპორატიული წევრი",
    price: "₾500",
    period: "წელიწადში",
    description: "ორგანიზაციები და კომპანიები",
    features: ["5 თანამშრომლის წევრობა", "ლოგო ვებ-გვერდზე", "ყველა შეღავათი", "VIP მოწვევა"],
    highlight: false,
  },
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

      {/* Pricing */}
      <section className="py-16 bg-[#f8f5ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[#c8a951] text-sm font-semibold uppercase tracking-widest mb-2">ტარიფები</p>
            <h2 className="text-3xl font-bold text-[#0a2342] font-serif">წევრობის სახეები</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {memberTypes.map(({ title, price, period, description, features, highlight }) => (
              <div
                key={title}
                className={`rounded-lg overflow-hidden border ${
                  highlight ? "border-[#c8a951] shadow-lg" : "border-[#0a2342]/10"
                } bg-white`}
              >
                {highlight && (
                  <div className="bg-[#c8a951] text-[#0a2342] text-xs font-bold text-center py-1.5 uppercase tracking-wider">
                    ყველაზე პოპულარული
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-bold text-[#0a2342] text-lg font-serif mb-1">{title}</h3>
                  <p className="text-[#0a2342]/50 text-xs mb-4">{description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#0a2342]">{price}</span>
                    <span className="text-[#0a2342]/50 text-sm ml-1">/ {period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[#0a2342]/80">
                        <Check size={16} className="text-[#c8a951] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded font-semibold text-sm transition-colors ${
                      highlight
                        ? "bg-[#c8a951] text-[#0a2342] hover:bg-[#b8952f]"
                        : "border border-[#0a2342] text-[#0a2342] hover:bg-[#0a2342] hover:text-white"
                    }`}
                  >
                    განაცხადის გაგზავნა
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-[#c8a951] text-sm font-semibold uppercase tracking-widest mb-2">განაცხადი</p>
            <h2 className="text-3xl font-bold text-[#0a2342] font-serif">გაწევრიანების ფორმა</h2>
          </div>
          <form className="space-y-5">
            {[
              { label: "სახელი და გვარი", type: "text", placeholder: "მაგ: გიორგი მაისურაძე" },
              { label: "ელ. ფოსტა", type: "email", placeholder: "info@example.com" },
              { label: "ტელეფონი", type: "tel", placeholder: "+995 5XX XX XX XX" },
              { label: "ორგანიზაცია / სამუშაო ადგილი", type: "text", placeholder: "მაგ: თსუ, გეოგრაფიის ფაკულტეტი" },
              { label: "სპეციალობა", type: "text", placeholder: "მაგ: კარტოგრაფი, GIS სპეციალისტი" },
            ].map(({ label, type, placeholder }) => (
              <div key={label}>
                <label className="block text-sm font-semibold text-[#0a2342] mb-1.5">{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="w-full border border-[#0a2342]/20 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#c8a951] transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-semibold text-[#0a2342] mb-1.5">წევრობის სახე</label>
              <select className="w-full border border-[#0a2342]/20 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#c8a951] bg-white">
                <option>სრული წევრი — ₾120/წელი</option>
                <option>სტუდენტური წევრი — ₾40/წელი</option>
                <option>კორპორატიული წევრი — ₾500/წელი</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#0a2342] text-white py-3 rounded font-semibold hover:bg-[#0a2342]/80 transition-colors"
            >
              განაცხადის გაგზავნა
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
