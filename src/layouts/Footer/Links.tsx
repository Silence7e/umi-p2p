import React, { Fragment } from 'react';
import styles from './Links.scss';

export default ({ title, list }: { title: string; list: any[] }) => {
  const dds = list.map(item => <dd className={styles.content} key={item.content}>{item.content}</dd>);
  return (
    <Fragment>
      <dl className={styles.container}>
        <dt className={styles.title}>{title}</dt>
        {dds}
      </dl>
    </Fragment>
  );
};
