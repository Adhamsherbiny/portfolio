"use client";
// import { useTranslation } from "react-i18next";
import { useLanguageInitializer } from "./hooks/UseTranslations";
import HomeComponent from "./components/common/HomeComponent";
import Loading from "./components/common/Loading";

export default function Home() {
  const { isMounted } = useLanguageInitializer();
  if (!isMounted) {
    return <Loading />;
  } else {
    return (
      <div className="main-page">
        <HomeComponent />
      </div>
    );
  }
}
