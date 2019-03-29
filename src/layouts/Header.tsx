import React from 'react';
import styles from './Header.scss';
import Link from 'umi/link';

export default () => {
  return (
    <section className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img
              alt="logo"
              src="https://page.jimu.com/content-dist/images/default/logo_nav_full-a634b12b99.png"
            />
          </Link>
        </div>
        <div className={styles.nav}>
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/vanus">轻松投</Link>
            </li>
            <li>
              <Link to="/project">自选投</Link>
            </li>
            <li>
              <Link to="/about">信息披露</Link>
            </li>
            <li className={styles.account}>
              <Link to="/account">我的积木</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
