import {useEffect, useState} from 'react';
import type {Movie} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

  const initialLoad = async () => {
    const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(movieDBFetcher);

    //console.log(nowPlayingMovies[0]);
  };

  useEffect(() => {
    initialLoad();
  }, []);

  return {
    isLoading,
    nowPlaying,
  };
};
