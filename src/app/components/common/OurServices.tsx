import { useLanguageInitializer } from "@/app/hooks/UseTranslations";
import React from "react";
import Loading from "./Loading";
import { useTranslation } from "react-i18next";
import "@/app/styles/ourServices.scss";

export default function OurServices() {
  const { isMounted } = useLanguageInitializer();
  const { t } = useTranslation();

  if (!isMounted) {
    return <Loading />;
  }

  // جلب الخدمات من ملف الترجمة
  const services = t("services", { returnObjects: true }) as {
    title: string;
    description: string;
    points: string[];
  }[];

  return (
    <div className="ourServices" id="services">
      <h2>{t("ourServices")}</h2>
      <p>{t("ourServicesDescription")}</p>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
