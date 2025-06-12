function ChangeMode() {
  if (localStorage.getItem("mode") == "true") {
    document.body.style.setProperty("--dark-mode", "white");
    document.body.style.setProperty("--text-color", "black");
  } else {
    document.body.style.setProperty("--dark-mode", "black");
    document.body.style.setProperty("--text-color", "white");
  }
}
export default ChangeMode;
