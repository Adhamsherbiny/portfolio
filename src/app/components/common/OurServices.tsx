"use client";
import { useLanguageInitializer } from "@/app/hooks/UseTranslations";
import React from "react";
import Loading from "./Loading";
import { useTranslation } from "react-i18next";
import "@/app/styles/ourServices.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faLaptop,
  faPenRuler,
  faRocket,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function OurServices() {
  const { isMounted } = useLanguageInitializer();
  const { t } = useTranslation();
  gsap.registerPlugin(ScrollTrigger);
  const timeLine = gsap.timeline();

  useGSAP(() => {
    timeLine.from(".ourServices h2", {
      opacity: 0.5,
      scrollTrigger: {
        trigger: ".ourServices h2",
        scrub: true,
        start: "top center",
        end: "bottom center",
      },
    });
    timeLine.from(".ourServices .description", {
      opacity: 0.5,
      scrollTrigger: {
        trigger: ".ourServices .description",
        scrub: true,
        start: "top center",
        end: "bottom center",
      },
    });

    timeLine.from(".services-container .service", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".services-container .service",
        scrub: true,
        start: "top center",
        end: "bottom center",
      },
    });
  }, [isMounted]);

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
      <p className="description">{t("ourServicesDescription")}</p>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service">
            <div className="logos-container">
              {index == 0 && (
                <FontAwesomeIcon className="logos" icon={faPenRuler} />
              )}
              {index == 1 && (
                <FontAwesomeIcon className="logos" icon={faLaptop} />
              )}
              {index == 2 && (
                <FontAwesomeIcon className="logos" icon={faCloud} />
              )}
              {index == 3 && (
                <FontAwesomeIcon className="logos" icon={faRocket} />
              )}
              {index == 4 && (
                <FontAwesomeIcon className="logos" icon={faScrewdriverWrench} />
              )}
            </div>
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
