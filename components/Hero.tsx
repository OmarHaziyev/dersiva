
"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { language } = useLanguage();
  const isAz = language === "AZ";

  return (
    <section className="overflow-hidden bg-ivory px-6 py-12 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="relative z-10">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue/20 bg-white px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-orange" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue">
              {isAz ? "Gələcəyinə bu gündən başla" : "Start your future today"}
            </span>
          </div>

          <h1 className="max-w-2xl text-5xl font-black leading-[1.08] tracking-tight text-navy sm:text-6xl lg:text-7xl">
            {isAz ? "Hədəflərinə" : "The right place"}
            <br />
            {isAz ? "çatmaq üçün" : "to reach"}
            <br />
            <span className="relative inline-block text-blue">
              {isAz ? "doğru yer." : "your goals."}
              <span className="absolute -bottom-1 left-0 -z-10 h-3 w-full -rotate-2 bg-orange" />
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-8 text-navy/60 sm:text-lg">
            {isAz
              ? "Güclü müəllim heyəti, sistemli hazırlıq və fərdi yanaşma. Uğura aparan yolda ilk addımını bizimlə at."
              : "Expert teachers, structured preparation, and a personal approach. Take your first step toward success with us."}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/services"
              className="group flex items-center gap-3 rounded-full bg-blue px-7 py-4 font-bold text-white transition-all hover:bg-navy"
            >
              {isAz ? "Kursları kəşf et" : "Explore courses"}
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full border border-navy/15 px-7 py-4 font-bold text-navy transition-all hover:border-orange hover:text-orange"
            >
              {isAz ? "Müraciət et" : "Apply now"}
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-navy/10 pt-7">
            <div>
              <p className="text-sm font-black text-navy">
                {isAz ? "Fərdi yanaşma" : "Personal approach"}
              </p>
              <p className="mt-1 text-xs text-navy/50">
                {isAz ? "Hər şagirdə xüsusi diqqət" : "Individual attention"}
              </p>
            </div>

            <div>
              <p className="text-sm font-black text-navy">
                {isAz ? "Peşəkar müəllimlər" : "Expert teachers"}
              </p>
              <p className="mt-1 text-xs text-navy/50">
                {isAz ? "Keyfiyyətli tədris" : "Quality education"}
              </p>
            </div>
          </div>
        </div>
        
        {/* RIGHT SIDE */}
        <div className="relative mx-auto w-full max-w-xl">

          {/* Main photograph */}
          <div className="relative aspect-[5/5] overflow-hidden rounded-[2.5rem] bg-navy">

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=90')",
              }}
            />

            {/* Subtle gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-navy/10" />

            {/* Small top label */}
            <div className="absolute left-8 top-8 z-10">
              <span className="rounded-full border border-white/40 bg-white/15 px-4 py-2 text-xs font-bold tracking-widest text-white backdrop-blur-sm">
                DƏRSİVA ACADEMY
              </span>
            </div>

            {/* Main typography */}
            <div className="absolute bottom-10 left-8 z-10 sm:bottom-12 sm:left-10">

              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-white/70">
                {isAz ? "Gələcəyini qur" : "Build your future"}
              </p>

              <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl">
                DREAM
                <br />
                BIG.
                <br />
                <span className="text-lime">ACHIEVE.</span>
              </h2>

              <div className="mt-6 h-1.5 w-20 rounded-full bg-orange" />

            </div>

            {/* Decorative corner element */}
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[24px] border-orange/80" />

          </div>

          {/* Small decorative element outside the image */}
          <div className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-full bg-orange" />

        </div>
      </div>
    </section>
  );
}
