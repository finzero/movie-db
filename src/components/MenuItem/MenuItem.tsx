import appStyle from '../../App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import style from './MenuItem.module.css';

export interface IMenuItem {
  id: number;
  isActive: boolean;
  label: string;
  link: string;
}

interface IMenuItemProp extends IMenuItem {
  menuClick: (id: number) => void;
}

const MenuItem = ({ id, isActive, label, link, menuClick }: IMenuItemProp) => {
  return (
    <div
      onClick={() => menuClick(id)}
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
