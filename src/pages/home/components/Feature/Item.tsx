import React from 'react';
import styles from './Item.scss';
import { FeatureItem } from '../../../../interfaces/home';

export default ({ title, desc, img, hoverImg }: FeatureItem) => {
  const imgStyle = {
    backgroundImage: `url(${img})`,
  };
  const hoverStyle = {
    backgroundImage: `url(${hoverImg})`,
  };
  return (
    <section className={styles.wrap}>
      <div className={styles.img} style={imgStyle} />
      <div className={styles.hoverImg} style={hoverStyle} />
      <div>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.desc}>{desc}</p>
      </div>
    </section>
  );
};
