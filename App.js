import React, {useEffect, useState} from 'react';

import {FlatList, StyleSheet, View} from 'react-native';

import Filmes from './src/Filmes';

import api from './src/services/api';

const App = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes');
      setFilmes(response.data);
    }
    loadFilmes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Filmes data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
