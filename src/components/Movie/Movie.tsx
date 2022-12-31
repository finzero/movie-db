import style from './Movie.module.css';
import { poster_base_path } from '../../services/movieService';
import { Link } from 'react-router-dom';

export interface IMovie {
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

const Movie = ({ movie }: { movie: IMovie }) => {
  return (
    <Link
      to={`${movie.id}/${movie.original_title.replace(/\s+/g, '-')}`}
      replace={true}
    >
      <div className={style.movieItem}>
        <span className={style.movieRating}>
          {movie.vote_average.toFixed(1)}
        </span>
        <div className={style.posterContainer}>
          <img
            className={style.moviePoster}
            src={`${poster_base_path + movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>
      </div>
    </Link>
  );
};

export default Movie;
