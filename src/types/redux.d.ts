type MoviesState = AsyncState<Movie[] | null>;
type TopMovieState = AsyncState<Movie[]>;
type MovieInfoState = AsyncState<GetAdditionalInfoResponse>;

type CurrentLanguageState = string;

interface FavoritesState {
  data: Movie[];
}
