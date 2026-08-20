// Keep the schema entrypoint present so models can define tables and run
// `npx drizzle-kit push` without bootstrapping Drizzle config first.
import {
  pgTable,
  serial,
  text,
  boolean,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  developer: varchar("developer", { length: 255 }).default("EstateX"),
  unitType: varchar("unit_type", { length: 120 }).default("Apartment"),
  area: varchar("area", { length: 80 }).default("100 m²"),
  price: varchar("price", { length: 120 }).default("Contact for price"),
  downPayment: varchar("down_payment", { length: 50 }).notNull(),
  installment: varchar("installment", { length: 50 }).notNull(),
  delivery: varchar("delivery", { length: 120 }).default("Ready / Flexible"),
  status: varchar("status", { length: 120 }).default("Available"),
  description: text("description"),
  amenities: text("amenities"),
  imageUrl: text("image_url"),
  featured: boolean("featured").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  role: varchar("role", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }).notNull(),
  quote: text("quote").notNull(),
  initial: varchar("initial", { length: 10 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url"),
  isFree: boolean("is_free").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const developers = pgTable("developers", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  logoUrl: text("logo_url"),
  website: text("website"),
  createdAt: timestamp("created_at").defaultNow(),
});
