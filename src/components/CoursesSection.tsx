"use client";

import type { courses } from "@/db/schema";
import { site } from "@/lib/site";

type Course = typeof courses.$inferSelect;

const defaultCourses: Course[] = [
  {
    id: 1,
    title: "إزاي تختار وحدة مناسبة؟",
    description:
      "نصائح عملية لمقارنة الموقع، المساحة، السعر، خطة السداد، وفرص إعادة البيع قبل الشراء.",
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    isFree: true,
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "أساسيات الاستثمار العقاري",
    description:
      "تعرف على مؤشرات العائد، الإيجار المتوقع، نمو المنطقة، ومتى تكون الوحدة فرصة استثمار حقيقية.",
    imageUrl:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&q=80",
    isFree: true,
    createdAt: new Date(),
  },
  {
    id: 3,
    title: "خطوات بيع وحدتك Resale",
    description:
      "كيف تجهز بيانات وحدتك، تحدد سعر مناسب، وتتعامل مع المشتري الجاد حتى إتمام الاتفاق.",
    imageUrl:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&q=80",
    isFree: true,
    createdAt: new Date(),
  },
];

const features = [
  {
    title: "منشورات وحدات متاحة",
    description: "تفاصيل مختصرة وواضحة عن الوحدات المعروضة للبيع والاستثمار",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "نصائح قبل الشراء",
    description: "مقارنة الموقع والسعر والسداد والعائد قبل اتخاذ القرار",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "تواصل سريع",
    description: "استفسر مباشرة من فيسبوك أو واتساب على رقم الصفحة",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
];

export function CoursesSection({ courses }: { courses: Course[] }) {
  const displayCourses = courses.length > 0 ? courses : defaultCourses;

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <span className="text-primary font-medium">نصائح وفرص عقارية</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            تابع <span className="gradient-text">EstateX على فيسبوك</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
            محتوى مبسط عن الشراء والبيع والاستثمار، مع منشورات الوحدات المتاحة مثل شقة دار مصر العبور 100 م².
          </p>

          <a
            href={site.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-light transition-all hover:shadow-xl hover:scale-105"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            زيارة صفحة فيسبوك
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {displayCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={
                    course.imageUrl ||
                    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
                  }
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {course.isFree && (
                  <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Free
                  </span>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass inline-flex items-center gap-2 px-3 py-1.5 rounded-full">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                    </svg>
                    <span className="text-white text-sm">تفاصيل على فيسبوك</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {course.description}
                </p>
                <button className="mt-4 w-full bg-primary/5 hover:bg-primary text-primary hover:text-white py-3 rounded-xl font-semibold transition-all">
                  تابع التفاصيل
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
