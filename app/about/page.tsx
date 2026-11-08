"use client";

import Navbar from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageProvider";
import { HeartHandshake, Lightbulb, Users } from "lucide-react";

export default function AboutPage() {
  const { language } = useLanguage();
  const isAz = language === "AZ";

  const values = [
    {
      icon: Users,
      title: isAz ? "Fərdi yanaşma" : "Personal approach",
      description: isAz
        ? "Hər bir şagirdin məqsədini və ehtiyaclarını nəzərə alırıq."
        : "We take every student's goals and needs into account.",
    },
    {
      icon: Lightbulb,
      title: isAz ? "Aydın öyrənmə" : "Clear learning",
      description: isAz
        ? "Mövzuları sadə, sistemli və praktik şəkildə izah edirik."
        : "We explain topics in a simple, structured, and practical way.",
    },
    {
      icon: HeartHandshake,
      title: isAz ? "Davamlı dəstək" : "Ongoing support",
      description: isAz
        ? "Uğura gedən yolda şagirdlərimizin yanında oluruq."
        : "We support our students throughout their journey to success.",
    },
  ];

  return (
    <main>
      <Navbar />

      <section className="bg-ivory px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange">
              <span className="h-2 w-2 rounded-full bg-orange" />
              {isAz ? "DƏRSİVA HAQQINDA" : "ABOUT DƏRSİVA"}
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight text-navy sm:text-6xl lg:text-8xl">
              {isAz ? "Öyrənmək üçün" : "A better way"}
              <br />
              <span className="text-blue">
                {isAz ? "daha yaxşı yol." : "to learn."}
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-navy/60">
              {isAz
                ? "Dərsiva hər bir şagirdə öz potensialını kəşf etməyə və məqsədlərinə inamla çatmağa kömək edən kursdur."
                : "Dərsiva is a course that helps every student discover their potential and reach their goals with confidence."}
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-blue">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85"
              alt={isAz ? "Müəllim və tələbələr" : "Teacher and students"}
              className="h-[380px] w-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-orange">
              {isAz ? "BİZİM YANAŞMAMIZ" : "OUR APPROACH"}
            </p>
            <h2 className="text-4xl font-black tracking-tight text-navy sm:text-5xl">
              {isAz
                ? "Təhsil yalnız dərsdən ibarət deyil."
                : "Education is more than a lesson."}
            </h2>
            <p className="mt-5 leading-8 text-navy/60">
              {isAz
                ? "Biz şagirdlərə yalnız mövzuları öyrətmir, həm də özünə inam, düşünmə bacarığı və davamlı inkişaf vərdişi qazandırırıq."
                : "We do more than teach subjects. We build confidence, critical thinking, and a habit of continuous growth."}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-3xl bg-ivory p-7">
                <div className="mb-7 inline-flex rounded-2xl bg-blue p-3 text-white">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-black text-navy">{title}</h3>
                <p className="mt-3 leading-7 text-navy/60">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
