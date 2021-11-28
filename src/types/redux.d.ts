import selectCurrentLanguage from 'store/config/selectors';

type MoviesState = AsyncState<Movie[] | null>;
type TopMovieState = AsyncState<Movie[]>;
type MovieInfoState = AsyncState<GetAdditionalInfoResponse>;

interface ConfigAppState {
  currentLanguage: string;
}

interface FavoritesState {
  data: Movie[];
}
