import movieLoader from '../../assets/5-Film-reel.gif';
import style from './MovieLoader.module.css';

const MovieLoader = () => {
  return (
    <div className={style.loading}>
      <img src={movieLoader} alt="Loading" />
    </div>
  );
};

export default MovieLoader;
