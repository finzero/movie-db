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

export interface SearchMovieParam {
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

export interface IMovie extends IMovieConfig {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieConfig {
  showRating: boolean;
  enableLink: boolean;
}

export interface ICategory {
  id: number;
  code: TMovieCategory;
  isActive: boolean;
  label: string;
  link: string;
}
