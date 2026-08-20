"use client";

import type { developers } from "@/db/schema";
import { site } from "@/lib/site";

type Developer = typeof developers.$inferSelect;

const defaultDevelopers: Developer[] = [
  { id: 1, name: "Dar Misr", logoUrl: null, website: null, createdAt: new Date() },
  { id: 2, name: "New Cairo", logoUrl: null, website: null, createdAt: new Date() },
  { id: 3, name: "Mostakbal City", logoUrl: null, website: null, createdAt: new Date() },
  { id: 4, name: "North Coast", logoUrl: null, website: null, createdAt: new Date() },
  { id: 5, name: "Capital Developers", logoUrl: null, website: null, createdAt: new Date() },
  { id: 6, name: "Zayed Communities", logoUrl: null, website: null, createdAt: new Date() },
  { id: 7, name: "SODIC", logoUrl: null, website: null, createdAt: new Date() },
  { id: 8, name: "Palm Hills", logoUrl: null, website: null, createdAt: new Date() },
];

export function PartnersSection({ developers }: { developers: Developer[] }) {
  const displayDevelopers = developers.length > 0 ? developers : defaultDevelopers;

  return (
    <section id="partners" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="font-semibold text-primary">مشروعات ومناطق نخدمها</span>
          </div>

          <h2 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            شبكة عقارية تساعدك على <span className="gradient-text">الاختيار بثقة</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            EstateX تعمل على فرص البيع وإعادة البيع والاستثمار في مناطق سكنية وتجارية مطلوبة داخل مصر.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {displayDevelopers.map((dev) => (
            <div
              key={dev.id}
              className="group flex items-center justify-center rounded-2xl border border-transparent bg-gray-50 p-8 transition-all duration-300 hover:border-accent/20 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 hover:shadow-lg"
            >
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-sm transition-all group-hover:shadow-md">
                  <span className="text-2xl font-extrabold text-primary transition-colors group-hover:text-accent">
                    {dev.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-bold text-gray-700 transition-colors group-hover:text-primary">
                  {dev.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary to-primary-light p-8 md:p-12">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div>
              <p className="text-3xl font-extrabold text-white md:text-4xl">{site.followers}</p>
              <p className="mt-2 text-white/70">مجتمع الصفحة على فيسبوك</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white md:text-4xl">{site.tagline}</p>
              <p className="mt-2 text-white/70">خدمات أساسية</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white md:text-4xl">{site.phoneDisplay}</p>
              <p className="mt-2 text-white/70">رقم التواصل المباشر</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
