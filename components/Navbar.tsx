
"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { courses } from "@/data/courses";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { label: language === "AZ" ? "Ana səhifə" : "Home", href: "/" },
    { label: language === "AZ" ? "Haqqımızda" : "About us", href: "/about" },
    { label: language === "AZ" ? "Əlaqə" : "Contact", href: "/contact" },
  ];

  const contactLabel = language === "AZ" ? "Müraciət et" : "Apply now";

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-ivory/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span className="text-3xl font-black tracking-tighter text-blue">
            DƏRSİVA
          </span>
          <span className="mb-5 h-3 w-3 rounded-full bg-orange" />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 md:flex">
          <Link
            href={navLinks[0].href}
            className="text-sm font-semibold text-navy/70 transition-colors hover:text-orange"
          >
            {navLinks[0].label}
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              className="flex items-center gap-1 text-sm font-semibold text-navy/70 transition-colors hover:text-orange"
            >
              {language === "AZ" ? "Xidmətlər" : "Services"}
              <ChevronDown
                size={15}
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </div>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2">
                <div className="rounded-2xl border border-navy/10 bg-white p-2 shadow-xl">
                  {courses.map((course) => (
                    <Link
                      key={course.slug}
                      href={`/courses/${course.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm font-semibold text-navy transition-colors hover:bg-ivory hover:text-orange"
                    >
                      {language === "AZ" ? course.title : course.titleEn}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-navy/70 transition-colors hover:text-orange"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden items-center gap-5 md:flex">

          {/* Language switcher */}
          <div className="flex items-center gap-1 rounded-full bg-white p-1">
            {(["AZ", "EN"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition-all ${
                  language === lang
                    ? "bg-navy text-white"
                    : "text-navy/50 hover:text-navy"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact#application"
            className="group flex items-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-bold text-white transition-all hover:bg-blue"
          >
            {contactLabel}
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-navy md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="border-t border-navy/10 bg-ivory px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            <Link
              href={navLinks[0].href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-bold text-navy"
            >
              {navLinks[0].label}
            </Link>

            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              className="flex items-center justify-between text-left text-lg font-bold text-navy"
            >
              {language === "AZ" ? "Xidmətlər" : "Services"}
              <ChevronDown
                size={20}
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="-mt-2 flex flex-col gap-3 border-l-2 border-orange pl-4">
                {courses.map((course) => (
                  <Link
                    key={course.slug}
                    href={`/courses/${course.slug}`}
                    onClick={() => {
                      setServicesOpen(false);
                      setMobileOpen(false);
                    }}
                    className="text-base font-semibold text-navy/70"
                  >
                    {language === "AZ" ? course.title : course.titleEn}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-bold text-navy"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact#application"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-3 font-bold text-white"
            >
              {contactLabel}
              <ArrowUpRight size={18} />
            </Link>

            <div className="flex gap-3">
              {(["AZ", "EN"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`rounded-full px-4 py-2 text-sm font-bold ${
                    language === lang
                      ? "bg-navy text-white"
                      : "bg-white text-navy"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
