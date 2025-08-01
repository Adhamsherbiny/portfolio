/* eslint-disable @next/next/no-img-element */
import React from "react";
import "@/app/styles/ourProjects.scss";
import Loading from "./Loading";
import { useTranslation } from "react-i18next";
import { useLanguageInitializer } from "@/app/hooks/UseTranslations";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Link from "next/link";

export default function OurProjects() {
  const { t } = useTranslation();
  const { isMounted } = useLanguageInitializer();
  gsap.registerPlugin(ScrollTrigger);
  const timeLine = gsap.timeline();
  useGSAP(() => {
    timeLine.from(".ourProjects h2", {
      opacity: 0.5,
      scrollTrigger: {
        trigger: ".ourProjects h2",
        scrub: true,
        start: "top center",
        end: "bottom center",
      },
    });
    const slides = gsap.utils.toArray(
      ".ourProjects .projects-container .project"
    );
    timeLine.to(slides, {
      xPercent:
        window.getComputedStyle(document.body).direction === "rtl"
          ? 100 * (slides.length - 1)
          : -100 * (slides.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".ourProjects .projects-container",
        scrub: 2,
        start: "center center",
        end: "bottom center",
        pin: true,
      },
    });
  }, [isMounted]);

  if (!isMounted) {
    return <Loading />;
  } else {
    return (
      <div className="ourProjects" id="ourProjects">
        <h2>{t("ourProjects")}</h2>
        <div className="projects-container">
          <div className="project">
            <h3>{t("projectOneTitle")}</h3>
            <div className="img">
              <img
                src="/clinica project.png"
                alt="clinica photo"
                loading="lazy"
              />
            </div>
            <div className="description">
              <p>{t("projectOneDescription")}</p>
              <Link
                className="visit"
                href="https://clinica-front-tan.vercel.app/"
                target="_blank"
              >
                {t("visit")}
              </Link>
            </div>
          </div>
          <div className="project">
            <h3>{t("projectTwoTitle")}</h3>
            <div className="img">
              <img src="/makadi.png" alt="Makadi photo" loading="lazy" />
            </div>
            <div className="description">
              <p>{t("projectTwoDescription")}</p>
              <Link
                className="visit"
                href="https://makadi-heights-tawny.vercel.app/"
                target="_blank"
              >
                {t("visit")}
              </Link>
            </div>
          </div>
          <div className="project">
            <h3>{t("projectThreeTitle")}</h3>
            <div className="img">
              <img
                src="/e business card.png"
                alt="Business card photo"
                loading="lazy"
              />
            </div>
            <div className="description">
              <p>{t("projectThreeDescription")}</p>
              <Link
                className="visit"
                href="https://business-card-ui.vercel.app/"
                target="_blank"
              >
                {t("visit")}
              </Link>
            </div>
          </div>
          <div className="project">
            <h3>{t("projectFourTitle")}</h3>
            <div className="img">
              <img
                src="/realestate.png"
                alt="realestate photo"
                loading="lazy"
              />
            </div>
            <div className="description">
              <p>{t("projectFourDescription")}</p>
              <Link
                className="visit"
                href="https://real-estate-bay-theta.vercel.app/pages/login"
                target="_blank"
              >
                {t("visit")}
              </Link>
            </div>
          </div>
          <div className="project">
            <h3>{t("projectFiveTitle")}</h3>
            <div className="img">
              <img
                src="/shmoe & broug.png"
                alt="Shome & Broug photo"
                loading="lazy"
              />
            </div>
            <div className="description">
              <p>{t("projectFiveDescription")}</p>
              <Link
                className="visit"
                href="https://shmoe-broug.vercel.app/"
                target="_blank"
              >
                {t("visit")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
