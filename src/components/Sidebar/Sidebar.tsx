import style from './Sidebar.module.css';
import appStyle from '../../App.module.css';

const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <div className={style.appTitle}>Movie App</div>
      <div className={`${style.sidebarMenu} ${appStyle.mt_6}`}>
        <div className={style.active}>New Releases</div>
        <div>Trending</div>
        <div>Comming Soon</div>
        <div>Favourites</div>
        <div>Watch Later</div>
      </div>
    </aside>
  );
};

export default Sidebar;
