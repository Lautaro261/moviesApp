//import { useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'Details'>{}

export const DetailsScreen = ({route}:Props) => {

  const {movieId} = route.params;

  const {movie, isLoading } = useMovie(movieId);

  //const { movieId } = useRoute().params;


  if(isLoading){
    return (<Text>Loading...</Text>);
  }


  return (
    <ScrollView >
      {/* Header */}
      <MovieHeader
      poster={movie!.poster}
      originalTitle={movie!.originalTitle}
      title={movie!.title}
      />

      {/* DEtails */}
      <MovieDetails movie={movie!}/>
    </ScrollView>
  );
};
