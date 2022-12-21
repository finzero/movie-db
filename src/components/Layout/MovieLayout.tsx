import { PropsWithChildren } from 'react';
import SearchMovie from '../SearchMovie/SearchMovie';
import style from './MovieLayout.module.css';

const MovieLayout = ({ children }: PropsWithChildren) => {
  return (
    <section className={style.movieLayout}>
      <SearchMovie />
      <div>{children}</div>
    </section>
  );
};

export default MovieLayout;
