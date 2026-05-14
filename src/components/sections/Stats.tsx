const stats = [
  { value: "1994", label: "დაარსდა" },
  { value: "200+", label: "წევრი" },
  { value: "50+", label: "გამოცემული ატლასი" },
  { value: "ICA", label: "საერთ. ასოციაციის წევრი" },
];

export default function Stats() {
  return (
    <section className="bg-white border-b border-[#0a2342]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0a2342] font-serif mb-1">
                {value}
              </div>
              <div className="text-sm text-[#0a2342]/60 uppercase tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
