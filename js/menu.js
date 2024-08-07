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

       let onfooterhover = () => {
       let arrows = document.getElementsByClassName('home-arrow');
       let hitboxes = document.getElementsByClassName('home-hitbox2');
       for (let arrow of arrows) {
          arrow.style["pointer-events"] = "none";
          arrow.style.opacity = 0;
       }
       setTimeout(() => {
        for (let hitbox of hitboxes) {
          hitbox.style["pointer-events"] = "none";
        }
       }, 10);
      };

       let onfooterunhover = () => {
         let arrows = document.getElementsByClassName('home-arrow');
         let hitboxes = document.getElementsByClassName('home-hitbox2');
         let footers = document.getElementsByClassName('home-footer');
         for (let arrow of arrows) {
          arrow.style.opacity = 0.5;
          arrow.style["pointer-events"] = "all";
          }
          for (let footer of footers) {
          footer.style["pointer-events"] = "none";
          }
          setTimeout(() => {
            for (let hitbox of hitboxes) {
              hitbox.style["pointer-events"] = "all";
           }
           for (let footer of footers) {
          footer.style["pointer-events"] = "all";
          }
           }, 100);
      };

      let footer = document.querySelector('.home-footer');
      footer.addEventListener('mouseenter', onfooterhover);
      footer.addEventListener('mouseleave', onfooterunhover);

      let onheaderhover = () => {
       let arrows = document.getElementsByClassName('home-arrow1');
       let hitboxes = document.getElementsByClassName('home-hitbox3');
       for (let arrow of arrows) {
          arrow.style["pointer-events"] = "none";
          arrow.style.opacity = 0;
       }
       setTimeout(() => {
        for (let hitbox of hitboxes) {
          hitbox.style["pointer-events"] = "none";
        }
       }, 10);
      };

       let onheaderunhover = () => {
         let arrows = document.getElementsByClassName('home-arrow1');
         let hitboxes = document.getElementsByClassName('home-hitbox3');
         let footers = document.getElementsByClassName('home-header');
         for (let arrow of arrows) {
          arrow.style.opacity = 0.5;
          arrow.style["pointer-events"] = "all";
          }
          for (let footer of footers) {
          footer.style["pointer-events"] = "none";
          }
          setTimeout(() => {
            for (let hitbox of hitboxes) {
              hitbox.style["pointer-events"] = "all";
           }
           for (let footer of footers) {
          footer.style["pointer-events"] = "all";
          }
           }, 100);
      };

      let footer1 = document.querySelector('.home-header');
      footer1.addEventListener('mouseenter', onheaderhover);
      footer1.addEventListener('mouseleave', onheaderunhover);
