import style from './Sidebar.module.css';
import appStyle from '../../App.module.css';
import { useState, useCallback } from 'react';
import MenuItem, { IMenuItem } from '../MenuItem/MenuItem';

const Sidebar = () => {
  const [menuItems, setMenuItems] = useState<IMenuItem[]>([
    { id: 1, label: 'New Releases', link: '', isActive: true },
    { id: 2, label: 'Trending', link: '', isActive: false },
    { id: 3, label: 'Comming Soon', link: '', isActive: false },
    { id: 4, label: 'Favourites', link: '', isActive: false },
    { id: 5, label: 'Watch Later', link: '', isActive: false },
  ]);

  const handleMenuClick = useCallback((id: number) => {
    console.log('got called');
    const updatedMenu = menuItems.map((menu) => ({
      ...menu,
      isActive: menu.id === id,
    }));
    setMenuItems(updatedMenu);
  }, []);

  return (
    <aside className={style.sidebar}>
      <div className={style.appTitle}>Movie App</div>
      <div className={`${style.sidebarMenu} ${appStyle.mt_6}`}>
        {menuItems.map((menu: IMenuItem) => (
          <MenuItem key={menu.id} {...menu} menuClick={handleMenuClick} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
