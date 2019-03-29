import React from 'react';
import styles from './index.scss';
import Link from 'umi/link';
import { Icon } from 'antd';

interface BarData {
  title: string;
  desc: string;
  more?: string;
  link: string;
}

export default ({ title, desc, more = '更多项目', link }: BarData) => {
  return (
    <div className={styles.bar}>
      <h4 className={styles.title}>{title}</h4>
      <span className={styles.desc}>{desc}</span>
      <Link to={link} className={styles.more}>
        {more}
        <Icon type="right" />
      </Link>
    </div>
  );
};
