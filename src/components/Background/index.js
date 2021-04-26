import React from 'react';
import styles from './index.module.scss';

const Background = props => {
  return (
    <div className={styles.background}>
      <div className={styles.bg1} />
      <div className={styles.bg2} />
      <div className={styles.bg3} />
      <div className={styles.bg4} />
    </div>
  );
}

export default Background;
