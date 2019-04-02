import React from 'react';
import styles from './index.scss';
import Links from './Links';
import { Icon } from 'antd';
import { footerLinks, contactInfos } from '../../data/home';
import company from '../../data/company';

export default () => {
  const footerLinkList = footerLinks.map((item: any) => (
    <div key={item.title} className={styles.linkList}>
      <Links title={item.title} list={item.list} />
    </div>
  ));
  const contactList = contactInfos.map((item: any) => (
    <div key={item.desc} className={styles.contactItem}>
      <Icon type={item.icon} />
      <span className={styles.contactDesc}>{item.desc}:</span>
      <span className={styles.contactValue}>{item.value}</span>
    </div>
  ));
  return (
    <section className={styles.wrap}>
      <div className={`container ${styles.container}`}>
        <div className={styles.riskInfo}>风险提示：网贷有风险，出借需谨慎</div>
        <div className={styles.footerInfo}>
          <div className={styles.footerLink}>{footerLinkList}</div>
          <div className={styles.contactus}>
            <div className={styles.contactWords}>{contactList}</div>
            <div className={styles.contactCode}>
              <div>
                <img alt="二维码" src="http://via.placeholder.com/120?text=qrCode1" />
                <p>{company.group}</p>
              </div>
              <div>
                <img alt="二维码" src="http://via.placeholder.com/120?text=qrCode2" />
                <p>{company.name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div />
          <span>京ICP证XXXXX号 京ICP备XXXXXXXXX号-X</span>
          <span>京公网安备XXXXXXXXX</span>
          <span>北京市互联网金融协会违法违规行为投诉</span>
          <div className={styles.copyrightFooter}>
            {company.fullName} © 2019 {company.domain} | {company.group}
          </div>
        </div>
      </div>
    </section>
  );
};
