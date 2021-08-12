interface Movie {
  id: number
  title: string
  poster: string
}

interface MovieState {
  movies: Movie[],
  top250: Movie[],
  favorites: Movie[]
}
