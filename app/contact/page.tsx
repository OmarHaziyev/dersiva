"use client";

import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/components/LanguageProvider";
import {
  ArrowUpRight,
  Clock,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  const { language } = useLanguage();
  const isAz = language === "AZ";
  const mapKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <main>
      <Navbar />

      <section className="bg-ivory px-6 pb-20 pt-14 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange">
              <span className="h-2 w-2 rounded-full bg-orange" />
              {isAz ? "BİZİMLƏ ƏLAQƏ" : "GET IN TOUCH"}
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight text-navy sm:text-6xl lg:text-8xl">
              {isAz ? "Sənin uğur" : "Your success"}
              <br />
              {isAz ? "hekayən " : "story "}
              <span className="text-blue">{isAz ? "buradan" : "starts here"}</span>
              <span className="text-orange">.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-navy/60">
              {isAz
                ? "Sualların var? Bizimlə əlaqə saxla və məqsədlərinə uyğun tədris proqramını birlikdə müəyyən edək."
                : "Have questions? Get in touch and let us find the right learning program for your goals."}
            </p>

            <div className="mt-12 grid max-w-2xl gap-5 sm:grid-cols-2">
              {[
                [Phone, isAz ? "Telefon" : "Phone", "+994 00 000 00 00"],
                [Mail, isAz ? "E-poçt" : "Email", "info@dersiva.example"],
                [MapPin, isAz ? "Ünvan" : "Address", "Bakı, Azərbaycan"],
                [Clock, isAz ? "İş saatları" : "Working hours", "09:00 – 19:00"],
              ].map(([Icon, label, value]) => (
                <div key={label as string} className="rounded-2xl bg-white p-5">
                  <Icon size={22} className="mb-4 text-orange" />
                  <p className="text-sm font-bold text-navy">{label as string}</p>
                  <p className="mt-2 text-sm text-navy/55">{value as string}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] bg-blue shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"
              alt={isAz ? "Birlikdə öyrənən tələbələr" : "Students learning together"}
              className="h-[520px] w-full object-cover mix-blend-luminosity opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent" />
            <p className="absolute bottom-8 left-8 text-2xl font-black text-white">
              {isAz ? "Gələcəyini birlikdə quraq." : "Let's build your future together."}
            </p>
          </div>
        </div>
      </section>

      <section id="application" className="scroll-mt-24 bg-white px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-stretch gap-6 lg:grid-cols-2">
          <div className="flex min-h-[620px] flex-col overflow-hidden rounded-3xl bg-navy">
            <div className="p-7 sm:p-9">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-orange">
                {isAz ? "BİZİ HARADA TAPARSAN?" : "FIND US"}
              </p>
              <h2 className="text-3xl font-black text-white">
                {isAz ? "Gəl, tanış olaq." : "Come say hello."}
              </h2>
            </div>
            <div className="relative min-h-[400px] flex-1 bg-ivory">
              {mapKey ? (
                <iframe
                  title="Dərsiva location map"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=40.3777,49.8920&zoom=15`}
                />
              ) : (
                <div className="flex h-full min-h-[400px] flex-col items-center justify-center p-8 text-center">
                  <MapPin size={38} className="text-orange" />
                  <p className="mt-4 font-bold text-navy">{isAz ? "Bakı, Azərbaycan" : "Baku, Azerbaijan"}</p>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-navy/55">
                    {isAz ? "Demo məkan. Xəritəni aktivləşdirmək üçün API açarı əlavə et." : "Demo location. Add an API key to enable the map."}
                  </p>
                </div>
              )}
            </div>
            <a href="https://www.google.com/maps?q=40.3777,49.8920" target="_blank" rel="noreferrer" className="flex items-center justify-between p-5 text-xs text-white/55 hover:text-orange">
              {isAz ? "Bakı, Azərbaycan" : "Baku, Azerbaijan"}
              <span className="flex items-center gap-1 font-bold">{isAz ? "Xəritədə aç" : "Open map"} <ArrowUpRight size={15} /></span>
            </a>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="bg-blue px-6 py-16 text-center text-white lg:px-10">
        <Globe size={28} className="mx-auto text-lime" />
        <h2 className="mt-5 text-3xl font-black sm:text-4xl">{isAz ? "Bizi sosial mediada izlə." : "Follow us on social media."}</h2>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 font-bold text-white hover:bg-navy">
          Instagram <ArrowUpRight size={18} />
        </a>
      </section>
    </main>
  );
}
