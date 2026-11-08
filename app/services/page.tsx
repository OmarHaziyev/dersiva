
 "use client";

import Navbar from "@/components/Navbar";
import Courses from "@/components/Courses";
import { useLanguage } from "@/components/LanguageProvider";

export default function ServicesPage() {
  const { language } = useLanguage();
  const isAz = language === "AZ";

  return (
    <main>
      <Navbar />

      <div className="bg-ivory px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-orange">
            DƏRSİVA / {isAz ? "XİDMƏTLƏR" : "SERVICES"}
          </p>

          <h1 className="text-5xl font-black tracking-tight text-navy sm:text-6xl lg:text-7xl">
            {isAz ? "Öyrənmək üçün" : "The right direction"}
            <br />
            <span className="text-blue">{isAz ? "doğru istiqamət." : "for learning."}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-navy/60">
            {isAz
              ? "Məqsədlərinə uyğun tədris proqramını seç və inkişaf yoluna bizimlə başla."
              : "Choose a learning program for your goals and start your growth journey with us."}
          </p>
        </div>
      </div>

      <Courses />
    </main>
  );
}
