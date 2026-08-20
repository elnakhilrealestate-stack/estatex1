"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { fallbackProjects, type Project } from "@/lib/project-data";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const displayProjects = useMemo(
    () => (projects.length > 0 ? projects : fallbackProjects),
    [projects]
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || displayProjects.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayProjects.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, displayProjects.length]);

  const visibleProjects = useMemo(() => {
    const visible: Project[] = [];
    if (displayProjects.length === 0) return visible;
    for (let i = 0; i < Math.min(3, displayProjects.length); i++) {
      visible.push(displayProjects[(currentIndex + i) % displayProjects.length]);
    }
    return visible;
  }, [currentIndex, displayProjects]);

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-bold text-accent">
            🔥 فرص عقارية من EstateX
          </span>
          <h2 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            أحدث <span className="gradient-text">المشروعات والوحدات</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            تفاصيل أوضح لكل وحدة: المساحة، الموقع، السعر، مقدم الحجز، أنظمة السداد،
            وحالة التسليم — مع رابط تفاصيل مستقل لكل مشروع.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid gap-6 md:grid-cols-3">
            {visibleProjects.map((project, idx) => (
              <article
                key={`${project.id}-${currentIndex}-${idx}`}
                className="card-hover group relative overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={
                      project.imageUrl ||
                      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80"
                    }
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-sm font-bold text-white">
                    {project.status || "متاح"}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2">
                    <div className="glass rounded-xl px-4 py-2">
                      <p className="text-xs text-white/70">المقدم</p>
                      <p className="text-lg font-bold text-white">{project.downPayment}</p>
                    </div>
                    <div className="glass rounded-xl px-4 py-2">
                      <p className="text-xs text-white/70">السداد</p>
                      <p className="text-lg font-bold text-white">{project.installment}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="text-xl font-extrabold text-gray-900">
                      {project.name}
                    </h3>
                    <span className="shrink-0 rounded-full bg-primary/5 px-3 py-1 text-xs font-bold text-primary">
                      {project.area}
                    </span>
                  </div>

                  <div className="mb-4 flex items-start gap-2 text-gray-500">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm leading-relaxed">{project.location}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl bg-gray-50 p-3">
                      <p className="text-gray-400">النوع</p>
                      <p className="font-bold text-gray-900">{project.unitType}</p>
                    </div>
                    <div className="rounded-xl bg-gray-50 p-3">
                      <p className="text-gray-400">التسليم</p>
                      <p className="font-bold text-gray-900">{project.delivery}</p>
                    </div>
                  </div>

                  <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-gray-600">
                    {project.description}
                  </p>
                  <p className="mt-4 font-extrabold text-primary">{project.price}</p>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-5 block w-full rounded-xl bg-primary/5 py-3 text-center font-bold text-primary transition-all hover:bg-primary hover:text-white"
                  >
                    عرض تفاصيل المشروع
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {displayProjects.map((project, idx) => (
              <button
                key={project.slug || idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to project ${idx + 1}`}
                className={`h-3 rounded-full transition-all ${
                  idx === currentIndex
                    ? "w-8 bg-accent"
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100">
            <p className="stat-number text-3xl">Buy</p>
            <p className="mt-1 text-sm text-gray-500">اختيار الوحدة المناسبة</p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100">
            <p className="stat-number text-3xl">Sell</p>
            <p className="mt-1 text-sm text-gray-500">تسويق وإعادة بيع وحدتك</p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100">
            <p className="stat-number text-3xl">Invest</p>
            <p className="mt-1 text-sm text-gray-500">فرص استثمار بثقة</p>
          </div>
        </div>
      </div>
    </section>
  );
}
