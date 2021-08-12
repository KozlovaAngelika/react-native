import React from 'react';
import {
  View,
} from 'react-native';

import SearchBar from './ src/components/SearchBar';

const App: React.FC = () => (
  <View>
    <SearchBar value="123" onChangeValue={() => {}} />
  </View>
);

export default App;
