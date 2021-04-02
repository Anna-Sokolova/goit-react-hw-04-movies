import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

const Title = ({ title }) => <h2 className={styles.title}>{title}</h2>;

Title.defaultProps = {
  title: '',
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
