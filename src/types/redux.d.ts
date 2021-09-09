type MoviesState = AsyncState<Movie[] | null>;
type TopMovieState = AsyncState<Movie[]>;

interface FavoritesState {
  data: Movie[];
}
