"use client";

import { createContext, useContext, useMemo, useState } from "react";

export type Language = "AZ" | "EN";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "AZ";
    const savedLanguage = window.localStorage.getItem("dersiva-language");
    return savedLanguage === "EN" ? "EN" : "AZ";
  });

  function setLanguage(language: Language) {
    setLanguageState(language);
    window.localStorage.setItem("dersiva-language", language);
  }

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
