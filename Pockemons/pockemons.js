function getElement(element, parent = document) {
  return parent.querySelector(element);
}

const elCards = getElement(".cards");
const elSearch = getElement("#search");
const elSearchBtn = getElement("#search-btn");
const elForm = getElement("#form");

function renderFn(array, parent) {
  parent.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.style.width = "16rem";

    newCard.innerHTML = `
    <img width="252" height="252" src="${element.img}" class="card-img-top" />
    <div class="card-body card__body">
    <div class="d-flex justify-content-between">
    <div>
    <h5 class="card__title">${element.name}</h5>
    <p class="card__text">${element.type}</p>
    </div>
    <svg
    width="25"
    height="25"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22.5 23.75C22.5 24.4387 21.94 25 21.25 25H8.75C8.06 25 7.5 24.4387 7.5 23.75V10H22.5V23.75ZM12.5 5.41C12.5 5.21625 12.7675 5 13.125 5H16.875C17.2325 5 17.5 5.21625 17.5 5.41V7.5H12.5V5.41ZM26.25 7.5H25H20V5.41C20 3.805 18.5987 2.5 16.875 2.5H13.125C11.4012 2.5 10 3.805 10 5.41V7.5H5H3.75C3.0625 7.5 2.5 8.0625 2.5 8.75C2.5 9.4375 3.0625 10 3.75 10H5V23.75C5 25.8175 6.6825 27.5 8.75 27.5H21.25C23.3175 27.5 25 25.8175 25 23.75V10H26.25C26.9375 10 27.5 9.4375 27.5 8.75C27.5 8.0625 26.9375 7.5 26.25 7.5Z"
    fill="black"
    />
    <mask
    id="mask0_1_502"
    style="mask-type: luminance"
    maskUnits="userSpaceOnUse"
    x="2"
    y="2"
    width="26"
    height="26">
    <path
    class="change"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22.5 23.75C22.5 24.4387 21.94 25 21.25 25H8.75C8.06 25 7.5 24.4387 7.5 23.75V10H22.5V23.75ZM12.5 5.41C12.5 5.21625 12.7675 5 13.125 5H16.875C17.2325 5 17.5 5.21625 17.5 5.41V7.5H12.5V5.41ZM26.25 7.5H25H20V5.41C20 3.805 18.5987 2.5 16.875 2.5H13.125C11.4012 2.5 10 3.805 10 5.41V7.5H5H3.75C3.0625 7.5 2.5 8.0625 2.5 8.75C2.5 9.4375 3.0625 10 3.75 10H5V23.75C5 25.8175 6.6825 27.5 8.75 27.5H21.25C23.3175 27.5 25 25.8175 25 23.75V10H26.25C26.9375 10 27.5 9.4375 27.5 8.75C27.5 8.0625 26.9375 7.5 26.25 7.5Z"
    fill="white"/>
    </mask>
    <g mask="url(#mask0_1_502)">
    <rect
      width="30"
      height="30"
      class="change"
      id="delete-btn"
      data-id="${element.id}"
      fill="black"
    />
    </g>
    </svg>
    </div>
    <div class="card__content">
      <p class="card__kg">${element.weight}</p>
      <p class="card__age">${element.height}</p>
    </div>
    `;
    parent.appendChild(newCard);
  }
}
renderFn(pokemons, elCards);

elCards.addEventListener("click", (evt) => {
  if (evt.target.id === "delete-btn") {
    const id = Number(evt.target.dataset.id);
    const newPockemons = [];
    for (let i = 0; i < pokemons.length; i++) {
      const element = pokemons[i];
      if (element.id !== id) {
        newPockemons.push(element);
      }
    }
    pokemons = newPockemons;
    renderFn(pokemons, elCards);
  }
});
renderFn(pokemons, elCards);

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newArr = [];
  for (let i = 0; i < pokemons.length; i++) {
    const element = pokemons[i];
    if (element.name.toLowerCase().includes(elSearch.value.toLowerCase())) {
      newArr.push(element);
    }
  }
  elForm.reset();
  renderFn(newArr, elCards);
});
renderFn(pokemons, elCards);
