import { PropsWithChildren } from 'react';
import SearchMovie from '../SearchMovie/SearchMovie';
import style from './MovieLayout.module.css';

const MovieLayout = ({ children }: PropsWithChildren) => {
  return (
    <section className={style.movieLayout}>
      {/* <SearchMovie /> */}
      {children}
    </section>
  );
};

export default MovieLayout;
