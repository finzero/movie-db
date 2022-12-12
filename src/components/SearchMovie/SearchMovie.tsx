import style from './SearchMovie.module.css';
import searchIcon from '../../assets/magnifying-glass.png';

const SearchMovie = () => {
  return (
    <div className={style.topbar}>
      <img src={searchIcon} alt="" width={16} />
      <input
        type="text"
        className={style.searchInput}
        name="search"
        id="search"
        placeholder="Search Movies"
      />
    </div>
  );
};

export default SearchMovie;
