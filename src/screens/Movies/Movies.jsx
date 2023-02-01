import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import { getPopularMovies } from '../../api/movies';

import styles from './Movies.styles';

const Movies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const fetchedPopularMovies = await getPopularMovies();

    setPopularMovies(fetchedPopularMovies);
  };

  const MovieCard = ({image, title}) => (
    <View style={styles.movieColumnContainer}>
      <Image source={{uri: image}} style={styles.movieColumnImage} />
      <Text>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MOST POPULAR MOVIES</Text>
      <FlatList
        data={popularMovies}
        renderItem={({item}) => (
          <MovieCard image={item.posterImage} title={item.title} />
        )}
        horizontal
      />
    </View>
  );
};

export default Movies;
