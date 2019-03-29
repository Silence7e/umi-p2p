import React from 'react';
import TitleBar from '../../../../components/TitleBar';
import styles from './index.scss';
import Vanus from '../../components/Vanus';

export default () => {
  return (
    <section className={`container ${styles.vanus}`}>
      <TitleBar title="轻松投" desc="自动投标工具，资金不放假，回款有规划" link="/vanus" />
      <Vanus />
    </section>
  );
};
