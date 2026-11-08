"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Clock3, GraduationCap } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import type { Course } from "@/data/courses";

export default function CourseDetail({ course }: { course: Course }) {
  const { language } = useLanguage();
  const isAz = language === "AZ";
  const topics = isAz ? course.topics : course.topicsEn;

  return (
    <main>
      <section
        className="relative overflow-hidden bg-blue bg-cover bg-center px-6 py-20 text-white lg:px-10 lg:py-28"
        style={{ backgroundImage: `linear-gradient(115deg, rgba(23, 37, 84, 0.96), rgba(36, 77, 232, 0.72), rgba(36, 77, 232, 0.3)), url('${course.image}')` }}
      >
        <div className="relative mx-auto max-w-7xl">
          <Link href="/services" className="mb-12 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-orange">
            <ArrowLeft size={17} /> {isAz ? "Bütün kurslar" : "All courses"}
          </Link>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-lime">
            DƏRSİVA / {isAz ? course.category : course.categoryEn}
          </p>
          <h1 className="max-w-4xl text-6xl font-black tracking-tight sm:text-7xl lg:text-8xl">
            {isAz ? course.title : course.titleEn}<span className="text-orange">.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
            {isAz ? `${course.subtitle} ${course.description}` : `${course.subtitleEn} Build practical skills and confidence through our ${course.titleEn} learning program.`}
          </p>
          <Link href="/contact#application" className="mt-10 inline-flex items-center gap-3 rounded-full bg-orange px-7 py-4 font-bold text-white transition-colors hover:bg-navy">
            {isAz ? "Müraciət et" : "Apply now"} <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>

      <section className="bg-ivory px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-orange">{isAz ? "TƏDRİS PROQRAMI" : "LEARNING PROGRAM"}</p>
            <h2 className="text-4xl font-black tracking-tight text-navy sm:text-5xl">
              {isAz ? "Biliklərini" : "Take your skills"}<br />
              <span className="text-blue">{isAz ? "növbəti səviyyəyə" : "to the next level"}</span><br />
              {isAz ? "yüksəlt." : "today."}
            </h2>
            <p className="mt-7 max-w-lg leading-8 text-navy/60">
              {isAz ? "Tədris proqramımız mövzuları mərhələli şəkildə mənimsəməyinə və öyrəndiklərini praktiki tapşırıqlarda tətbiq etməyinə kömək edir." : "Our program helps you master topics step by step and apply what you learn through practical exercises."}
            </p>
            <div className="mt-10 flex items-center gap-4 rounded-2xl bg-white p-5">
              <div className="rounded-xl bg-orange/10 p-3 text-orange"><Clock3 size={25} /></div>
              <div>
                <p className="font-bold text-navy">{isAz ? "Tədris müddəti" : "Program duration"}</p>
                <p className="mt-1 text-sm text-navy/50">{isAz ? course.duration : course.durationEn}</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-7 sm:p-10">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-2xl font-black text-navy">{isAz ? "Proqramın məzmunu" : "Program content"}</h3>
              <div className="rounded-xl bg-blue/10 p-3 text-blue"><GraduationCap size={26} /></div>
            </div>
            <div className="space-y-5">
              {topics.map((topic, index) => (
                <div key={topic} className="flex items-center gap-4 border-b border-navy/10 pb-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime text-sm font-black text-navy">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-semibold text-navy">{topic}</span>
                  <Check size={18} className="ml-auto shrink-0 text-orange" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy px-6 py-20 text-center text-white lg:px-10">
        <h2 className="mx-auto max-w-3xl text-4xl font-black sm:text-5xl">
          {isAz ? "Hədəfinə doğru ilk addımını" : "Take your first step toward your goal"}
          <span className="text-orange">{isAz ? " bu gün at." : " today."}</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-white/60">{isAz ? "Tədris proqramımız haqqında ətraflı məlumat almaq və qeydiyyatdan keçmək üçün bizimlə əlaqə saxla." : "Contact us to learn more about the program and register."}</p>
        <Link href="/contact#application" className="mt-9 inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 font-bold text-white transition-colors hover:bg-blue">
          {isAz ? "İndi müraciət et" : "Apply now"} <ArrowUpRight size={19} />
        </Link>
      </section>
    </main>
  );
}
