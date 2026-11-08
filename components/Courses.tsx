
"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Calculator,
  BookOpen,
  Languages,
  Atom,
  FlaskConical,
  Globe,
  ArrowRight,
} from "lucide-react";
import { courses } from "@/data/courses";
import { useLanguage } from "./LanguageProvider";

const icons = {
  calculator: Calculator,
  "book-open": BookOpen,
  languages: Languages,
  atom: Atom,
  "flask-conical": FlaskConical,
  globe: Globe,
};

export default function Courses() {
  const { language } = useLanguage();
  const isAz = language === "AZ";
  return (
    <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue">
                {isAz ? "Xidmətlərimiz" : "Our services"}
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-black tracking-tight text-navy sm:text-5xl lg:text-6xl">
              {isAz ? "Hədəfinə uyğun" : "A learning program"}
              <br />
              <span className="text-blue">{isAz ? "tədris proqramı." : "for your goals."}</span>
            </h2>
          </div>

          <p className="max-w-sm leading-7 text-navy/60">
            {isAz
              ? "Hər bir şagirdin məqsədinə və ehtiyaclarına uyğun hazırlanmış tədris proqramlarımızla tanış ol."
              : "Discover learning programs designed around every student's goals and needs."}
          </p>
        </div>

        {/* Course grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = icons[course.icon as keyof typeof icons];
            const title = isAz ? course.title : course.titleEn;
            const subtitle = isAz ? course.subtitle : course.subtitleEn;
            const category = isAz ? course.category : course.categoryEn;

            return (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="group relative flex min-h-[310px] flex-col overflow-hidden rounded-3xl bg-blue p-7 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${course.image}')` }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-navy/45"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/35 to-blue/15"
                />

                {/* Decorative circle */}
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[25px] border-current opacity-[0.12] transition-transform duration-500 group-hover:scale-125" />

                {/* Top row */}
                <div className="relative flex items-start justify-between">
                  <div className="rounded-2xl bg-white/15 p-3">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-bold text-white">
                    {course.number} / 06
                  </span>
                </div>

                {/* Course information */}
                <div className="relative mt-auto">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white">
                    {category}
                  </p>

                  <h3 className="text-3xl font-black tracking-tight text-white">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-white">
                    {subtitle}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-current/15 pt-5">
                    <span className="text-sm font-bold">
                      {isAz ? "Ətraflı məlumat" : "Learn more"}
                    </span>

                    <span className="rounded-full bg-white/15 p-2 transition-all group-hover:bg-orange group-hover:text-white">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom link */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="flex items-center gap-2 font-bold text-blue transition-colors hover:text-orange"
          >
            {isAz ? "Bütün xidmətlərimiz" : "All services"}
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
