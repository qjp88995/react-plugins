import React from 'react';
import styles from './Carousel.module.scss';

function Carousel(props) {
    const { width = '100%', height = 300 } = props;
    return (
        <div>
            <h2>轮播图</h2>
            <div className={styles.carousel} style={{ width, height }}>
                <div className={styles.container}>
                    <div className={styles.item} style={{ display: 'block', backgroundColor: 'green' }}/>
                    <div className={styles.item} style={{ display: 'none', backgroundColor: 'blue' }}/>
                    <div className={styles.item} style={{ display: 'none', backgroundColor: 'red' }}/>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
