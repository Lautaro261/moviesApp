import { MOVIE_DB_KEY } from '@env';
import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: MOVIE_DB_KEY ?? 'no-key',
    language:'es',
  },
});
