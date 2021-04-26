import React from 'react';

const Wrapper = props => {
  const { styles, mode = 'turn' } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.book} >
        <div className={styles['book-front']}>
          <div>
            <img src={`${process.env.PUBLIC_URL}/book-test.png`} alt="" />
            {mode === 'rotate' && (
              <div className={styles['book-download']}>
                <a href=".#"> 下载 </a>
              </div>
            )}
          </div>
          <div />
        </div>
        <div className={`${styles['book-page']} ${styles['book-page-1']}`} />
        <div className={`${styles['book-page']} ${styles['book-page-2']}`} />
        <div className={`${styles['book-page']} ${styles['book-page-3']}`} />
        <div className={`${styles['book-page']} ${styles['book-page-4']}`}>
          {mode === 'turn' && (
            <a className={styles["btn"]} href=".#">点击下载</a>
          )}
        </div>
        <div className={`${styles['book-page']} ${styles['book-page-5']}`} />
        <div className={styles['book-back']}>
          <div>
            <img src={`${process.env.PUBLIC_URL}/book-test.png`} alt="" />
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
