import React from 'react';
import numeral from 'numeral';
import styles from './index.scss';
import { VenusProduct } from '../../interfaces/product';
import Link from 'umi/link';

export default ({ icon, title, desc, link, rate, time, statusDesc }: VenusProduct) => {
  return (
    <Link to={link} className={styles.link}>
      <section className={styles.venus}>
        {icon ? <img alt="icon" src={icon} className={styles.icon} /> : null}
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{desc}</div>
        <div className={styles.info}>
          <div className={styles.rate}>
            <div className={styles.profile}>
              {numeral(rate * 100).format('0')}
              <em>%</em>
            </div>
            <div className={styles.tip}>参考利率(年化)</div>
          </div>
          <div className={styles.time}>
            <div className={styles.timeLimit}>
              {time}
              <em>个月</em>
            </div>
            <div className={styles.tip}>出借期限</div>
          </div>
          <div className={styles.status}>
            <div className={styles.statusNum}>{statusDesc}</div>
            <div className={styles.tip}>状态</div>
          </div>
        </div>
        <section className={styles.shadow}>
          <div className={styles.shadowTip}>
            <div className={styles.shadowTipTitle}>{statusDesc}</div>
            <div className={styles.shadowTipInfo}>查看详情</div>
          </div>
        </section>
      </section>
    </Link>
  );
};
