import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <NavLink
          to={routes.home}
          exact
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          Главная
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.movies}
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          Фильмы
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
