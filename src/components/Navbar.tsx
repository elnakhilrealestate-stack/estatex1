"use client";

import Link from "next/link";
import { useState } from "react";
import { site, whatsappMessage } from "@/lib/site";

const links = [
  { href: "/#home", label: "الرئيسية" },
  { href: "/#projects", label: "المشروعات" },
  { href: "/#selling", label: "بيع وحدتك" },
  { href: "/#partners", label: "المطورون" },
  { href: "/#courses", label: "نصائح عقارية" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/#home" className="flex items-center gap-3">
            <img
              src="/estatex-logo.svg"
              alt={`${site.name} logo`}
              className="h-14 w-14 rounded-2xl object-cover shadow-lg ring-1 ring-primary/10"
            />
            <div className="leading-tight">
              <h1 className="text-xl font-extrabold text-primary">EstateX</h1>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Buy • Sell • Invest
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-semibold text-gray-700 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gray-700 transition-colors hover:text-blue-600"
            >
              فيسبوك
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-primary to-primary-light px-6 py-2.5 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
            >
              تواصل الآن
            </a>
          </div>

          <button
            className="rounded-lg p-2 transition-colors hover:bg-gray-100 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open navigation menu"
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-gray-100 pb-4 md:hidden">
            <div className="flex flex-col gap-2 pt-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-2 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg px-4 py-2 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
              >
                صفحة فيسبوك
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="mx-4 rounded-full bg-gradient-to-r from-primary to-primary-light px-6 py-2.5 text-center font-semibold text-white"
              >
                واتساب مباشر
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
