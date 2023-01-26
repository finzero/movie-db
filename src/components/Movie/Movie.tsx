import style from './Movie.module.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { IMovie, IMovieConfig } from '../../types/movie.type';
import { POSTER_BASE_PATH } from '../../consts/api';

const DEFAULT_MOVIE_CONFIG = {
  showRating: false,
  enableLink: false,
};

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
        src={`${POSTER_BASE_PATH + movie.poster_path}`}
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
