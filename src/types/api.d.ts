interface SearchMovieResponse {
  searchType: string;
  expression: string;
  results: Movie[];
  errorMessage: string;
}

interface GetTopMoviesResponse {
  items: Movie[];
  errorMessage: string;
}
