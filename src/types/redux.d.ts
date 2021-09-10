type MoviesState = AsyncState<Movie[] | null>;
type TopMovieState = AsyncState<Movie[] | null>;

interface FavoritesState {
  data: Movie[] | null;
}
