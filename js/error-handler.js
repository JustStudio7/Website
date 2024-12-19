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

const errorMessageElement = document.getElementById("eS2");
if (ERROR_NAME) {
    errorMessageElement.textContent = `Error: ${ERROR_NAME}.`;
} else {
    errorMessageElement.textContent = "Error: Unknown error.";
}

let err_res = false;

setTimeout(() => {
    if (ERROR_ID) {
        if (ERROR_ID === 1) {
            const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
            if (darkThemeMq.matches) {
                switchThemeToDark();
            } else {
                switchThemeToLight();
            }
            err_res = true;
        }
    }
    if (err_res) {
        setTimeout(() => {
            const resolvingElement = document.getElementById("eS1");
            resolvingElement.textContent = "Resolving...";
            setTimeout(() => {
                resolvingElement.textContent = "Done!";
                setTimeout(() => {
                    window.location.reload();
                }, 10);
            }, 2000);
        }, 2300);
    }
},5000);
