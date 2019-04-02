import React, { Fragment } from 'react';
import Link from 'umi/link';
import numeral from 'numeral';
import moment from 'moment';
import styles from './index.scss';

export default ({ title, rate, date, labels = [], order, time, status }: any) => {
  const labelList = labels.map((item: string) => (
    <span className={styles.label} key={item}>
      {item}
    </span>
  ));
  let info = (
    <Fragment>
      <span className={styles.percent}>80%</span>
      <div className={styles.decimalWrap}>
        <span className={styles.decimal}>18万</span>
        <span> / </span>
        <span className={styles.decimal}>20万</span>
      </div>
    </Fragment>
  );
  const isFinished = status.value === 'finished';
  if (isFinished) {
    info = (
      <Fragment>
        借贷完成，金额<span className={styles.decimal}>4.21</span>万
      </Fragment>
    );
  }
  return (
    <Link to="/" className={`${styles.wrap} ${isFinished ? styles.finished : ''}`}>
      <section>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>
          {moment(date).format('YYYYMMDD')} - {order}
        </div>
        <div className={styles.labels}>{labelList}</div>
        <div className={styles.process}>
          <div className={styles.processBar} style={{ width: '89%' }} />
        </div>
        <div className={styles.info}>{info}</div>
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <div className={styles.featureValue}>
              {Math.floor(rate * 100)}
              <em>{(rate * 1000) % 10 ? `.${(rate * 1000) % 10}` : ''}%</em>
            </div>
            <div className={styles.featureDeac}>约定利率(年化)</div>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureValue}>{time}</div>
            <div className={styles.featureDeac}>项目期限(月)</div>
          </div>
        </div>
      </section>
      <div className={styles.finishedMask} />
      <div className={styles.maskText}>
        借贷完成<span>查看详情</span>
      </div>
    </Link>
  );
};
