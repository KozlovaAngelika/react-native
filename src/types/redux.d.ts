type MoviesState = AsyncState<Movie[] | null>;
type TopMovieState = AsyncState<Movie[]>;
type MovieInfoState = AsyncState<GetAdditionalInfoResponse>;

interface FavoritesState {
  data: Movie[];
}
