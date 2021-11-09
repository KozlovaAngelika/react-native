type MoviesState = AsyncState<Movie[] | null>;
type TopMovieState = AsyncState<Movie[]>;

type CurrentLanguageState = string;

interface FavoritesState {
  data: Movie[];
}
