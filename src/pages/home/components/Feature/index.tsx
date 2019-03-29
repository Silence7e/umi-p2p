import React from 'react';
import styles from './index.scss';
import Link from 'umi/link';
import Item from './Item';
import { FeatureItem } from '../../../../interfaces/home';

interface Features {
  data: FeatureItem[];
}

export default ({ data }: Features) => {
  const content = data.map(item => (
    <Link key={item.id} to="/" className={styles.feature}>
      <Item {...item} />
    </Link>
  ));
  return <section className={`container ${styles.list}`}>{content}</section>;
};
