import style from './MovieCategory.module.css';
import appStyle from '../../App.module.css';
import MenuItem, { ICategory } from '../Category/Category';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const MovieCategory = () => {
  const menuItems = useSelector((state: RootState) => state.menu);

  return (
    <aside className={style.sidebar}>
      <div className={style.appTitle}>Movie App</div>
      <div className={`${style.sidebarMenu} ${appStyle.mt_6}`}>
        {menuItems.map((menu: ICategory) => (
          <MenuItem key={menu.id} {...menu} />
        ))}
      </div>
    </aside>
  );
};

export default MovieCategory;
