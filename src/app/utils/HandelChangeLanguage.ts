import i18n from "../lib/i18n";


const handleLanguageChange = () => {
  const navigation = document.getElementById("navigation")!;
  const tabs = document.getElementById("tabs")!;
  const projectContainer = document.getElementById("ourProjects")!;
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang).then(() => {
      localStorage.setItem("i18nextLng", newLang);
      document.body.dir = newLang === "ar" ? "rtl" : "ltr";
      tabs.style.direction = newLang === "ar" ? "rtl" : "ltr";
      navigation.style.direction = "ltr";
      projectContainer.style.direction = "ltr";
      window.location.reload();
    });
  };

  export default handleLanguageChange;