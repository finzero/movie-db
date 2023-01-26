import { API_TOKEN, BASE_URL } from '../consts/api';
import {
  IMovieQuery,
  SearchMovieParam,
  TMovieCategory,
} from '../types/movie.type';

const headers = new Headers({
  Authorization: `Bearer ${API_TOKEN}`,
  'Content-Type': 'application/json',
});

export const getMovieGenre = () => {
  return fetch(`${BASE_URL}/genre/movie/list`, {
    method: 'get',
    headers,
  }).then((res) => res.json());
};

export const getMovieByCategory = (
  type: TMovieCategory,
  page: number
): Promise<IMovieQuery> => {
  return fetch(`${BASE_URL}/movie/${type}?page=${page}`, {
    method: 'get',
    headers,
  }).then((res) => res.json());
};

export const getMovieDetail = (movieId: string) => {
  return fetch(`${BASE_URL}/movie/${movieId}`, {
    method: 'get',
    headers,
  }).then((res) => res.json());
};

export const searchMovie = (param: SearchMovieParam) => {
  const queryParam = setQueryParam(param);
  return fetch(`${BASE_URL}/search/movie${queryParam}`, {
    method: 'get',
    headers,
  }).then((res) => res.json());
};

const setQueryParam = (obj: any) => {
  return encodeURI(
    Object.keys(obj)
      .filter((field) => obj[field] !== null && obj[field] !== undefined)
      .map((key) => {
        if (obj[key] !== null) {
          let val = obj[key];
          if (typeof val === 'string') {
            val = val.trim();
          }
          return key + '=' + val;
        }
      })
      .join('&')
  );
};
