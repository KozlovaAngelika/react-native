interface SearchMovieResponse {
  searchType: string;
  expression: string;
  results: Movie[];
  errorMessage: string;
}
