/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { FullMovie } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>();
    const [cast, setCast] = useState<Cast[]>();


    useEffect(()=>{
        loadMovie();
    },[movieId]);

    const loadMovie = async()=>{
        setIsLoading(true);

        // fullMoviePromise y castPromise son promesas
        const fullMoviePromise =  UseCases.getMovieByIdUseCase(movieDBFetcher , movieId);
        const castPromise = UseCases.getMovieCastUseCase(movieDBFetcher,movieId );

        // ahora hacemos las peticiones

        const [fullMovie, actors] = await Promise.all([fullMoviePromise, castPromise]);

        setMovie(fullMovie);
        setCast(actors);

        setIsLoading(false);
        //console.log({actors});
    };



    return {
        isLoading,
        movie,
        cast,
    };
};
