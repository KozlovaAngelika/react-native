interface Movie {
  id: string;
  title: string;
  image: string;
  imDbRating: string;
}

interface MovieState {
  movies: Movie[];
  top250: Movie[];
  favorites: Movie[];
}
