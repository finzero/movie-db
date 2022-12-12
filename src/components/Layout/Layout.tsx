import { PropsWithChildren } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import style from './Layout.module.css';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className={style.main}>
      <Sidebar />
      <section className={style.content}>{children}</section>
    </main>
  );
};

export default Layout;
