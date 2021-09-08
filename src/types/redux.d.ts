type MoviesState = AsyncState<Movie[]>;
type TopMovieState = AsyncState<Movie[]>;

interface FavoritesState {
  data: Movie[];
}
