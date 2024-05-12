import {ELEMENTS} from "./constants.js";
import {clearMovieList, renderMovieList} from "./movieList.js";
import {renderMovieDetails} from "./movieDetails.js";
import {sortMovies} from "./utils.js";

export async function getMovies() {
  let searchTerm = (ELEMENTS.movieSearchBox.value).trim();
  await getMovieList(searchTerm);
}

async function getMovieList(searchTerm) {
  const endpoint = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`;
  const response = await fetch(endpoint);
  const data = await response.json();
  if (data.Response === "True") {
    sortMovies(data.Search)
    renderMovieList(data.Search);
  } else {
    clearMovieList()
  }
}

export function getMovieDetails() {
  const searchListMovies = ELEMENTS.searchList.querySelectorAll('.search-list__item');
  searchListMovies.forEach(movie => {
    movie.addEventListener('click', async () => {
      const endpoint = `http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=fc1fef96`
      const result = await fetch(endpoint);
      const movieDetails = await result.json();
      renderMovieDetails(movieDetails);
    });
  });
}
