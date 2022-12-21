import appStyle from '../../App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import style from './Category.module.css';
import { useDispatch } from 'react-redux';
import { setActiveMenu } from '../../features/menuSlice';
import { TMovieCategory } from '../../services/movieService';

export interface ICategory {
  id: number;
  code: TMovieCategory;
  isActive: boolean;
  label: string;
  link: string;
}

const Category = ({ id, isActive, label, link }: ICategory) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(setActiveMenu(id))}
      className={`${style.categoryItem} ${isActive ? style.active : ''} ${
        appStyle.flexBetweenCenter
      }`}
    >
      {label}
      {isActive && <FontAwesomeIcon icon={faArrowRight} />}
    </div>
  );
};

export default Category;
