interface SearchMovieResponse {
  searchType: string;
  expression: string;
  results: Movie[];
  errorMessage: string;
}

interface GetAdditionalInfoResponse {
  plot: string;
  imDbRating: string;
  errorMessage: string;
}
