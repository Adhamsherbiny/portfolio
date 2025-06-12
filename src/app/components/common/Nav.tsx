/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useEffect } from "react";
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

  useEffect(() => {
    ChangeMode();
  }, []);

  if (!isMounted) return null;

  return (
    <nav id="navigation" className="navigation">
      <div className="logo">
        <div className="pic">
          <img src="/bird-prey_15707391.png" alt="logo" />
        </div>
      </div>
      <div className="tabs">
        <ul>
          <li>
            <Link href="" className="nav-tabs">
              {t("mainPage")}
            </Link>
          </li>
          <li>
            <Link href="" className="nav-tabs">
              {t("contactUs")}
            </Link>
          </li>
          <li>
            <Link href="" className="nav-tabs">
              {t("ourServices")}
            </Link>
          </li>
          <li>
            <Link href="" className="nav-tabs">
              {t("ourProjects")}
            </Link>
          </li>
          <li>
            <Link href="" className="nav-tabs">
              {t("bookNow")}
            </Link>
          </li>
        </ul>
      </div>
      <div className="btns">
        <button className="btn">{t("login")}</button>
        <button className="btn">{t("register")}</button>
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
