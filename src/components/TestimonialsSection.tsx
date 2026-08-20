"use client";

import { useState, useEffect } from "react";
import type { testimonials } from "@/db/schema";

type Testimonial = typeof testimonials.$inferSelect;

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "أحمد مصطفى",
    role: "عميل شراء",
    company: "القاهرة الجديدة",
    quote:
      "EstateX ساعدوني أختار وحدة مناسبة للسكن والاستثمار، وكانت التفاصيل واضحة من أول مكالمة لحد المعاينة.",
    initial: "أ",
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "مريم خالد",
    role: "Resale Seller",
    company: "العبور",
    quote:
      "كنت محتاجة أبيع وحدتي بسرعة وبسعر مناسب. الفريق جهز الإعلان ورد على الاستفسارات وساعدني أوصل لمشتري جاد.",
    initial: "م",
    createdAt: new Date(),
  },
  {
    id: 3,
    name: "محمد ياسر",
    role: "مستثمر عقاري",
    company: "العاصمة الإدارية",
    quote:
      "التركيز على الأرقام وتفاصيل السداد والموقع خلاني أخد قرار استثماري بثقة. تجربة محترمة ومباشرة.",
    initial: "م",
    createdAt: new Date(),
  },
  {
    id: 4,
    name: "سارة علي",
    role: "عميلة بيع وشراء",
    company: "الشيخ زايد",
    quote:
      "أهم حاجة عندي كانت المصداقية. EstateX وضحوا المميزات والعيوب وقدّموا بدائل تناسب ميزانيتي.",
    initial: "س",
    createdAt: new Date(),
  },
];

export function TestimonialsSection({
  testimonials: testimonialsData,
}: {
  testimonials: Testimonial[];
}) {
  const displayTestimonials =
    testimonialsData.length > 0 ? testimonialsData : defaultTestimonials;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (prev) => (prev + 1) % displayTestimonials.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [displayTestimonials.length]);

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <span className="text-accent font-medium">آراء العملاء</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ماذا يقول <span className="gradient-text">عملاء EstateX</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            تجارب حقيقية لخدمات الشراء والبيع وإعادة البيع والاستثمار العقاري.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {displayTestimonials.map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-8 text-accent/10">
                      <svg
                        className="w-24 h-24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Initial Avatar */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {testimonial.initial}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500">
                          {testimonial.role} • {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                      &quot;{testimonial.quote}&quot;
                    </p>

                    {/* Stars */}
                    <div className="flex gap-1 mt-6">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-accent"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {displayTestimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "bg-accent w-10"
                    : "bg-gray-300 w-3 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
