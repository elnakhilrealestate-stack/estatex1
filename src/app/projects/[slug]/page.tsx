import Link from "next/link";
import { notFound } from "next/navigation";
import { db, hasDatabaseUrl } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { amenitiesList, fallbackProjects, type Project } from "@/lib/project-data";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

async function getProject(slug: string): Promise<Project | undefined> {
  if (hasDatabaseUrl) {
    try {
      const result = await db
        .select()
        .from(projects)
        .where(eq(projects.slug, slug))
        .limit(1);

      if (result[0]) {
        return result[0];
      }
    } catch {
      // Fall back to bundled project data when the database is unavailable.
    }
  }

  return fallbackProjects.find((project) => project.slug === slug);
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const amenities = amenitiesList(project);
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `مرحبًا EstateX، أريد تفاصيل أكثر عن: ${project.name}`
  )}`;

  const projectSpecs = [
    ["الموقع", project.location],
    ["نوع الوحدة", project.unitType],
    ["المساحة", project.area],
    ["السعر", project.price],
    ["المطور/المنطقة", project.developer],
    ["المقدم", project.downPayment],
    ["نظام السداد", project.installment],
    ["التسليم", project.delivery],
    ["الحالة", project.status],
  ];

  const relatedProjects = fallbackProjects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="relative overflow-hidden bg-primary pt-28 text-white">
        <div className="absolute inset-0">
          <img
            src={project.imageUrl || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80"}
            alt={project.name}
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/65" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-white/70">
            <Link href="/" className="transition-colors hover:text-accent">
              الرئيسية
            </Link>
            <span>/</span>
            <Link href="/#projects" className="transition-colors hover:text-accent">
              المشروعات
            </Link>
            <span>/</span>
            <span className="text-accent">{project.name}</span>
          </div>

          <span className="mb-5 inline-block rounded-full bg-accent px-4 py-2 text-sm font-bold text-white">
            {project.status || "متاح"}
          </span>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
            {project.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-green-500 px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:bg-green-600"
            >
              استفسار واتساب
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="rounded-full bg-accent px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:bg-accent/90"
            >
              اتصال: {site.phoneDisplay}
            </a>
            <a
              href={site.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/25 px-8 py-4 font-bold text-white transition-all hover:border-accent hover:text-accent"
            >
              صفحة فيسبوك
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-8">
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <img
                src={project.imageUrl || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80"}
                alt={project.name}
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <h2 className="mb-4 text-3xl font-extrabold text-gray-900">تفاصيل المشروع</h2>
              <p className="text-lg leading-8 text-gray-600">{project.description}</p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <h2 className="mb-6 text-3xl font-extrabold text-gray-900">المميزات والخدمات</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent">✓</span>
                    <span className="font-semibold text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="sticky top-24 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-gray-100">
              <h2 className="mb-5 text-2xl font-extrabold text-primary">ملخص الوحدة</h2>
              <div className="space-y-3">
                {projectSpecs.map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-gray-50 p-4">
                    <p className="text-sm text-gray-400">{label}</p>
                    <p className="mt-1 font-extrabold text-gray-900">{value || "تواصل لمعرفة التفاصيل"}</p>
                  </div>
                ))}
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 block rounded-2xl bg-green-500 px-6 py-4 text-center font-extrabold text-white transition-colors hover:bg-green-600"
              >
                احجز معاينة / اطلب التفاصيل
              </a>
              <a
                href={`tel:${site.phoneTel}`}
                className="mt-3 block rounded-2xl bg-primary px-6 py-4 text-center font-extrabold text-white transition-colors hover:bg-primary-light"
              >
                اتصال مباشر
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">مشروعات أخرى قد تناسبك</h2>
              <p className="mt-2 text-gray-500">روابط تفاصيل فعلية لباقي المشروعات.</p>
            </div>
            <Link href="/#projects" className="hidden rounded-full bg-primary px-6 py-3 font-bold text-white md:block">
              كل المشروعات
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedProjects.map((related) => (
              <Link
                key={related.slug}
                href={`/projects/${related.slug}`}
                className="group overflow-hidden rounded-2xl bg-gray-50 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={related.imageUrl || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80"}
                  alt={related.name}
                  className="h-44 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-gray-900">{related.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{related.location}</p>
                  <p className="mt-3 font-bold text-primary">{related.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
