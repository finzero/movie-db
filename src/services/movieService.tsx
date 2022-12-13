import { IMovie } from '../components/Movie/Movie';

const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTc0N2QyMjExZDljMWVhZjIyM2IyNDkxYmMxYzcyZSIsInN1YiI6IjYzOTI5ZTA2YmE0ODAyMDBlYTBhNzM5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yxHCqR0VRd1FhfDEEAjGtWxF8jzoRzGMbVa4WgGl1Is';
const BASE_URL = 'https://api.themoviedb.org/3';
export const poster_base_path = 'https://image.tmdb.org/t/p/original/';

export interface IMovieQuery {
  dates: any;
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
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
  type: TMovieCategory
): Promise<IMovieQuery> => {
  return fetch(`${BASE_URL}/movie/${type}`, {
    method: 'get',
    headers,
  }).then((res) => res.json());
};
