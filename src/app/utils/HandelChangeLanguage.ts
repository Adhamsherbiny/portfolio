import i18n from "../lib/i18n";


const handleLanguageChange = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang).then(() => {
      localStorage.setItem("i18nextLng", newLang);
      document.body.dir = newLang === "ar" ? "rtl" : "ltr";
    });
  };

  export default handleLanguageChange;