import Layout from './components/Layout/Layout';
import MovieLayout from './components/Layout/MovieLayout';
import img from './assets/avenger.png';
import { CSSProperties } from 'react';
import style from './App.module.css';

function App() {
  return (
    <Layout>
      <MovieLayout>
        <h1>New Release</h1>
        <div className={style.movieList}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div key={i} className={style.movieItem}>
              <img className={style.moviePoster} src={img} alt="Avenger" />
            </div>
          ))}
        </div>
      </MovieLayout>
    </Layout>
  );
}

export default App;
