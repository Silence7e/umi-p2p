import React from 'react';
import styles from './index.scss';
import { VanusProduct } from '../../interfaces/product';

export default ({ icon, title, desc }: VanusProduct) => {
  return (
    <section className={styles.venus}>
      {icon ? <img alt="icon" src={icon} /> : null}
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
      <div className="info">
        <div className="rate">
          <div className="profile">1</div>
          <div className="tip">1</div>
        </div>
        <div className="time">
          <div className="time-limit">s</div>
          <div className="tip">1</div>
        </div>
        <div className="status">
          <div className="status">s</div>
          <div className="tip">a</div>
        </div>
      </div>
    </section>
  );
};
