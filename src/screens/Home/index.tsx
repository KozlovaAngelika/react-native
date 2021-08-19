import React, { useState } from 'react';
import { View } from 'react-native';
import SearchBar from '../../components/SearchBar';

const Home: React.FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <View>
      <SearchBar value={searchValue} onChangeValue={setSearchValue} />
    </View>
  );
};

export default Home;
