const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
// доступ до розмітки
const themeRefs = document.querySelector("#theme-switch-toggle");
const bodyRef = document.body;
// console.log(bodyRef);
themeRefs.addEventListener("change", switchTheme);
// перевірка
checkTheme();
// функція перевірки теми
function checkTheme() {
  if (localStorage.theme === "dark-theme") {
    bodyRef.classList.add(Theme.DARK);
    themeRefs.checked = true;
  } else {
    bodyRef.classList.add(Theme.LIGHT);
  }
}

// функція зміни теми
function switchTheme(event) {
  bodyRef.classList.toggle(Theme.LIGHT);
  bodyRef.classList.toggle(Theme.DARK);
  if (event.target.checked) {
    localStorage.setItem("theme", Theme.DARK);
  } else {
    localStorage.setItem("theme", Theme.LIGHT);
  }
}
