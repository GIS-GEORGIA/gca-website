"use client";

import { MapPin, Users, Award, Camera, X } from "lucide-react";
import Image from "next/image";
import { useState, useMemo } from "react";

const team = [
  {
    name: "თედო გორგოძე",
    role: "სკა-ის გამგეობის წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "ზურაბ ლაოშვილი",
    role: "სკა-ის გამგეობის წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "გოჩა გუძუაძე",
    role: "სკა-ის გამგეობის წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "საბა მოდებაძე",
    role: "სკა-ის გამგეობის წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "მარიამ გაგოშაშვილი",
    role: "სკა-ის გამგეობის წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "რევაზ თოლორდავა",
    role: "სკა-ის გამგეობის წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "ხატია ყველაშვილი",
    role: "სკა-ის გამგეობის წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "ილია ქავთარაძე",
    role: "სკა-ის გამგეობის წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "ლიკა ცერცვაძე",
    role: "სკა-ის გამგეობის წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "გიორგი ბერუჩაშვილი",
    role: "სკა-ის სამეცნიერო საბჭოს წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "ლალი გოგინავა",
    role: "სკა-ის სამეცნიერო საბჭოს წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "სოფიო გორგიჯანიძე",
    role: "სკა-ის სამეცნიერო საბჭოს წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "გიორგი დვალაშვილი",
    role: "სკა-ის სამეცნიერო საბჭოს წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "ნოდარ ელიზბარაშვილი",
    role: "სკა-ის სამეცნიერო საბჭოს წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "თეონა თიგიშვილი",
    role: "სკა-ის სამეცნიერო საბჭოს წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "გიორგი კაპანაძე",
    role: "სკა-ის სამეცნიერო საბჭოს წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "ნატო მაისურაძე",
    role: "სკა-ის სამეცნიერო საბჭოს წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "რობერტ მაღლაკელიძე",
    role: "სკა-ის სამეცნიერო საბჭოს წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "დემეტრე მოდებაძე",
    role: "სკა-ის სამეცნიერო საბჭოს წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "გიორგი მძელური",
    role: "სკა-ის სამეცნიერო საბჭოს წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "დავით სვანაძე",
    role: "სკა-ის სამეცნიერო საბჭოს წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "მანანა შარაშენიძე",
    role: "სკა-ის სამეცნიერო საბჭოს წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "ვანო ცარციძე",
    role: "სკა-ის სამეცნიერო საბჭოს წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "ნოდარ ხორბალაძე",
    role: "სკა-ის სამეცნიერო საბჭოს წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "თამარ ჭიჭინაძე",
    role: "სკა-ის სამეცნიერო საბჭოს წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "ნიკა ბერუჩაშვილი",
    role: "სკა-ის სამეცნიერო საბჭოს წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "ვლადიმერ ბუაჩიძე",
    role: "სკა-ის სამეცნიერო საბჭოს წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
  {
    name: "გიორგი გაფრინდაშვილი",
    role: "სკა-ის სამეცნიერო საბჭოს წევრი",
    bio: "მოკლე ბიოგრაფია — სპეციალობა, გამოცდილება, ორგანიზაცია.",
    photo: null,
  },
];

// უნიკალური როლები/სტატუსები
const allRoles = Array.from(new Set(team.map((m) => m.role)));

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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  // ფილტრირებული ტიმი
  const filteredTeam = useMemo(() => {
    return team.filter((member) => {
      const matchesName = member.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesRole = selectedRole === null || member.role === selectedRole;
      return matchesName && matchesRole;
    });
  }, [searchQuery, selectedRole]);

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
            {[
              { year: "1994", text: "ასოციაციის დაარსება" },
              { year: "1998", text: "ICA-ს (საერთაშორისო კარტოგრაფიული ასოციაცია) სრულუფლებიანი წევრი" },
              { year: "2005", text: "პირველი ეროვნული ატლასის გამოცემა" },
              { year: "2012", text: "ციფრული კარტოგრაფიის განყოფილების შექმნა" },
              { year: "2018", text: "GIS ეროვნული სტანდარტების შემუშავება" },
              { year: "2024", text: "ღია მონაცემების პლატფორმის გამოშვება" },
            ].map(({ year, text }) => (
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

          {/* ფილტრაციის კონტროლები */}
          <div className="mb-8 space-y-6">
            {/* ძებნა */}
            <div className="relative">
              <input
                type="text"
                placeholder="ძებნა სახელ-გვარით..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-[#0a2342]/20 focus:outline-none focus:ring-2 focus:ring-[#c8a951] text-[#0a2342] placeholder-[#0a2342]/40"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0a2342]/40 hover:text-[#0a2342]"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* სტატუსის ფილტრი */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedRole(null)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedRole === null
                    ? "bg-[#0a2342] text-white"
                    : "bg-[#0a2342]/10 text-[#0a2342] hover:bg-[#0a2342]/20"
                }`}
              >
                ყველა ({team.length})
              </button>
              {allRoles.map((role) => {
                const count = team.filter((m) => m.role === role).length;
                return (
                  <button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      selectedRole === role
                        ? "bg-[#c8a951] text-[#0a2342]"
                        : "bg-[#c8a951]/10 text-[#0a2342] hover:bg-[#c8a951]/20"
                    }`}
                  >
                    {role} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* შედეგები */}
          {filteredTeam.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredTeam.map((member, i) => (
                <TeamCard key={i} {...member} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#0a2342]/60 text-lg">
                ვერ მოიძებნა შესაბამისი წევრი "{searchQuery}" რომელიც აერთიანებს {selectedRole || "ყველა სტატუსს"}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
