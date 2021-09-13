type MoviesState = AsyncState<Movie[] | null>;
type TopMovieState = AsyncState<Movie[] | null>;

type CurrentLanguageState = string;

interface FavoritesState {
  data: Movie[] | null;
}
