import style from './Sidebar.module.css';
import appStyle from '../../App.module.css';
import MenuItem, { IMenuItem } from '../MenuItem/MenuItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Sidebar = () => {
  const menuItems = useSelector((state: RootState) => state.menu);

  return (
    <aside className={style.sidebar}>
      <div className={style.appTitle}>Movie App</div>
      <div className={`${style.sidebarMenu} ${appStyle.mt_6}`}>
        {menuItems.map((menu: IMenuItem) => (
          <MenuItem key={menu.id} {...menu} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
