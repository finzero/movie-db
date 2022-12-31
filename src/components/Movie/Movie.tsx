import style from './Movie.module.css';
import { poster_base_path } from '../../services/movieService';
import { Link } from 'react-router-dom';
import React, { PropsWithChildren } from 'react';

const DEFAULT_MOVIE_CONFIG = {
  showRating: false,
  enableLink: false,
};

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

interface IMovieConfig {
  showRating: boolean;
  enableLink: boolean;
}

const MovieImage = ({
  movie,
  config,
}: {
  movie: IMovie;
  config: IMovieConfig;
}) => (
  <div className={style.movieItem}>
    {config.showRating && (
      <span className={style.movieRating}>{movie.vote_average.toFixed(1)}</span>
    )}
    <div className={style.posterContainer}>
      <img
        className={style.moviePoster}
        src={`${poster_base_path + movie.poster_path}`}
        alt={movie.original_title}
      />
    </div>
  </div>
);

const MovieWithLink = ({
  movie,
  children,
}: {
  movie: IMovie;
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={`${movie.id}/${movie.original_title.replace(/\s+/g, '-')}`}
      replace={true}
    >
      {children}
    </Link>
  );
};
const Movie = ({
  movie,
  config = DEFAULT_MOVIE_CONFIG,
}: {
  movie: IMovie;
  config?: IMovieConfig;
}) => {
  return config.enableLink ? (
    <MovieWithLink movie={movie}>
      <MovieImage movie={movie} config={config} />
    </MovieWithLink>
  ) : (
    <MovieImage movie={movie} config={config} />
  );
};

export default Movie;
