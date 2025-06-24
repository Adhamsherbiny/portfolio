"use client";
// import { useTranslation } from "react-i18next";
import { useLanguageInitializer } from "./hooks/UseTranslations";
import HomeComponent from "./components/common/HomeComponent";
import Loading from "./components/common/Loading";
import OurServices from "./components/common/OurServices";

export default function Home() {
  const { isMounted } = useLanguageInitializer();
  if (!isMounted) {
    return <Loading />;
  } else {
    return (
      <div className="main-page">
        <HomeComponent />
        <OurServices />
      </div>
    );
  }
}
