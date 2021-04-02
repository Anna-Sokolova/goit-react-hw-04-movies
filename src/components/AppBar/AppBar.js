import React from 'react';
import Container from '../Container';
import Navigation from '../Navigation';
import styles from './AppBar.module.css';

const AppBar = () => (
  <header className={styles.header}>
    <Container>
      <Navigation />
    </Container>
  </header>
);

export default AppBar;
