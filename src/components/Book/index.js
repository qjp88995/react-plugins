import React from 'react';
import Wrapper from "./Wrapper";
import styles from './wrapper.module.scss';
import styles1 from './wrapper1.module.scss';
import styles2 from './wrapper2.module.scss';

const Book = props => {
  return (
    <div>
      <Wrapper styles={styles} />
      <div style={{ marginTop: 40 }}>
        <Wrapper styles={styles1} />
      </div>
      <div style={{ marginTop: 40, marginLeft: 200 }}>
        <Wrapper styles={styles2} />
      </div>
    </div>
  );
}

export default Book;
