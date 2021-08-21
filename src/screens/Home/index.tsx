import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import { SafeAreaView, FlatList } from 'react-native';
import MovieTile from '../../components/MovieTile';
import SearchBar from '../../components/SearchBar';
import styles from './styles';

const DATA: Movie[] = [
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
];
interface RenderItemProps {
  item: Movie;
}
const Home: React.FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  const [dataForDisplay, setDataForDisplay] = useState(DATA);
  const keyExtractor = (item: Movie): string => item.id;
  const renderItem = ({ item }: RenderItemProps): React.ReactElement => (
    <MovieTile title={item.title} imgSrc={item.image} />
  );
  const searchMovie = debounce((value: string) => {
    setDataForDisplay(
      DATA.filter((item: { title: string }) =>
        item.title.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  }, 300);
  const onChangeValue = (value: string): void => {
    setSearchValue(value);
    searchMovie(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={searchValue} onChangeValue={onChangeValue} />
      <FlatList
        data={dataForDisplay}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.moviesContainer}
      />
    </SafeAreaView>
  );
};

export default Home;
