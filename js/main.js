import {ELEMENTS} from "./modules/constants.js";
import {getMovies} from "./modules/movieSearch.js";

function clearSearchBox() {
  ELEMENTS.movieSearchBox.value = "";
}

function toggleClearButtons() {
  ELEMENTS.searchClearBtnArray.forEach(btn => btn.style.display = ELEMENTS.movieSearchBox.value.length ? "block" : "none");
}

async function handleSearchInput() {
  toggleClearButtons()
  await getMovies();
}

async function handleClearButtonClick() {
  clearSearchBox();
  toggleClearButtons();
  await getMovies();
}

function handleMobileSearchButtonClick() {
  document.querySelector('.header__search').classList.toggle('header__search--visible');
}

ELEMENTS.searchClearBtnArray.forEach(btn => btn.addEventListener('click', handleClearButtonClick));
ELEMENTS.movieSearchBox.addEventListener('keyup', handleSearchInput);
ELEMENTS.movieSearchBox.addEventListener('click', handleSearchInput);
ELEMENTS.mobileSearchBtn.addEventListener('click', handleMobileSearchButtonClick);
