import Layout from './components/Layout/Layout';
import Movie from './components/Movie/Movie';
import MovieLayout from './components/Layout/MovieLayout';
import style from './App.module.css';
import movieLoader from './assets/5-Film-reel.gif';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { activeMenuSelector } from './features/menuSlice';
import { getMovieByCategory } from './services/movieService';
import { IMovie } from './components/Movie/Movie';
import { IMovieQuery } from './services/movieService';

function App() {
  const activeMenu = useSelector(activeMenuSelector);

  const { isLoading, error, data, refetch } = useQuery<IMovieQuery>(
    'movies',
    () => getMovieByCategory(activeMenu?.code || 'now_playing')
  );

  useEffect(() => {
    refetch();
  }, [activeMenu?.code]);

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
      </MovieLayout>
    </Layout>
  );
}

export default App;
