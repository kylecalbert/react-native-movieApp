import React from 'react';
import {Image, View, Text, SafeAreaView, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';

import styles from './Movie.style.js';

const Movie = () => {
  const {params} = useRoute();

  const MetaData = ({title, value}) => (
    <View style={styles.metaDataContainer}>
      <Text style={[styles.bold, styles.marginRight]}>{title}:</Text>
      <Text>{value}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          source={{
            uri: 'https://m.media-amazon.com/images/M/MV5BZTQ0MmI0MmEtNjQwNi00NDFmLWEwMGUtZWYyMGYxYzQ5ZTNiXkEyXkFqcGdeQWxiaWFtb250._V1_.jpg',
          }}
          style={styles.bannerImage}
        />

        <View style={styles.container}>
          <View style={styles.filmInfoContainer}>
            <>
              <Image
                source={{
                  uri: 'https://m.media-amazon.com/images/M/MV5BMWRiZGQ1NDMtODQ2OS00MDlhLWJkZGYtM2ZmNjlhZThjOWRmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
                }}
                style={styles.posterImage}
              />
            </>
            <View style={styles.filmInfo}>
              <Text style={styles.bold}>Sing 2</Text>
              <Text>1 hour 50 minutes</Text>
            </View>
          </View>

          <View style={styles.marginTop}>
            <MetaData title="Release date" value="28 January 2022" />
            <MetaData title="Director" value="Garth Jennings" />
            <MetaData title="Box Offie" value="$190.8 million" />
          </View>

          <View style={styles.marginTop}>
            <Text style={styles.bold}>STORYLINE</Text>
            <Text>
              Buster Moon and his friends must persuade reclusive rock star Clay
              Calloway to join them for the opening of a new show.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Movie;
