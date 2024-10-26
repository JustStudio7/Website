let theme = localStorage.getItem('theme');
const themeSwitch = document.getElementById('theme-switch');

const switchThemeToLight = () => {
  document.body.classList.add('t-light');
  localStorage.setItem('theme', 'light');
}

const switchThemeToDark = () => {
  document.body.classList.remove('t-light');
  localStorage.setItem('theme', 'dark');
}

if(theme === "light") switchThemeToLight()

themeSwitch.addEventListener("click", () => {
  theme = localStorage.getItem('theme');
  theme !== "light" ? switchThemeToLight() : switchThemeToDark()
})
