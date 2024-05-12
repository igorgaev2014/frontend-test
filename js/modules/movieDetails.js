import {ELEMENTS} from "./constants.js";
import {setBodyScroll} from "./utils.js";

export function renderMovieDetails(details) {
  const genres = details.Genre.split(", ");
  let genreHTML = genres.map(genre => `<li class="movie__genre">${genre}</li>`).join('');
  const moviePoster = `<img alt="movie poster" src="${(details.Poster !== "N/A") ? details.Poster : "images/image_not_found.png"}">`

  ELEMENTS.resultGrid.innerHTML = `
    <div class="overlay"></div>
    <div class="movie">
      <div class="movie__wrapper">
        <button class="movie__close-modal-btn" type="button" id="close-modal">
          <svg class="icon">
            <use xlink:href="images/sprite.svg#Type=Cancel, Property=Default"></use>
          </svg>
        </button>
        <div class="movie__poster">
          ${moviePoster}
        </div>
        <div class="movie__info">
          <p class="movie__title">${details.Title}</p>
          <div class="d-flex flex-row align-center gap-6">
            <button class="movie__watch-btn">
              <svg class="icon icon--play">
                <use xlink:href="images/sprite.svg#Type=Play"></use>
               </svg>
              <span>Смотреть</span>
            </button>
            <button class="movie__action-btn" type="button">
              <svg class="icon">
                <use xlink:href="images/sprite.svg#Type=Bookmark"></use>
              </svg>
            </button>
            <button class="movie__action-btn" type="button">
              <svg class="icon">
                <use xlink:href="images/sprite.svg#Type=Share"></use>
              </svg>
            </button>
          </div>
          <div class="movie__misc-info">
            <div class="movie__year">${details.Year}</div>
            <ul class="movie__genres">${genreHTML}</ul>
            <div class="movie__plot">${details.Plot}</div>
          </div>
        </div>
      </div>
    </div>
   `;

  setBodyScroll(true);

  const closeModalButton = document.getElementById('close-modal');
  closeModalButton.addEventListener('click', closeModal);

  const overlay = document.querySelector('.overlay');
  overlay.addEventListener('click', closeModalOutside);
}

function closeModal() {
  ELEMENTS.resultGrid.innerHTML = "";
  setBodyScroll(false);
}

function closeModalOutside(event) {
  if (!event.target.classList.contains('overlay')) return
  closeModal();
}
