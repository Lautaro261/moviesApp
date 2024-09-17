import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '158f0221df3e6a9dfdb8f6aa6aa4452a',
    language:'es',
  },
});
