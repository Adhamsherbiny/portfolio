/* eslint-disable @next/next/no-img-element */
"use client";
import "@/app/styles/homeComponent.scss";
import React from "react";
import { useLanguageInitializer } from "@/app/hooks/UseTranslations";
import { useTranslation } from "react-i18next";
import Loading from "./Loading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function HomeComponent() {
  const { t } = useTranslation();
  const { isMounted } = useLanguageInitializer();
  gsap.registerPlugin(ScrollTrigger);
  const timeLine = gsap.timeline();
  useGSAP(() => {
    timeLine.from(".pic", {
      x: -100,
      autoAlpha: 0,
      duration: 1,
    });
    timeLine.from(".text h1", {
      y: -50,
      autoAlpha: 0,
      duration: 0.5,
    });
    timeLine.from(".text h2", {
      y: -50,
      autoAlpha: 0,
      duration: 0.5,
    });
    timeLine.from(".text p", {
      y: -50,
      autoAlpha: 0,
      duration: 0.5,
    });

    timeLine.to(".homeComponent", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".homeComponent",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [isMounted]);

  if (!isMounted) {
    return <Loading />;
  } else {
    return (
      <div className="homeComponent" id="home">
        <div className="carrer-objective">
          <div className="pic">
            <img src="/mypic.jpg" alt="profile-picture" loading="lazy" />
          </div>
          <div className="text">
            <h1>{t("carrerName")}</h1>
            <h2>{t("jobDescription")}</h2>
            <p>{t("carrerObjective")}</p>
          </div>
        </div>
      </div>
    );
  }
}
