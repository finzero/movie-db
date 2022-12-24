import { IMovie } from '../components/Movie/Movie';

const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTc0N2QyMjExZDljMWVhZjIyM2IyNDkxYmMxYzcyZSIsInN1YiI6IjYzOTI5ZTA2YmE0ODAyMDBlYTBhNzM5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yxHCqR0VRd1FhfDEEAjGtWxF8jzoRzGMbVa4WgGl1Is';
const BASE_URL = 'https://api.themoviedb.org/3';
export const poster_base_path = 'https://image.tmdb.org/t/p/original/';

interface IDates {
  maximum: string;
  minimum: string;
}

export interface IMovieQuery {
  dates: IDates;
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface SearchMovieOptions {
  query: string;
  page: number;
  include_adult?: boolean;
  region?: string;
  year?: number;
  primary_release_year?: number;
}

export type TMovieCategory =
  | 'now_playing'
  | 'popular'
  | 'top_rated'
  | 'upcoming';

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

export const searchMovie = (param: SearchMovieOptions) => {
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
