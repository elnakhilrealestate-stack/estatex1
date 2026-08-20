import { db } from "@/db";
import { sql } from "drizzle-orm";
import {
  projects,
  testimonials,
  courses,
  developers,
} from "@/db/schema";
import { eq } from "drizzle-orm";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SellingSection } from "@/components/SellingSection";
import { PartnersSection } from "@/components/PartnersSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CoursesSection } from "@/components/CoursesSection";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  await db.execute(sql`select 1`);

  const featuredProjects = await db
    .select()
    .from(projects)
    .where(eq(projects.featured, true));

  const allTestimonials = await db.select().from(testimonials);
  const allCourses = await db.select().from(courses);
  const allDevelopers = await db.select().from(developers);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProjectsSection projects={featuredProjects} />
      <SellingSection />
      <PartnersSection developers={allDevelopers} />
      <TestimonialsSection testimonials={allTestimonials} />
      <CoursesSection courses={allCourses} />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
