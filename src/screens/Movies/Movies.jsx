import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";

import styles from "./Movies.styles.js";
import { getPopularMovies, getAllMovies } from "../../api/movies.js";

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

  const MovieColumn = ({ id, posterImage, title }) => (
    <Pressable
      style={styles.movieColumnContainer}
      onPress={() => navigation.navigate("Movie", { id })}
    >
      <Image source={{ uri: posterImage }} style={styles.movieColumnImage} />
      <Text style={styles.movieColumnTitle}>{title}</Text>
    </Pressable>
  );

  const MovieRow = ({ image, title, characters, genre, release }) => {
    return (
      <View style={styles.movieRowContainer}>
        <Image source={{ uri: image }} style={styles.movieRowImage} />

        <View style={styles.movieInfoContainer}>
          <View>
            <Text style={styles.movieRowTitle}>{title}</Text>
            <Text>{characters}</Text>
          </View>
          <View>
            <Text>{genre}</Text>
            <Text>{release}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
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
