import { PropsWithChildren } from 'react';
import style from './Layout.module.css';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className={style.main}>
      <section className={style.content}>{children}</section>
    </main>
  );
};

export default Layout;
