const headerElement = document.querySelector('.header');
headerElement.innerHTML = `
    <div id="theme-switch">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1437f3">
            <path d="M480-120q-151 0-255.5-104.5T120-480q0-138 90-239.5T440-838q13-2 23 3.5t16 14.5q6 9 6.5 21t-7.5 23q-17 26-25.5 55t-8.5 61q0 90 63 153t153 63q31 0 61.5-9t54.5-25q11-7 22.5-6.5T819-479q10 5 15.5 15t3.5 24q-14 138-117.5 229T480-120Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6e3bf3">
            <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Z"></path>
        </svg>
    </div>
`;

let theme = localStorage.getItem('theme');
const themeSwitch = document.getElementById('theme-switch');

const switchThemeToLight = () => {
  document.body.classList.add('t-light');
  document.body.classList.remove('t-purple');
  localStorage.setItem('theme', 'light');
}

const switchThemeToDark = () => {
  document.body.classList.remove('t-light');
  document.body.classList.remove('t-purple');
  localStorage.setItem('theme', 'dark');
}

const switchThemeToSpecial = () => {
  document.body.classList.remove('t-light');
  document.body.classList.add('t-purple');
  localStorage.setItem('theme', 'special');
}

if(theme === "light") switchThemeToLight()
if(theme === "special") switchThemeToSpecial()

themeSwitch.addEventListener("click", () => {
  theme = localStorage.getItem('theme');
  theme !== "light" ? switchThemeToLight() : switchThemeToDark()
})
themeSwitch.addEventListener("dblclick", function(event) { 
  theme = localStorage.getItem('theme');
  theme !== "special" ? switchThemeToSpecial()
}, false);
