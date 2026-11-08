"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { courses } from "@/data/courses";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { language } = useLanguage();
  const isAz = language === "AZ";

  return (
    <footer className="bg-navy px-6 py-14 text-white lg:px-10 lg:py-18">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-1">
            <span className="text-3xl font-black tracking-tighter text-white">
              DƏRSİVA
            </span>
            <span className="mb-5 h-3 w-3 rounded-full bg-orange" />
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-white/55">
            {isAz
              ? "Websayt demo məqsədi daşıyır. "
              : "The website is for demonstration purposes only."}
          </p>
        </div>

        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-lime">
            {isAz ? "KURSLAR" : "COURSES"}
          </p>
          <div className="grid gap-3">
            {courses.map((course) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="text-sm text-white/60 transition-colors hover:text-orange"
              >
                {isAz ? course.title : course.titleEn}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-lime">
            {isAz ? "ƏLAQƏ" : "CONTACT"}
          </p>
          <div className="space-y-4 text-sm text-white/60">
            <p className="flex items-center gap-3"><Phone size={16} className="text-orange" /> +994 00 000 00 00</p>
            <p className="flex items-center gap-3"><Mail size={16} className="text-orange" /> info@dersiva.example</p>
            <p className="flex items-center gap-3"><MapPin size={16} className="text-orange" /> Bakı, Azərbaycan</p>
          </div>
          <Link
            href="/contact#application"
            className="mt-7 inline-flex items-center gap-2 font-bold text-orange hover:text-lime"
          >
            {isAz ? "Müraciət et" : "Apply now"} <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-5 text-xs text-white/35">
        © 2026 Dərsiva Academy
      </div>
    </footer>
  );
}
