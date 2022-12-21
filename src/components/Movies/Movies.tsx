import React from 'react';
import Pagination from '@mui/material/Pagination';
import Movie from '../Movie/Movie';
import MovieLayout from '../Layout/MovieLayout';
import appStyle from '../../App.module.css';
import style from './Movies.module.css';
import movieLoader from '../../assets/5-Film-reel.gif';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { activeMenuSelector } from '../../features/menuSlice';
import { getMovieByCategory } from '../../services/movieService';
import { IMovie } from '../Movie/Movie';
import { IMovieQuery } from '../../services/movieService';

const Movies = () => {
  const activeMenu = useSelector(activeMenuSelector);

  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useQuery<IMovieQuery>(
    ['movie', activeMenu?.code, page],
    () => getMovieByCategory(activeMenu?.code || 'now_playing', page)
  );

  const handlePageChange = (_e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
  };

  return (
    <MovieLayout>
      <h1>{activeMenu?.label}</h1>
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
    </MovieLayout>
  );
};

export default Movies;
