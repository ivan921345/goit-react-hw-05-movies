import { NavLink, Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import { Suspense } from 'react';
const SharedLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <NavLink className={`${styles.navLink}`} to={'/'}>
          Home
        </NavLink>
        <NavLink className={`${styles.navLink}`} to={'/movies'}>
          Movies
        </NavLink>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
