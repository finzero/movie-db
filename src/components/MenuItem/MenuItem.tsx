import appStyle from '../../App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import style from './MenuItem.module.css';
import { useDispatch } from 'react-redux';
import { setActiveMenu } from '../../features/menuSlice';

export interface IMenuItem {
  id: number;
  isActive: boolean;
  label: string;
  link: string;
}

const MenuItem = ({ id, isActive, label, link }: IMenuItem) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(setActiveMenu(id))}
      className={`${style.menuItem} ${isActive ? style.active : ''} ${
        appStyle.flexBetweenCenter
      }`}
    >
      {label}
      {isActive && <FontAwesomeIcon icon={faArrowRight} />}
    </div>
  );
};

export default MenuItem;
