import React from 'react';
import Wrapper from "./Wrapper";
import styles from './wrapper.module.scss';
import styles1 from './wrapper1.module.scss';
import styles2 from './wrapper2.module.scss';

const Book = props => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
      <Wrapper styles={styles} />
      <Wrapper styles={styles1} mode="rotate" />
      <Wrapper styles={styles2} mode="turn" />
    </div>
  );
}

export default Book;
