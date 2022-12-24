import React, { useCallback, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Movie, { IMovie } from '../Movie/Movie';
import MovieLayout from '../Layout/MovieLayout';
import style from './Movies.module.css';
import movieLoader from '../../assets/5-Film-reel.gif';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { activeMenuSelector } from '../../features/menuSlice';
import { getMovieByCategory, IMovieQuery } from '../../services/movieService';
import MovieCategory from '../MovieCategory/MovieCategory';

const Movies = () => {
  const activeMenu = useSelector(activeMenuSelector);

  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useQuery<IMovieQuery>(
    ['movie', activeMenu?.code, page],
    () => getMovieByCategory(activeMenu?.code || 'now_playing', page)
  );

  const handlePageChange = useCallback(
    (_e: React.ChangeEvent<unknown>, p: number) => {
      setPage(p);
    },
    [page]
  );

  return (
    <MovieLayout>
      <MovieCategory />
      <section className={style.movieListContainer}>
        <h2>{activeMenu?.label}</h2>
        {isLoading ? (
          <div className={style.loading}>
            <img src={movieLoader} alt="Loading" />
          </div>
        ) : (
          <div>
            {!error ? (
              <div className={style.movieList}>
                {data &&
                  data.results.map((movie: IMovie) => (
                    <Movie key={movie.id} movie={movie} />
                  ))}
              </div>
            ) : (
              <span>Ops Something went wrong</span>
            )}
          </div>
        )}
        <Pagination
          classes={{ outlined: style.pagination }}
          variant={'outlined'}
          count={data?.total_pages}
          color={'primary'}
          onChange={handlePageChange}
        />
      </section>
    </MovieLayout>
  );
};

export default Movies;
