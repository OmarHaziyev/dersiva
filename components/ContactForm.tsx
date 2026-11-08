
"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { language } = useLanguage();
  const isAz = language === "AZ";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <div id="application" className="scroll-mt-24 rounded-3xl bg-white p-7 sm:p-10">
      <div className="mb-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-orange">
          {isAz ? "İLK ADDIMINI AT" : "TAKE THE FIRST STEP"}
        </p>

        <h2 className="text-3xl font-black tracking-tight text-navy sm:text-4xl">
          {isAz ? "Bizə " : "Apply "}
          <span className="text-blue">{isAz ? "müraciət et." : "to us."}</span>
        </h2>

        <p className="mt-4 leading-7 text-navy/55">
          {isAz
            ? "Məlumatlarını qeyd et, proqramlarımız haqqında ətraflı məlumat almaq üçün səninlə əlaqə saxlayaq."
            : "Leave your details and we will contact you with more information about our programs."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-bold text-navy">
              {isAz ? "Ad və soyad" : "Full name"}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder={isAz ? "Adınızı daxil edin" : "Enter your name"}
              className="w-full rounded-xl border border-navy/10 bg-ivory px-4 py-3.5 text-sm outline-none transition focus:border-blue"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-bold text-navy">
              {isAz ? "Telefon nömrəsi" : "Phone number"}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+994 XX XXX XX XX"
              className="w-full rounded-xl border border-navy/10 bg-ivory px-4 py-3.5 text-sm outline-none transition focus:border-blue"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="course" className="mb-2 block text-sm font-bold text-navy">
              {isAz ? "Maraqlanılan kurs" : "Course of interest"}
            </label>
            <select
              id="course"
              name="course"
              required
              defaultValue=""
              className="w-full rounded-xl border border-navy/10 bg-ivory px-4 py-3.5 text-sm text-navy outline-none transition focus:border-blue"
            >
              <option value="" disabled>              {isAz ? "Kurs seçin" : "Select a course"}</option>
              <option>{isAz ? "Riyaziyyat" : "Mathematics"}</option>
              <option>{isAz ? "Azərbaycan dili" : "Azerbaijani language"}</option>
              <option>{isAz ? "İngilis dili" : "English"}</option>
              <option>{isAz ? "Fizika" : "Physics"}</option>
              <option>{isAz ? "Kimya" : "Chemistry"}</option>
              <option>IELTS</option>
            </select>
          </div>

          <div>
            <label htmlFor="level" className="mb-2 block text-sm font-bold text-navy">
              {isAz ? "Sinif / Səviyyə" : "Grade / Level"}
            </label>
            <select
              id="level"
              name="level"
              defaultValue=""
              className="w-full rounded-xl border border-navy/10 bg-ivory px-4 py-3.5 text-sm text-navy outline-none transition focus:border-blue"
            >
              <option value="" disabled>{isAz ? "Seçin" : "Select"}</option>
              <option>{isAz ? "9-cu sinif" : "9th grade"}</option>
              <option>{isAz ? "10-cu sinif" : "10th grade"}</option>
              <option>{isAz ? "11-ci sinif" : "11th grade"}</option>
              <option>{isAz ? "Universitet tələbəsi" : "University student"}</option>
              <option>{isAz ? "Başlanğıc səviyyə" : "Beginner level"}</option>
              <option>{isAz ? "Orta səviyyə" : "Intermediate level"}</option>
              <option>{isAz ? "Digər" : "Other"}</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-bold text-navy">
            {isAz ? "Əlavə qeyd " : "Additional note "}
            <span className="font-normal text-navy/40">
              ({isAz ? "istəyə bağlı" : "optional"})
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={isAz ? "Sualınız və ya əlavə qeydiniz varsa, yaza bilərsiniz..." : "Write any questions or notes here..."}
            className="w-full resize-none rounded-xl border border-navy/10 bg-ivory px-4 py-3.5 text-sm outline-none transition focus:border-blue"
          />
        </div>

        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-3 rounded-full bg-orange px-7 py-4 font-bold text-white transition-all hover:bg-blue"
        >
          {isAz ? "Müraciəti göndər" : "Send application"}
          <ArrowUpRight size={19} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>

        {submitted && (
          <p role="status" className="rounded-xl bg-orange/10 p-4 text-sm leading-6 text-navy">
            {isAz
              ? "Bu, Dərsiva portfolio demosudur. Forma yoxlanılır, lakin müraciətlərin göndərilməsi üçün backend hələ qoşulmayıb."
              : "This is a Dərsiva portfolio demo. The form is validated, but no backend is connected yet."}
          </p>
        )}

        <p className="text-center text-xs leading-5 text-navy/40">
          {isAz
            ? "Məlumatlarınız yalnız müraciətinizlə bağlı əlaqə saxlamaq üçün nəzərdə tutulub."
            : "Your information is used only to contact you about your application."}
        </p>
      </form>
    </div>
  );
}
