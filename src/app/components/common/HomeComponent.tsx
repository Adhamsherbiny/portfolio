/* eslint-disable @next/next/no-img-element */
import "@/app/styles/homeComponent.scss";
import React from "react";
// import UseNotfications from "@/app/hooks/UseNotfications";
import { useLanguageInitializer } from "@/app/hooks/UseTranslations";
import { useTranslation } from "react-i18next";
import Loading from "./Loading";

export default function HomeComponent() {
  // const { data, setData, notificationComponent } = UseNotfications();
  const { t } = useTranslation();
  const { isMounted } = useLanguageInitializer();
  // useEffect(() => {
  //   setData({
  //     message: "Welcome to our website",
  //     type: "Welcome",
  //     time: 4000,
  //     show: true,
  //   });
  // }, [setData]);

  if (!isMounted) {
    return <Loading />;
  } else {
    return (
      <div className="homeComponent" id="home">
        {/* {data?.show && notificationComponent} */}
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
