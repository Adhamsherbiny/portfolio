import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export function useLanguageInitializer() {
  const { i18n } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedLang = localStorage.getItem("i18nextLng") || "en";
    if (i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang).then(() => {
        document.body.dir = savedLang === "ar" ? "rtl" : "ltr";
      });
    }
  }, [i18n]);

  return { isMounted };
}
