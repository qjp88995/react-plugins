import React, { useState } from 'react';
import styles from './Book.module.scss';

const Book = props => {
  const [book1, setBook1] = useState({
    rotateX: 0,
    rotateY: -30,
  });
  const [book2, setBook2] = useState({
    hover: false,
    rotateX: 0,
    rotateY: -30,
    hoverRotateX: 0,
    hoverRotateY: 0,
  });

  const onBook2MouseOver = e => {
    e.preventDefault();
    setBook2(state => {
      state.hover = true;
      return { ...state };
    });
  }

  const onBook2MouseOut = e => {
    e.preventDefault();
    setBook2(state => {
      state.hover = false;
      return { ...state };
    });
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={`${styles.book} ${styles['book-expand']}`} style={{ transform: `rotateX(${book1.rotateX}deg) rotateY(${book1.rotateY}deg)` }}>
            <div className={styles['book-front']}>
              <img src={`${process.env.PUBLIC_URL}/book-test.png`} alt="" />
              <div />
            </div>
            <div className={styles['book-page']}>
              {new Array(5).fill(null).map((_, index, arr) => (
                <div key={index} className={styles['book-page-item']}>
                  {index === (Math.ceil(arr.length / 2)) && (
                    <a className={styles["btn"]} href=".#">点击下载</a>
                  )}
                </div>
              ))}
            </div>
            <div className={styles['book-back']}>
              <img src={`${process.env.PUBLIC_URL}/book-test.png`} alt="" />
            </div>
            <div className={styles['book-spine']} />
          </div>
        </div>
        <div>
          <div>
            <span>rotateX：</span>
            <input
              type="text"
              value={book1.rotateX}
              onChange={e => {
                const { value } = e.target;
                setBook1(state => {
                  state.rotateX = Number(value.replace(/[^\d.]/, ''));
                  return { ...state };
                });
              }}
            />
          </div>
          <div>
            <span>rotateY：</span>
            <input
              type="text"
              value={book1.rotateY}
              onChange={e => {
                const { value } = e.target;
                setBook1(state => {
                  state.rotateY = Number(value.replace(/[^\d.-]/, ''));
                  return { ...state };
                });
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div
          className={styles.book}
          onMouseOver={onBook2MouseOver}
          onMouseOut={onBook2MouseOut}
          style={{ transform: `rotateX(${book2.hover ? book2.hoverRotateX : book2.rotateX}deg) rotateY(${book2.hover ? book2.hoverRotateY : book2.rotateY}deg)` }}
        >
          <div className={styles['book-front']}>
            <img src={`${process.env.PUBLIC_URL}/book-test.png`} alt="" />
            <div />
          </div>
          <div className={styles['book-page']}>
            {new Array(5).fill(null).map((_, index, arr) => (
              <div key={index} className={styles['book-page-item']}>
                {index === (Math.ceil(arr.length / 2)) && (
                  <a className={styles["btn"]} href=".#">点击下载</a>
                )}
              </div>
            ))}
          </div>
          <div className={styles['book-back']}>
            <img src={`${process.env.PUBLIC_URL}/book-test.png`} alt="" />
          </div>
          <div className={styles['book-spine']} />
        </div>
      </div>
      <div className={styles.wrapper2} style={{ marginLeft: 200 }}>
        <div className={styles.book} >
          <div className={styles['book-front']}>
            <div>
              <img src={`${process.env.PUBLIC_URL}/book-test.png`} alt="" />
            </div>
            <div />
          </div>
          <div className={styles['book-page']}>
            {new Array(5).fill(null).map((_, index, arr) => (
              <div key={index} className={styles['book-page-item']}>
                {index === 3 && (
                  <a className={styles["btn"]} href=".#">点击下载</a>
                )}
              </div>
            ))}
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
    </div>
  );
}

export default Book;
