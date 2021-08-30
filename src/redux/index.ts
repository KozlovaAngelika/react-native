import { createStore } from 'redux';

const initialState: MovieState = {
  movies: [
    {
      id: 'tt5491994',
      title: 'Planet Earth II',
      image:
        'https://m.media-amazon.com/images/M/MV5BZWYxODViMGYtMGE2ZC00ZGQ3LThhMWUtYTVkNGE3OWU4NWRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX128_CR0,3,128,176_AL_.jpg',
      imDbRating: '9.5',
    },
    {
      id: 'tt0795176',
      title: 'Planet Earth',
      image:
        'https://m.media-amazon.com/images/M/MV5BNmZlYzIzMTItY2EzYS00YTEyLTg0ZjEtMDMzZjM3ODdhN2UzXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_UX128_CR0,3,128,176_AL_.jpg',
      imDbRating: '9.4',
    },
    {
      id: 'tt0185906',
      title: 'Band of Brothers',
      image:
        'https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_UX128_CR0,3,128,176_AL_.jpg',
      imDbRating: '9.4',
    },
    {
      id: 'tt0903747',
      title: 'Breaking Bad',
      image:
        'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg',
      imDbRating: '9.4',
    },
    {
      id: 'tt7366338',
      title: 'Chernobyl',
      image:
        'https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX128_CR0,3,128,176_AL_.jpg',
      imDbRating: '9.3',
    },
    {
      id: 'tt0306414',
      title: 'The Wire',
      image:
        'https://m.media-amazon.com/images/M/MV5BNTllYzFhMjAtZjExNS00MjM4LWE5YmMtOGFiZGRlOTU5YzJiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX128_CR0,3,128,176_AL_.jpg',
      imDbRating: '9.3',
    },
    {
      id: 'tt6769208',
      title: 'Blue Planet II',
      image:
        'https://m.media-amazon.com/images/M/MV5BYjg2ODk0MjUtNmMzZS00MjY0LWI1YWMtN2JhMjRmZGUwY2I3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,1,128,176_AL_.jpg',
      imDbRating: '9.3',
    },
    {
      id: 'tt9253866',
      title: 'Our Planet',
      image:
        'https://m.media-amazon.com/images/M/MV5BN2I1ZjA5YjQtYmQ0ZS00ZmE1LTk1ZjktNTQ5ODIzY2JiZDdhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX128_CR0,3,128,176_AL_.jpg',
      imDbRating: '9.2',
    },
  ],
  top250: [],
  favorites: [],
};

const reducer = (state: MovieState = initialState): MovieState => state;

const state = createStore(reducer, initialState);

export default state;
