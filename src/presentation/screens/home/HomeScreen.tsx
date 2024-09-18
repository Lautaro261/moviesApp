/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarrusel } from '../../components/movies/PosterCarrusel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();

  if(isLoading){
    return(
      <Text>Cargando...</Text>
    );
  }

  return (
    <ScrollView>
      <View style={{
        marginTop: top + 20,
        paddingBottom:30,
      }} >

        <Text>Hola</Text>
        {/* Carrusel Principal */}
        <PosterCarrusel movies={nowPlaying}/>

        {/* Popular Movies */}
        <HorizontalCarousel movies={popular} title="Populares" loadNextPage={()=>popularNextPage()}/>

        {/* Top Rated */}
        <HorizontalCarousel movies={topRated} title="Top Rated"/>

        {/* Upcoming */}
        <HorizontalCarousel movies={upcoming} title="Upcoming"/>

      </View>
    </ScrollView>
  );
};
