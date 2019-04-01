import React from 'react';
import Link from 'umi/link';
import numeral from 'numeral';
import moment from 'moment';
import styles from './index.scss';

export default ({ title, rate, date, labels = [], order, time }: any) => {
  const labelList = labels.map((item: string) => (
    <span className={styles.label} key={item}>
      {item}
    </span>
  ));
  return (
    <Link to="/" className={styles.wrap}>
      <section>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>
          {moment(date).format('YYYYMMDD')} - {order}
        </div>
        <div className={styles.labels}>{labelList}</div>
        <div className={styles.process}>
          <div className={styles.processBar} style={{ width: '89%' }} />
        </div>
        <div className={styles.info}>
          <span className={styles.percent}>80%</span>
          <div className={styles.decimal}>
            <span>18万</span>
            <span> / </span>
            <span>20万</span>
          </div>
        </div>
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <div className={styles.featureValue}>
              {numeral(rate * 100).format('0')}
              <em>%</em>
            </div>
            <div className={styles.featureDeac}>约定利率(年化)</div>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureValue}>{time}</div>
            <div className={styles.featureDeac}>项目期限(月)</div>
          </div>
        </div>
      </section>
    </Link>
  );
};
