import {useEffect, useState} from 'react';
import type {Movie} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

let popularPageNumber = 1;

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);
    const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);
    const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher);

    const [
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upcomingMovies,
    ] = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);

    setIsLoading(false);

    //console.log(nowPlayingMovies[0]); chequeado
    //console.log(popularMovies[0]); chequeado
    //console.log(topRatedMovies[0]); chequeado
    //console.log(upcomingMovies[0]); chequeado
  };

  useEffect(() => {
    initialLoad();
  }, []);

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,

    //Methods
    popularNextPage: async()=>{
      popularPageNumber++;

      const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, {
        page: popularPageNumber,
      });

      setPopular(prev =>[...prev, ...popularMovies]);
    },
  };
};
