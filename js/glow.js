const cardsContainer = document.querySelector(".cards");
const cardsContainerInner = document.querySelector(".cards__inner");
const cards = Array.from(document.querySelectorAll(".card"));
const overlay = document.querySelector(".overlay");

const applyOverlayMask = (e) => {
  const overlayEl = e.currentTarget;
  const x = e.pageX - cardsContainer.offsetLeft;
  const y = e.pageY - cardsContainer.offsetTop;

  overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
};

const createOverlayCta = (overlayCard, ctaEl) => {
  const overlayCta = document.createElement("div");
  overlayCta.classList.add("cta");
  //overlayCta.textContent = ctaEl.textContent;
  overlayCta.setAttribute("aria-hidden", true);
  overlayCard.append(overlayCta);
};

const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const cardIndex = cards.indexOf(entry.target);
    let width = entry.borderBoxSize[0].inlineSize;
    let height = entry.borderBoxSize[0].blockSize;

    if (cardIndex >= 0) {
      overlay.children[cardIndex].style.width = `${width}px`;
      overlay.children[cardIndex].style.height = `${height}px`;
    }
  });
});

const initOverlayCard = (cardEl) => {
  const overlayCard = document.createElement("div");
  overlayCard.classList.add("card");
  overlayCard.style.width = `${cardEl.offsetWidth}px`;
  overlayCard.style.height = `${cardEl.offsetHeight}px`;
  createOverlayCta(overlayCard, cardEl.lastElementChild);
  overlay.append(overlayCard);
  observer.observe(cardEl);
};

cards.forEach(initOverlayCard);
document.body.addEventListener("pointermove", applyOverlayMask);

const updateCardAndOverlaySize = () => {
  let maxWidth = 0;
  let maxHeight = 0;
  let wdth = 0;
  
  cards.forEach((card) => {
    const width = card.offsetWidth;
    const height = card.offsetHeight;
    wdth = width;

    maxWidth = Math.max(maxWidth, width);
    maxHeight = Math.max(maxHeight, height);
  });

  cards.forEach((card, index) => {
    card.style.width = `${maxWidth}px`;
    card.style.height = `${maxHeight}px`;

    overlay.children[index].style = `--width: ${wdth}px;`;
    overlay.children[index].style.width = `${maxWidth}px`;
    overlay.children[index].style.height = `${maxHeight}px`;
  });

  requestAnimationFrame(updateCardAndOverlaySize);
};

updateCardAndOverlaySize();
