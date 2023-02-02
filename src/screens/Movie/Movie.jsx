import React, {useEffect, useState} from 'react';
import {Image, View, Text, SafeAreaView, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';

import styles from './Movie.style.js';
import { getIndividualMovie } from '../../api/movies.js';

const Movie = () => {
  const {params} = useRoute();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchIndividualMovie(params.id);
  }, [params]);

  const fetchIndividualMovie = async id => {
    const individualMovie = await getIndividualMovie(id);
    setMovie(individualMovie);
  };

  const MetaData = ({title, value}) => (
    <View style={styles.metaDataContainer}>
      <Text style={[styles.bold, styles.marginRight]}>{title}:</Text>
      <Text>{value}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <Image source={{uri: movie.bannerImage}} style={styles.bannerImage} />

        <View style={styles.container}>
          <View style={styles.filmInfoContainer}>
            <>
              <Image
                source={{uri: movie.posterImage}}
                style={styles.posterImage}
              />
            </>
            <View style={styles.filmInfo}>
              <Text style={styles.bold}>{movie.title}</Text>
              <Text>{movie.duration}</Text>
            </View>
          </View>

          <View style={styles.marginTop}>
            <MetaData title="Release date" value={movie.releaseDate} />
            <MetaData title="Director" value={movie.director} />
            <MetaData title="Box Office" value={movie.boxOffice} />
          </View>

          <View style={styles.marginTop}>
            <Text style={styles.bold}>STORYLINE</Text>
            <Text>{movie.storyline}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Movie;
