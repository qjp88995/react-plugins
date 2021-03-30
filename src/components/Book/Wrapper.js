import React from 'react';

const Wrapper = props => {
  const { styles } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.book} >
        <div className={styles['book-front']}>
          <div>
            <img src={`${process.env.PUBLIC_URL}/book-test.png`} alt="" />
          </div>
          <div />
        </div>
        <div className={styles['book-page']}>
          <div className={styles['book-page-item']} />
          <div className={styles['book-page-item']} />
          <div className={styles['book-page-item']} />
          <div className={styles['book-page-item']}>
            <a className={styles["btn"]} href=".#">点击下载</a>
          </div>
          <div className={styles['book-page-item']} />
        </div>
        <div className={styles['book-back']}>
          <div>
            <img src={`${process.env.PUBLIC_URL}/book-test.png`} alt="" />
          </div>
          <div />
        </div>
        <div className={styles['book-spine']} />
      </div>
    </div>
  );
}

export default Wrapper;
