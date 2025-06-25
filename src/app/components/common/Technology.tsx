/* eslint-disable @next/next/no-img-element */
import { useLanguageInitializer } from "@/app/hooks/UseTranslations";
import React from "react";
import { useTranslation } from "react-i18next";
import Loading from "./Loading";
import "@/app/styles/technology.scss";

export default function Technology() {
  const { t } = useTranslation();
  const { isMounted } = useLanguageInitializer();
  if (!isMounted) {
    return <Loading />;
  } else {
    return (
      <div className="technology" id="technologies">
        <h2>{t("technologies")}</h2>
        <p>{t("technologiesDescription")}</p>
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
          <img
            src="/tech/icons8-express-js.svg"
            className="tech-icon"
            alt="tech-icon"
          />
          <img src="/tech/react-2.svg" className="tech-icon" alt="tech-icon" />
          <img src="/tech/next-js.svg" className="tech-icon" alt="tech-icon" />
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
