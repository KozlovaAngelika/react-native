import { currentLanguage } from 'store/customization/selectors';

type MoviesState = AsyncState<Movie[] | null>;
type TopMovieState = AsyncState<Movie[]>;
type MovieInfoState = AsyncState<GetAdditionalInfoResponse>;

interface CurrentLanguageState {
  currentLanguage: string;
}

interface FavoritesState {
  data: Movie[];
}
