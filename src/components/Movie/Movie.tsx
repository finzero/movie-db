import style from './Movie.module.css';
import { poster_base_path } from '../../services/movieService';

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
    <div key={movie.id} className={style.movieItem}>
      <span className={style.movieRating}>{movie.vote_average}</span>
      <div className={style.posterContainer}>
        <img
          className={style.moviePoster}
          src={`${poster_base_path + movie.poster_path}`}
          alt={movie.original_title}
        />
      </div>
    </div>
  );
};

export default Movie;
