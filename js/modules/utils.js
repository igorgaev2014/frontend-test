export function setBodyScroll(lockScroll) {
  lockScroll ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
}

export function sortMovies(movies) {
  movies.sort((a, b) => {
    const yearA = parseInt(a.Year.substring(0, 4));
    const yearB = parseInt(b.Year.substring(0, 4));
    return yearB - yearA;
  });
}
