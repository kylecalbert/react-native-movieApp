import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  FlatList,
} from 'react-native';

import styles from './Movies.styles.js';
import { getPopularMovies, getAllMovies } from '../../api/movies.js';
import MovieColumn from './MovieColumn.jsx';
import MovieRow from './MovieRow.jsx';

const Movies = () => {
  const navigation = useNavigation();
  const [popularMovies, setPopularMovies] = useState();
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetchPopularMovies();
    fetchAllMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const fetchedPopularMovies = await getPopularMovies();
    setPopularMovies(fetchedPopularMovies);
  };

  const fetchAllMovies = async () => {
    const fetchedMovies = await getAllMovies();
    setMovies(fetchedMovies);
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Text style={styles.title}>MOST POPULAR MOVIES</Text>

        <FlatList
          data={popularMovies}
          renderItem={(value) => (
            <MovieColumn
              id={value.item.id}
              posterImage={value.item.posterImage}
              title={value.item.title}
            />
          )}
          horizontal
        />

        <Text style={styles.title}>ALL MOVIES</Text>
        <FlatList
          data={movies}
          renderItem={(value) => (
            <MovieRow
              image={value.item.image}
              title={value.item.title}
              characters={value.item.characters}
              genre={value.item.genre}
              release={value.item.release}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Movies;
