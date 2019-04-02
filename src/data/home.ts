import { FeatureItem } from '../interfaces/home';
import company from './company';
const address = 'https://www.jimu.com';
const features: FeatureItem[] = [
  {
    id: 1,
    img: `${address}/Content-dist/img/home/nav-operation-a68d5ec346.png`,
    hoverImg: `${address}/Content-dist/img/home/nav-operation-hover-f1fbe4a0d5.gif`,
    title: '合规运营',
    desc: '真诚透明稳健规范',
  },
  {
    id: 2,
    img: `${address}/Content-dist/img/home/nav-depository-6424cbdca2.png`,
    hoverImg: `${address}/Content-dist/img/home/nav-depository-hover-38afe8bf8e.gif`,
    title: '资金安全',
    desc: '民生银行资金存管',
  },
  {
    id: 3,
    img: `${address}/Content-dist/img/home/nav-operation-a68d5ec346.png`,
    hoverImg: `${address}/Content-dist/img/home/nav-operation-hover-f1fbe4a0d5.gif`,
    title: '合规运营',
    desc: '真诚透明稳健规范',
  },
  {
    id: 4,
    img: `${address}/Content-dist/img/home/nav-depository-6424cbdca2.png`,
    hoverImg: `${address}/Content-dist/img/home/nav-depository-hover-38afe8bf8e.gif`,
    title: '资金安全',
    desc: '民生银行资金存管',
  },
];

const footerLinks = [
  {
    title: '关于积木',
    list: [
      { content: '公司简介' },
      { content: '组织信息' },
      { content: '重大事项' },
      { content: '媒体报道' },
      { content: '法律声明' },
    ],
  },
  {
    title: '安全保障',
    list: [
      { content: '合规运营' },
      { content: '资金存管' },
      { content: '风险控制' },
      { content: '信息安全' },
    ],
  },
  {
    title: '信息披露',
    list: [
      { content: '运营数据' },
      { content: '审计信息' },
      { content: '备案信息' },
      { content: '还款公告' },
    ],
  },
  {
    title: '自助服务',
    list: [{ content: '帮助中心' }, { content: '收益计算器' }, { content: '收费标准' }],
  },
];

const contactInfos = [
  {
    icon: 'phone',
    value: company.hotline,
    desc: '客服电话',
  },
  {
    icon: 'mail',
    value: company.kefuEmail,
    desc: '客服邮箱',
  },
  {
    icon: 'clock-circle',
    value: company.serviceTime,
    desc: '服务时间',
  },
  {
    icon: 'solution',
    value: company.complain,
    desc: '投诉电话',
  },
  {
    icon: 'solution',
    value: company.complainEmail,
    desc: '投诉邮箱',
  },
];
export { features, footerLinks, contactInfos };
