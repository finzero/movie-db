import Layout from './components/Layout/Layout';
import Movie from './components/Movie/Movie';
import MovieLayout from './components/Layout/MovieLayout';
import style from './App.module.css';
import movieLoader from './assets/5-Film-reel.gif';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useQuery, QueryKey } from 'react-query';
import { activeMenuSelector } from './features/menuSlice';
import { getMovieByCategory } from './services/movieService';
import { IMovie } from './components/Movie/Movie';
import { IMovieQuery } from './services/movieService';
import Pagination from '@mui/material/Pagination';

function App() {
  const activeMenu = useSelector(activeMenuSelector);

  const [page, setPage] = useState(1);
  const { isLoading, error, data, refetch } = useQuery<IMovieQuery>(
    ['movie', activeMenu?.code, page],
    () => getMovieByCategory(activeMenu?.code || 'now_playing', page)
  );

  const handlePageChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
  };

  useEffect(() => {
    console.log('something changed');
  });

  return (
    <Layout>
      <MovieLayout>
        <h1>{activeMenu?.label}</h1>
        {isLoading ? (
          <div className={style.flexCenterCenter}>
            <img src={movieLoader} alt="Loading" />
          </div>
        ) : (
          <div className={style.flexCenterCenter}>
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
    </Layout>
  );
}

export default App;
