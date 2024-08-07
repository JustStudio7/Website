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
