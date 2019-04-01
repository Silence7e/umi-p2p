import React from 'react';
import TitleBar from '../../../../components/TitleBar';
import Mars from '../../../../components/Mars';
import styles from './index.scss';

export default ({ data }: any) => {
  const list = data.map((item: any) => {
    const labels = [item.repaymentType];
    return <Mars key={item.id} {...item} link={`/mars/${item.id}`} labels={labels} />;
  });
  return (
    <section className={`container ${styles.wrap}`}>
      <TitleBar
        title="自选投-散标"
        desc="项目丰富、期限多样、尽职风控 | 盒子正在努力审核项目，预计项目发布时间 10:00 , 13:00 , 16:00 , 20:00，其余时间与周末随机发标"
        link="/mars"
      />
      <div className={styles.listWrap}>{list}</div>
    </section>
  );
};
