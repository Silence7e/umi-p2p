import React from 'react';
import TitleBar from '../../../../components/TitleBar';
import VenusItem from '../../../../components/Venus';
import styles from './index.scss';
import noviceIcon from '../../../../assets/product/novice.png';
import numeral from 'numeral';

export default ({ data }: any) => {
  const list = data.map((item: any) => {
    const icon = item.novice ? noviceIcon : null;
    const desc = `起投金额 ${numeral(item.limit).format('0,0')} 元`;
    return <VenusItem key={item.id} {...item} icon={icon} link={`/venus/${item.id}`} desc={desc} />;
  });
  return (
    <section className={`container ${styles.venus}`}>
      <TitleBar title="轻松投" desc="自动投标工具，资金不放假，回款有规划" link="/venus" />
      <div className={styles.listWrap}>
        <div className={styles.list}>{list}</div>
      </div>
    </section>
  );
};
