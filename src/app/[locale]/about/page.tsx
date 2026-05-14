import { MapPin, Users, Award, Camera } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "სახელი გვარი",
    role: "პრეზიდენტი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "სახელი გვარი",
    role: "გენერალური მდივანი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "სახელი გვარი",
    role: "ხაზინადარი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "სახელი გვარი",
    role: "სამეცნიერო მდივანი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "სახელი გვარი",
    role: "გამგეობის წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "სახელი გვარი",
    role: "გამგეობის წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
];

const milestones = [
  { year: "1994", text: "ასოციაციის დაარსება" },
  { year: "1998", text: "ICA-ს (საერთაშორისო კარტოგრაფიული ასოციაცია) სრულუფლებიანი წევრი" },
  { year: "2005", text: "პირველი ეროვნული ატლასის გამოცემა" },
  { year: "2012", text: "ციფრული კარტოგრაფიის განყოფილების შექმნა" },
  { year: "2018", text: "GIS ეროვნული სტანდარტების შემუშავება" },
  { year: "2024", text: "ღია მონაცემების პლატფორმის გამოშვება" },
];

function TeamCard({ name, role, bio, photo }: (typeof team)[0]) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-[#0a2342]/10 hover:shadow-md transition-shadow">
      {/* Photo area */}
      <div className="h-48 bg-[#0a2342]/5 flex items-center justify-center relative">
        {photo ? (
          <Image src={photo} alt={name} fill className="object-cover object-top" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-[#0a2342]/25">
            <Camera size={32} />
            <span className="text-xs">ფოტო</span>
          </div>
        )}
      </div>
      {/* Info */}
      <div className="p-5 text-center">
        <h3 className="font-bold text-[#0a2342] font-serif text-lg">{name}</h3>
        <p className="text-[#c8a951] text-sm font-semibold mt-1">{role}</p>
        <p className="text-[#0a2342]/60 text-xs mt-3 leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0a2342] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8a951] text-sm font-semibold uppercase tracking-widest mb-3">ასოციაციის შესახებ</p>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">საქართველოს კარტოგრაფთა ასოციაცია</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            1994 წლიდან ვაერთიანებთ ქართველ კარტოგრაფებს, გეოგრაფებს და GIS სპეციალისტებს — ქართული კარტოგრაფიის განვითარებისა და საერთაშორისო აღიარებისთვის.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: "მისია", text: "ქართული კარტოგრაფიის განვითარება, პოპულარიზაცია და საერთაშორისო სტანდარტებთან ინტეგრაცია." },
              { icon: Users, title: "ხედვა", text: "კარტოგრაფია — ყველასთვის ხელმისაწვდომი მეცნიერება. ღია მონაცემები, თანამედროვე ტექნოლოგიები." },
              { icon: Award, title: "ღირებულებები", text: "სიზუსტე, სიახლე, გამჭვირვალობა და საერთაშორისო თანამშრომლობა." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="p-6 rounded-lg border border-[#0a2342]/10 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-[#c8a951]/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#c8a951]" />
                </div>
                <h3 className="font-bold text-[#0a2342] text-lg mb-2 font-serif">{title}</h3>
                <p className="text-[#0a2342]/65 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-[#f8f5ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[#c8a951] text-sm font-semibold uppercase tracking-widest mb-2">ქრონოლოგია</p>
            <h2 className="text-3xl font-bold text-[#0a2342] font-serif">ისტორია</h2>
          </div>
          <div className="relative border-l-2 border-[#c8a951]/40 pl-8 space-y-8 max-w-2xl">
            {milestones.map(({ year, text }) => (
              <div key={year} className="relative">
                <div className="absolute -left-[2.6rem] w-5 h-5 rounded-full bg-[#c8a951] border-4 border-[#f8f5ef]" />
                <span className="text-[#c8a951] font-bold text-sm">{year}</span>
                <p className="text-[#0a2342] mt-1">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[#c8a951] text-sm font-semibold uppercase tracking-widest mb-2">გუნდი</p>
            <h2 className="text-3xl font-bold text-[#0a2342] font-serif">გამგეობა</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <TeamCard key={i} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
