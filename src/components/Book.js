import React from 'react';
import styles from './Book.module.scss';

const Book = props => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.book} ${styles['book-expand']}`}>
        <div className={styles['book-front']}>
          <img src="/book-test.png" alt="" />
          <div />
        </div>
        <div className={styles['book-page']}>
          {new Array(10).fill(null).map((_, index, arr) => (
            <div key={index} className={styles['book-page-item']}>
              {index === (Math.ceil(arr.length / 2)) && (
                <a className={styles["btn"]} href=".#">点击下载</a>
              )}
            </div>
          ))}
        </div>
        <div className={styles['book-back']}>
          <img src="/book-test.png" alt="" />
        </div>
        <div className={styles['book-spine']} />
      </div>
    </div>
  );
}

export default Book;
