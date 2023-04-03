import React from 'react';
import { render } from '@testing-library/react-native';
import MovieColumn from './MovieColumn';
import MovieRow from './MovieRow';
import { NavigationContainer } from '@react-navigation/native';

describe('MovieColumn', () => {
  it('renders poster image', () => {
    const movie = {
      id: 1,
      posterImage: 'https://example.com/image.jpg',
      title: 'Movie Title',
    };
    const { getByTestId } = render(
      <NavigationContainer>
        <MovieColumn {...movie} />
      </NavigationContainer>
    );
    const image = getByTestId('movieImage');
    expect(image.props.source.uri).toEqual('https://example.com/image.jpg');
  });
});

describe('MovieRow', () => {
  const movie = {
    id: 1,
    posterImage: 'https://example.com/image.jpg',
    title: 'Scream 4',
    characters: ['Actor 1', 'Actor 2', 'Actor 3'],
    release: '1976',
    genre: 'Horror',
  };

  it('testing to see if Movie title renders', () => {
    const { getByText } = render(<MovieRow {...movie} />);
    const title = getByText('Scream 4');
    expect(title).toBeDefined();
  });
  it('testing to see if Character render', () => {
    const { getByText } = render(<MovieRow {...movie} />);
    const characters = getByText(/Actor 1.*Actor 2.*Actor 3/);
    expect(characters).toBeDefined();
  });

  it('testing to see if release year renders', () => {
    const { getByText } = render(<MovieRow {...movie} />);
    const release = getByText('1976');
    expect(release).toBeDefined();
  });

  it('testing to see if the genre displays', () => {
    const { getByText } = render(<MovieRow {...movie} />);
    const genre = getByText('Horror');
    expect(genre).toBeDefined();
  });

  it('testing to see if the image renders', () => {});
});

//renders title

//renders characters

//renders genre

///renders release year

///renders genre
