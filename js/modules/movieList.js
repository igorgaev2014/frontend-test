import {ELEMENTS} from "./constants.js";
import {getMovieDetails} from "./movieSearch.js";

export function clearMovieList() {
  ELEMENTS.searchList.innerHTML = "";
}

export function renderMovieList(movies) {
  clearMovieList()
  movies.forEach(movie => renderMovieItem(movie))
  getMovieDetails();
}

export function renderMovieItem(item) {
  let movieListItem = document.createElement('div');
  movieListItem.dataset.id = item.imdbID;
  movieListItem.classList.add('search-list__item');
  movieListItem.innerHTML = `
    <div class="search-item__thumbnail">
      <img alt="movie poster" src="${(item.Poster !== "N/A") ? item.Poster : "images/image_not_found.png"}">
    </div>
    <div class="search-item__info">
      <h3>${item.Title}</h3>
      <p>${item.Year}</p>
    </div>
    `;
  ELEMENTS.searchList.appendChild(movieListItem);
}
