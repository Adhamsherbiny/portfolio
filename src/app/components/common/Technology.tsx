/* eslint-disable @next/next/no-img-element */
import { useLanguageInitializer } from "@/app/hooks/UseTranslations";
import React from "react";
import { useTranslation } from "react-i18next";
import Loading from "./Loading";
import "@/app/styles/technology.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function Technology() {
  const { t } = useTranslation();
  const { isMounted } = useLanguageInitializer();
  gsap.registerPlugin(ScrollTrigger);
  const timeLine = gsap.timeline();
  useGSAP(() => {
    timeLine.from(".technology h2", {
      opacity: 0.5,
      scrollTrigger: {
        trigger: ".technology h2",
        scrub: true,
        start: "top center",
        end: "bottom center",
      },
    });
    timeLine.from(".technology .description", {
      opacity: 0.5,
      scrollTrigger: {
        trigger: ".technology .description",
        scrub: true,
        start: "top center",
        end: "bottom center",
      },
    });

    timeLine.from(".technology .tech", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".technology .tech",
        scrub: true,
        start: "top center",
        end: "bottom center",
      },
    });
  }, [isMounted]);
  if (!isMounted) {
    return <Loading />;
  } else {
    return (
      <div className="technology" id="technologies">
        <h2>{t("technologies")}</h2>
        <p className="description">{t("technologiesDescription")}</p>
        <div className="tech">
          <img src="/tech/html-1.svg" className="tech-icon" alt="tech-icon" />
          <img src="/tech/css-3.svg" className="tech-icon" alt="tech-icon" />
          <img
            src="/tech/javascript-1.svg"
            className="tech-icon"
            alt="tech-icon"
          />
          <img
            src="/tech/typescript-2.svg"
            className="tech-icon"
            alt="tech-icon"
          />
          <img
            src="/tech/new-php-logo.svg"
            className="tech-icon"
            alt="tech-icon"
          />
          <img src="/tech/mysql-3.svg" className="tech-icon" alt="tech-icon" />
          <img
            src="/tech/mongodb-icon-2.svg"
            className="tech-icon"
            alt="tech-icon"
          />
          <img
            src="/tech/nodejs-ar21.svg"
            className="tech-icon"
            alt="tech-icon"
          />

          <img src="/tech/react-2.svg" className="tech-icon" alt="tech-icon" />
          <img src="/tech/next-js.svg" className="tech-icon" alt="tech-icon" />
          <img
            src="/tech/icons8-express-js.svg"
            className="tech-icon"
            alt="tech-icon"
          />
          <img src="/tech/sass-1.svg" className="tech-icon" alt="tech-icon" />
          <img
            src="/tech/bootstrap-4.svg"
            className="tech-icon"
            alt="tech-icon"
          />
          <img
            src="/tech/tailwind-css-1-2.svg"
            className="tech-icon"
            alt="tech-icon"
          />
          <img
            src="/tech/gsap-greensock.svg"
            className="tech-icon"
            alt="tech-icon"
          />
        </div>
      </div>
    );
  }
}
