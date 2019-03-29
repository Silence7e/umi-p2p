import React from 'react';
import styles from './SubHeader.scss';
import company from '../data/company';
import Link from 'umi/link';

export default ({ a = '' }: { a?: string }) => {
  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.contactus}>
          为了您有更好的咨询体验，建议选择在线客服客服热线：
          {company.hotline} 服务时间：
          {company.serviceTime}
          {a}
        </div>
        <div className={styles['sup-nav']}>
          <ul>
            <li>
              <Link className={styles.navItem} to="/lenderEdu">
                出借人教育
              </Link>
            </li>
            <li>
              <Link className={styles.navItem} to="/staticsnew">
                运营数据
              </Link>
            </li>
            <li>
              <Link className={styles.navItem} to="/bbs">
                积木坛子
              </Link>
            </li>
            <li className={styles.download}>
              <a
                className={styles.navItem}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.baidu.com"
              >
                下载客户端
              </a>
              <div className={styles.qrContainer}>
                <img
                  alt="logo"
                  className={styles.companyLogo}
                  src="http://via.placeholder.com/120?text=logo"
                />
                <h3>{company.name}</h3>
                <img
                  alt="二维码"
                  className={styles.qrcode}
                  src="http://via.placeholder.com/180?text=qrcode"
                />
                <p>手机投资·方便快捷</p>
              </div>
            </li>
            <li>
              <Link className={styles.navItem} to="user/login">
                登录
              </Link>
            </li>
            <li>
              <Link className={styles.navItem} to="user/register">
                注册
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
