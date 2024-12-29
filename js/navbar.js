/*

MIT License

Copyright (c) 2024 JustStudio. <https://juststudio.is-a.dev/>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

const headerElement = document.querySelector('.header');
headerElement.innerHTML = `
<div class="dropdown h-terms">
    <div class="trigger">
        <span class="txt3"><em style="display:none;" class="OUTDATED">📜</em>Terms</span>
        <ul class="buttons">
            <li><a href="/terms" class="txt4">User Agreement</a></li>
            <li><a href="/rules" class="txt5">Rules For Players</a></li>
        </ul>
    </div>
</div>
    
    <div class="dropdown h-products">
    <div class="trigger">
        <span class="txt6"><em style="display:none;" class="OUTDATED">🟣</em>Products</span>
        <ul class="buttons">
            <li><a href="/account/" class="txt7">JustStudio.Accounts</a></li>
            <li><a href="https://api.juststudio.is-a.dev/" class="txt8">API</a></li>
        </ul>
    </div>
</div><div class="dropdown h-games">
    <div class="trigger">
        <span class="txt9"><em style="display:none;" class="OUTDATED">🎮</em>Games</span>
        <ul class="buttons">
            <li><a style="color:rgba(0,0,0,0.5);" class="txt10">Coming soon...</a></li>
            
        </ul>
    </div>
</div>
<div class="h-main">
    <span class="txt1">JustStudio.</span>
    <a href="https://discord.gg/aHXxS6VvcC" target="_blank" rel="noreferrer noopener">
        <img src="https://juststudio.is-a.dev/img/discord.white.svg" alt="Discord Server">
    </a>
    <a target="_blank" rel="noreferrer noopener" href="https://www.roblox.com/groups/11641563/JustStudio#!/about">
        <img src="https://juststudio.is-a.dev/img/roblox.white.svg" alt="Roblox Community">
    </a>
    <a target="_blank" rel="noreferrer noopener" href="https://github.com/JustStudio7">
        <img src="https://juststudio.is-a.dev/img/github.white.svg" alt="GitHub Profile">
    </a>
    <a target="_blank" rel="noreferrer noopener" id="header-switch">
        <img src="https://juststudio.is-a.dev/img/arrow.svg" style="margin-left: 5px; height: 24px; width: 24px;">
    </a>
    <a target="_blank" rel="noreferrer noopener" href="https://juststudio.is-a.dev/#team" style="display:none">
        <span>team</span>
    </a>
</div>
    <div id="acc-btn" style="display:none;">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M720-520h-80q-17 0-28.5-11.5T600-560q0-17 11.5-28.5T640-600h80v-80q0-17 11.5-28.5T760-720q17 0 28.5 11.5T800-680v80h80q17 0 28.5 11.5T920-560q0 17-11.5 28.5T880-520h-80v80q0 17-11.5 28.5T760-400q-17 0-28.5-11.5T720-440v-80Zm-360 40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-240v-32q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v32q0 33-23.5 56.5T600-160H120q-33 0-56.5-23.5T40-240Zm80 0h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"></path></svg>
    </div>
    <div id="theme-switch">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1437f3">
            <path d="M480-120q-151 0-255.5-104.5T120-480q0-138 90-239.5T440-838q13-2 23 3.5t16 14.5q6 9 6.5 21t-7.5 23q-17 26-25.5 55t-8.5 61q0 90 63 153t153 63q31 0 61.5-9t54.5-25q11-7 22.5-6.5T819-479q10 5 15.5 15t3.5 24q-14 138-117.5 229T480-120Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6e3bf3">
            <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Z"></path>
        </svg>
    </div>
    <div id="lang-switch">
        <span class="txt11">EN</span>
    </div>
`;
headerElement.parentElement.innerHTML += `
    <span class="home-footer1 footer">
        <a href="https://github.com/JustStudio7/Website/blob/main/LICENSE" target="_blank">
              <span style="opacity: 0.5;text-decoration: underline;text-decoration-color: rgba(255,255,255,0.33);" class="txt12">© 2024 JustStudio.</span>
        </a>
        <br>
    </span>
`;
let theme = localStorage.getItem('theme');
const themeSwitch = document.getElementById('theme-switch');
const acc_btn = document.getElementById('acc-btn');

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
themeSwitch.addEventListener("dblclick", () => { 
  theme = localStorage.getItem('theme');
  theme !== "special" ? switchThemeToSpecial() : null
});

acc_btn.addEventListener("click", () => {
  window.location.href = "https://juststudio.is-a.dev/account/";
})

if (!theme) {
    try {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        if (darkThemeMq.matches) {
            switchThemeToDark();
        } else {
            switchThemeToLight();
        }
    } catch {
        switchThemeToDark();
    }
} else {
    if (theme !== "special" && theme !== "dark" && theme !== "light") {
      let ERROR_NAME = 'Unknown theme';
      let ERROR_ID = 1;
      fetch('https://juststudio.is-a.dev/data/visual-error.txt')
        .then(response => response.text())
        .then(data => {
          const lines = data.split('\n').slice(29).join('\n');
          document.body.innerHTML += lines;
        });
      fetch('https://juststudio.is-a.dev/js/error-handler.js')
        .then(response => response.text())
        .then(data => {
            eval(data);
        });
    }
}

const outdatedElements = document.getElementsByClassName("OUTDATED");
while (outdatedElements.length > 0) {
    outdatedElements[0].parentNode.removeChild(outdatedElements[0]);
}

sessionStorage.setItem('MLSsys', 'false');
function initializeMultiLanguageSupportSystem() {
    if (sessionStorage.getItem('MLSsys') === 'false') {
        "use strict";
        sessionStorage.setItem('MLSsys', 'true');
        
        let lang = globalThis.localStorage.getItem('language');
        const langSwitch = document.getElementById('lang-switch');
        let cooldown = false;
        
        function fetchTranslations(newLang) {
            const url = newLang === 'RU' ? 'https://juststudio.is-a.dev/js/lang/ru.js' : 'https://juststudio.is-a.dev/js/lang/en.js';
            return fetch(url)
                .then(response => response.text())
                .then(data => {
                const cleanedData = data.split('\n').slice(27).join('\n');
                const jsonString = cleanedData.replace(/\\+/g, '\\').trim();
                return JSON.parse('{\n'+jsonString);
            });
        }
        
        function updateLanguage(newLang, doTranaitions) {
            fetchTranslations(newLang).then(Translations => {
                const count = Object.keys(Translations["EN"] || Translations["RU"]).length;
                const elementsToFade = [];
                
                for (let i = 1; i <= count; i++) {
                    const elements = document.getElementsByClassName(`txt${i}`);
                    for (let element of elements) {
                        const uniqueID = `txtElementDATA_${i}`;
                        const originalID = element.id;
                        const originalOpacity = element.style.opacity || '';
                        const originalTransition = element.style.transition || '';
        
                        sessionStorage.setItem(uniqueID, JSON.stringify({ originalID, originalOpacity, originalTransition }));
                        element.id = uniqueID;
                        elementsToFade.push({ element, newLang, i, originalOpacity, originalTransition });
                    }
                }
        
                fadeOut(elementsToFade, newLang, Translations, doTranaitions);
            });
        }
        
        function fadeOut(elements, newLang, Translations, doTranaitions) {
            if (doTranaitions) {
                let fadeCount = 0;
                elements.forEach(({ element, newLang, i, originalOpacity, originalTransition }) => {
                    element.style.transition = '300ms';
                    if (element.innerHTML !== Translations[newLang][i]) {
                        element.style.opacity = 0;
                    }
            
                    fadeCount++;
                    if (fadeCount === elements.length) {
                        setTimeout(() => {
                            changeInnerHTML(elements, newLang, Translations);
                        }, 300+50);
                    }
                });
            } else {
                changeInnerHTML(elements, newLang, Translations);
            }
        }
        
        function changeInnerHTML(elements, newLang, Translations) {
            elements.forEach(({ element, newLang, i }) => {
                if (newLang === "RU" && !Translations["RU"][i]) {
                    return;
                }
                element.innerHTML = Translations[newLang][i];
            });
        
            fadeIn(elements);
        }
        
        function fadeIn(elements) {
            elements.forEach(({ element }) => {
                const data = JSON.parse(sessionStorage.getItem(element.id));
                element.style.transition = '300ms';
                setTimeout(() => {
                    element.style.opacity = data.originalOpacity;
                    setTimeout(() => {
                        element.removeAttribute('id');
                        element.style.transition = data.originalTransition;
                        sessionStorage.setItem(`txtElementDATA`, element.id);
                        element.id = data.originalID;
                        sessionStorage.removeItem(`txtElementDATA_${sessionStorage.getItem(`txtElementDATA`)}`);
                        sessionStorage.removeItem(`txtElementDATA`);
                    }, 300);
                }, 50);
            });
        }
        
        function initializeLanguage() {
            if (!lang) {
                const userLang = navigator.language || navigator.userLanguage;
                lang = userLang.startsWith('ru') ? 'RU' : 'EN';
                globalThis.localStorage.setItem('language', lang);
            } else {
                if (lang !== 'EN' && lang !== 'RU') {
                    (function() {
                      let ERROR_NAME = 'Unknown language';
                      let ERROR_ID = 2;
                      fetch('https://juststudio.is-a.dev/data/visual-error.txt')
                        .then(response => response.text())
                        .then(data => {
                          const lines = data.split('\n').slice(29).join('\n');
                          document.body.innerHTML += lines;
                        });
                      fetch('https://juststudio.is-a.dev/js/error-handler.js')
                        .then(response => response.text())
                        .then(data => {
                            eval(data);
                        });
                    })();
                }
            }
            updateLanguage(lang, false);
        }
        
        langSwitch.addEventListener('click', () => {
            if (cooldown) {
                langSwitch.classList.add('s-shake');
                setTimeout(() => {
                    langSwitch.classList.remove('s-shake');
                }, 501);
            }
            if (cooldown) return;
            cooldown = true;
            lang = lang === 'EN' ? 'RU' : 'EN';
            globalThis.localStorage.setItem('language', lang);
            updateLanguage(lang, true);
            setTimeout(() => cooldown = false, 1000);
        });
        
        initializeLanguage();

        globalThis.window.addEventListener('storage', function(e) {  
            if (e.key === "language-upd") {
                initializeLanguage();
                globalThis.localStorage.removeItem('language-upd');
            }
        });
    } else {
        console.warn('MultiLanguageSupportSystem has already been initialized!');
    }
}
initializeMultiLanguageSupportSystem();

let headerState = localStorage.getItem('header');
const headerSwitch = document.getElementById('header-switch');

const switchHeaderStateToAlternative = () => {
  document.body.classList.add('h-alternative');
  localStorage.setItem('header', 'alternative');
}

const switchHeaderStateToDefault = () => {
  document.body.classList.remove('h-alternative');
  localStorage.setItem('header', 'default');
}

if(headerState === "alternative") switchHeaderStateToAlternative()

headerSwitch.addEventListener("click", () => {
  headerState = localStorage.getItem('header');
  headerState !== "alternative" ? switchHeaderStateToAlternative() : switchHeaderStateToDefault()
})

if (!headerState) {
    switchHeaderStateToDefault()
} else {
    if (headerState !== "alternative" && headerState !== "default") {
      let ERROR_NAME = 'Unknown header state';
      let ERROR_ID = 3;
      fetch('https://juststudio.is-a.dev/data/visual-error.txt')
        .then(response => response.text())
        .then(data => {
          const lines = data.split('\n').slice(29).join('\n');
          document.body.innerHTML += lines;
        });
      fetch('https://juststudio.is-a.dev/js/error-handler.js')
        .then(response => response.text())
        .then(data => {
            eval(data);
        });
    }
}

let terms_accepted = localStorage.getItem('d1');
function notify(icon, text, buttonText, id, blur, type) {
    "use strict";
    let notificsElement = globalThis.document.getElementById('notifications');
    let notificElement;
    if (!notificsElement) {
        globalThis.document.body.insertBefore(globalThis.document.createElement('div'), globalThis.document.getElementById('content')).id = 'notifications';
        notificsElement = globalThis.document.getElementById('notifications');
    }
    if (type && type == 'terms') {
        notificsElement.innerHTML = `<span class="notification" id="txt45"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1437f3"><path d="M480-120q-33 0-56.5-23.5T400-200q0-33 23.5-56.5T480-280q33 0 56.5 23.5T560-200q0 33-23.5 56.5T480-120Zm0-240q-33 0-56.5-23.5T400-440v-320q0-33 23.5-56.5T480-840q33 0 56.5 23.5T560-760v320q0 33-23.5 56.5T480-360Z"></path></svg>By using this website, you agree to the <a href="#" id="n_tl"> User Agreement</a>.<button id="${id}">I agree</button></span>`;
        document.getElementById('n_tl').addEventListener("click", () => {
            const width = window.innerWidth * 0.75;const height = window.innerHeight * 0.75;const left = (window.innerWidth - width) / 2;const top = (window.innerHeight - height) / 2;window.open('terms?navbar=false', 'User Agreement', `toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=${left},top=${top},width=${width},height=${height}`);return false;
        })
        if (globalThis.localStorage.getItem('language') !== 'EN') {
            globalThis.localStorage.setItem('language-upd', '_');
        }
    } else {
        if (buttonText) {
            if (icon) {
                notificsElement.innerHTML = `<span class="notification"><img href="${icon}"></img>${text}<button id="${id}">${buttonText}</button></span>`;
            } else {
                notificsElement.innerHTML = `<span class="notification">${text}<button id="${id}">${buttonText}</button></span>`;
            }
        } else { 
            if (type == 'wifi') {
                notificsElement.innerHTML = `<span class="notification" id="txt46"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1437f3"><path d="M762-84 414-434q-31 7-59.5 19T301-386q-21 14-46.5 14.5T212-389q-18-18-16.5-43.5T217-473q23-17 48.5-31t52.5-26l-90-90q-26 14-50.5 29.5T130-557q-20 16-45.5 16T42-559q-18-18-17-43t21-41q22-18 45-34.5t49-30.5l-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l679 679q12 12 12 28.5T819-84q-12 11-28.5 11.5T762-84Zm-282-36q-42 0-71-29.5T380-220q0-42 29-71t71-29q42 0 71 29t29 71q0 41-29 70.5T480-120Zm273-275q-16 16-37.5 15.5T678-396l-10-10-10-10-96-96q-13-13-5-27t28-9q45 11 85.5 31t75.5 47q18 14 20.5 36.5T753-395Zm165-164q-17 18-42 18.5T831-556q-72-59-161.5-91.5T480-680q-21 0-40.5 1.5T400-674q-25 4-45-10.5T331-724q-4-25 11-45t40-24q24-4 48.5-5.5T480-800q125 0 235.5 41.5T914-644q20 17 21 42t-17 43Z"/></svg>${text}</span>`;
                if (globalThis.localStorage.getItem('language') !== 'EN') {
                    globalThis.localStorage.setItem('language-upd', '_');
                }
            } else if (icon) {
                notificsElement.innerHTML = `<span class="notification"><img href="${icon}"></img>${text}</span>`;
            } else {
                notificsElement.innerHTML = `<span class="notification">${text}</span>`;
            }
        }
    }
    notificElement = notificsElement.querySelector('.notification');
    setTimeout(() => {
        notificElement.classList.add('n-hover');
        setTimeout(() => {
            notificElement.classList.remove('n-hover');
        }, 1500);
    }, 1000)
    if (blur) {
        const elementsToBlur = ['content', 'accounts', ':r3:', 'clerk-components'];
        elementsToBlur.forEach(id => {
            const element = globalThis.document.getElementById(id);
            if (element) {
                element.style.filter = 'blur(8px)';
                element.style['-webkit-filter'] = 'blur(8px)';
                element.style['pointer-events'] = 'none';
            }
        });
        globalThis.document.getElementById('content').style.scale = '110%';
    }
    return notificElement;
}
function r_notific(notificElement, blur) {
    if (blur) {
        const elementsToBlur = ['content', 'accounts', ':r3:', 'clerk-components'];
        elementsToBlur.forEach(id => {
            const element = globalThis.document.getElementById(id);
            if (element) {
                element.style.filter = '';
                element.style['-webkit-filter'] = '';
                element.style['pointer-events'] = '';
            }
        });
        globalThis.document.getElementById('content').style.scale = '';
    }
    notificElement.style.opacity = '0';
    notificElement.style.translate = '-50% 30%';
    setTimeout(() => {
        try {
            notificElement.parentNode.removeChild(notificElement);
        } catch {
            notificElement.remove();
        }
        checkUserAgreement()
    }, 701)
}
function checkUserAgreement() {
    terms_accepted = localStorage.getItem('d1');
    if (!terms_accepted) {
        "use strict";
        const n_te_b_id = 'n_ta'
        let n_te = globalThis.notify(null,null,null,n_te_b_id,false,'terms');
        globalThis.document.getElementById(n_te_b_id).addEventListener("click", () => {
            globalThis.r_notific(n_te,false);
            globalThis.localStorage.setItem('d1', 'y');
        });
    }
}
checkUserAgreement()
let n_connection;
window.addEventListener('offline', function() {
    n_connection = notify(null, 'No Internet connection!', null, null, true, 'wifi');
});
window.addEventListener('online', function() {
    r_notific(n_connection, true);
});

setInterval(() => {console.clear()},5000)
let initialWidth = window.innerWidth;
window.addEventListener('resize', () => {
    if (window.innerWidth < initialWidth) {
        const loopCode = () => {
            for (let i = 0; i < 5; i++) {
                console.log('%cSTOP!', `font-size:250px; background-color: white; color: red; border: 5px solid red; border-radius: 50px; padding: 5px;`);
                console.log('%cDo not copy/paste anything here, you could give attackers access to your JustStudio.Account!', `color: red; font-weight: 700; background-color: white; font-size: 20px; border: 5px solid white; border-radius: 50px; padding: 5px;`);
                console.log('%cIf you do not understand exactly what you are doing, close this window and stay safe.', `color: white; font-weight: 700; background-color: black; font-size: 20px; border: 5px solid black; border-radius: 50px; padding: 5px;`);
            }
        };

        const eventHandler = () => {
            loopCode();
        };

        window.addEventListener('mousemove', eventHandler);
        window.addEventListener('keydown', eventHandler);
        window.addEventListener('focus', eventHandler);
        window.addEventListener('blur', eventHandler);

        const checkWidth = setInterval(() => {
            if (window.innerWidth >= initialWidth) {
                clearInterval(checkWidth);
                window.removeEventListener('mousemove', eventHandler);
                window.removeEventListener('keydown', eventHandler);
                window.removeEventListener('focus', eventHandler);
                window.removeEventListener('blur', eventHandler);
            }
        }, 100);
    }
});
