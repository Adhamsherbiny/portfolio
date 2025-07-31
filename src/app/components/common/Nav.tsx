/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faLanguage,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import ChangeMode from "@/app/utils/ChangeMode";
import { useTranslation } from "react-i18next";
import handleLanguageChange from "@/app/utils/HandelChangeLanguage";
import { useLanguageInitializer } from "@/app/hooks/UseTranslations"; // استبدل المسار حسب موقع الملف
import openNavigation from "@/app/utils/OpenNav";

export default function Nav() {
  const { t } = useTranslation();
  const { isMounted } = useLanguageInitializer();
  const [isOpen, setIsOpen] = useState(false);

  const handelActiveTabs = (tabClick: any) => {
    const tabs = document.querySelectorAll(".nav-tabs");
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabClick.classList.add("active");
  };
  function isMobile() {
    if (window) {
      if (window.innerWidth < 1076) {
        console.log("mobile");
        setIsOpen(true);
      } else {
        console.log("not mobile");
        setIsOpen(false);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("resize", isMobile);
    return () => {
      window.removeEventListener("resize", isMobile);
    };
  }, [isOpen]);

  useEffect(() => {
    ChangeMode();
    isMobile();
  }, []);

  if (!isMounted) return null;

  return (
    <nav id="navigation" className="navigation">
      <div className="logo">
        <h3>{t("websiteName")}</h3>
      </div>
      <div className="tabs">
        <ul id="tabs">
          <li>
            <Link
              onClick={
                isOpen
                  ? (e) => {
                      handelActiveTabs(e.currentTarget);
                      openNavigation();
                    }
                  : (e) => {
                      handelActiveTabs(e.currentTarget);
                    }
              }
              href="#home"
              className="nav-tabs active"
            >
              {t("mainPage")}
            </Link>
          </li>
          <li>
            <Link
              onClick={
                isOpen
                  ? (e) => {
                      handelActiveTabs(e.currentTarget);
                      openNavigation();
                    }
                  : (e) => {
                      handelActiveTabs(e.currentTarget);
                    }
              }
              href="#services"
              className="nav-tabs "
            >
              {t("ourServices")}
            </Link>
          </li>
          <li>
            <Link
              onClick={
                isOpen
                  ? (e) => {
                      handelActiveTabs(e.currentTarget);
                      openNavigation();
                    }
                  : (e) => {
                      handelActiveTabs(e.currentTarget);
                    }
              }
              href="#technologies"
              className="nav-tabs"
            >
              {t("technologies")}
            </Link>
          </li>
          <li>
            <Link
              onClick={
                isOpen
                  ? (e) => {
                      handelActiveTabs(e.currentTarget);
                      openNavigation();
                    }
                  : (e) => {
                      handelActiveTabs(e.currentTarget);
                    }
              }
              href="#ourProjects"
              className="nav-tabs"
            >
              {t("ourProjects")}
            </Link>
          </li>

          <li>
            <Link
              onClick={
                isOpen
                  ? (e) => {
                      handelActiveTabs(e.currentTarget);
                      openNavigation();
                    }
                  : (e) => {
                      handelActiveTabs(e.currentTarget);
                    }
              }
              href=""
              className="nav-tabs"
            >
              {t("bookNow")}
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-icons">
        <FontAwesomeIcon
          className="theme"
          icon={faPalette}
          onClick={() => {
            localStorage.setItem(
              "mode",
              localStorage.getItem("mode") === "true" ? "false" : "true"
            );
            ChangeMode();
          }}
        />
        <FontAwesomeIcon
          onClick={handleLanguageChange}
          className="lang"
          icon={faLanguage}
        />
        <FontAwesomeIcon
          className="menu-icon"
          onClick={() => {
            openNavigation();
          }}
          icon={faBars}
        />
      </div>
    </nav>
  );
}
