"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "მისამართი",
    value: "I. Chavchavadze Ave. 3\nTbilisi 0128, საქართველო",
  },
  {
    icon: Mail,
    label: "ელ. ფოსტა",
    value: "geocartographersassoc@gmail.com",
  },
  {
    icon: Phone,
    label: "ტელეფონი",
    value: "საბა მოდებაძე: 579 711 715\nგოჩა გუძუაძე: 577 554 429",
  },
  {
    icon: Clock,
    label: "სამუშაო საათები",
    value: "ორშ–პარ: 10:00 – 18:00",
  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      <section className="bg-[#0a2342] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8a951] text-sm font-semibold uppercase tracking-widest mb-3">კონტაქტი</p>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">დაგვიკავშირდი</h1>
          <p className="text-white/70 text-lg max-w-xl">კითხვები, წინადადებები ან გაწევრიანება — გვიპასუხეთ.</p>
        </div>
      </section>

      <section className="py-16 bg-[#f8f5ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-[#0a2342] font-serif mb-6">საკონტაქტო ინფორმაცია</h2>
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-[#0a2342]/10">
                  <div className="w-9 h-9 bg-[#c8a951]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} className="text-[#c8a951]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#0a2342]/50 uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-[#0a2342] text-sm font-medium whitespace-pre-line">{value}</p>
                  </div>
                </div>
              ))}

              {/* Google Maps embed */}
              <div className="rounded-lg overflow-hidden border border-[#0a2342]/10 mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.3!2d44.7875!3d41.6934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7a35c5a79%3A0x8ca4f2d0f2ef7e!2sI.%20Chavchavadze%20Ave%203%2C%20Tbilisi!5e0!3m2!1ska!2sge!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-lg p-8 shadow-sm border border-[#0a2342]/5">
              <h2 className="text-2xl font-bold text-[#0a2342] font-serif mb-6">შეტყობინების გაგზავნა</h2>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-14 h-14 bg-[#c8a951]/20 rounded-full flex items-center justify-center mb-4">
                    <Send size={24} className="text-[#c8a951]" />
                  </div>
                  <h3 className="text-[#0a2342] font-bold text-xl font-serif mb-2">გაიგზავნა!</h3>
                  <p className="text-[#0a2342]/60 text-sm">მადლობა შეტყობინებისთვის. 1-2 სამუშაო დღეში გიპასუხებთ.</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-sm text-[#c8a951] hover:underline">
                    კიდევ ერთი შეტყობინება
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { label: "სახელი", placeholder: "შენი სახელი" },
                      { label: "გვარი", placeholder: "შენი გვარი" },
                    ].map(({ label, placeholder }) => (
                      <div key={label}>
                        <label className="block text-sm font-semibold text-[#0a2342] mb-1.5">{label}</label>
                        <input
                          type="text"
                          placeholder={placeholder}
                          className="w-full border border-[#0a2342]/20 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#c8a951] transition-colors"
                          required
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0a2342] mb-1.5">ელ. ფოსტა</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full border border-[#0a2342]/20 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#c8a951] transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0a2342] mb-1.5">თემა</label>
                    <select className="w-full border border-[#0a2342]/20 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#c8a951] bg-white">
                      <option>ზოგადი კითხვა</option>
                      <option>წევრობა</option>
                      <option>თანამშრომლობა</option>
                      <option>ციფრული ატლასი</option>
                      <option>სხვა</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0a2342] mb-1.5">შეტყობინება</label>
                    <textarea
                      rows={5}
                      placeholder="დაწერე შენი შეტყობინება..."
                      className="w-full border border-[#0a2342]/20 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#c8a951] transition-colors resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#0a2342] text-white py-3 rounded font-semibold hover:bg-[#0a2342]/80 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={16} /> გაგზავნა
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
