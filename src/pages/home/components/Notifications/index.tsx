import React from 'react';
import styles from './index.scss';
import Link from 'umi/link';
import { Icon } from 'antd';

const Notification = ({ content = '' }: { content?: string }) => {
  return (
    <section className={`container ${styles.wrap}`}>
      <div className={styles.title}>系统公告</div>
      {content ? <div className={styles.content}>{content}</div> : null}
      <Link className={styles.more} to="/notifications">
        更多公告
        <Icon type="right" />
      </Link>
    </section>
  );
};

export default Notification;
