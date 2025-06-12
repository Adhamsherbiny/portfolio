"use client";
import { useTranslation } from "react-i18next";
import { useLanguageInitializer } from "./hooks/UseTranslations";

export default function Home() {
  const { t } = useTranslation();
  const { isMounted } = useLanguageInitializer();
  if (!isMounted) return null;
  return <div>{t("mainPage")}</div>;
}
