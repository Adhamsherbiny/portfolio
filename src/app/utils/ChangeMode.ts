function ChangeMode() {
  if (localStorage.getItem("mode") == "true") {
    document.body.style.setProperty("--dark-mode", "white");
    document.body.style.setProperty("--text-color", "#030712");
  } else {
    document.body.style.setProperty("--dark-mode", "#030712");
    document.body.style.setProperty("--text-color", "white");
  }
}
export default ChangeMode;
