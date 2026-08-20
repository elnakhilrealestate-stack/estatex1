import { db, hasDatabaseUrl } from "@/db";
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
  let featuredProjects: (typeof projects.$inferSelect)[] = [];
  let allTestimonials: (typeof testimonials.$inferSelect)[] = [];
  let allCourses: (typeof courses.$inferSelect)[] = [];
  let allDevelopers: (typeof developers.$inferSelect)[] = [];

  if (hasDatabaseUrl) {
    try {
      await db.execute(sql`select 1`);
      featuredProjects = await db
        .select()
        .from(projects)
        .where(eq(projects.featured, true));
      allTestimonials = await db.select().from(testimonials);
      allCourses = await db.select().from(courses);
      allDevelopers = await db.select().from(developers);
    } catch {
      featuredProjects = [];
      allTestimonials = [];
      allCourses = [];
      allDevelopers = [];
    }
  }

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
