import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Carousel } from 'antd';
import styles from './index.scss';
import { features } from '../../data/home';
import Notification from './components/Notifications';
import Feature from './components/Feature';
import VenusList from './components/VenusList';
import { ListParams } from '../../interfaces/list';
import { State } from '../../interfaces/model';

interface Props {
  banners: any[];
  notification: any;
  getBanners: () => null;
  getNotifications: () => null;
  fetchVenus: () => null;
  venus: any[];
}

class Home extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.props.getBanners();
    this.props.getNotifications();
    this.props.fetchVenus();
  }
  render() {
    const { banners = [], notification, venus } = this.props;
    const content = banners.map((item: any) => {
      const data = { backgroundImage: `url(${item.src})`, height: '100%' };
      return (
        <div key={item.src} className={styles.slideItem}>
          <div style={data} />
        </div>
      );
    });
    return (
      <Fragment>
        <div className="container" style={{ overflow: 'hidden', maxHeight: '320px' }}>
          <Carousel autoplay={true}>{content}</Carousel>
        </div>
        <Notification content={notification && notification.content} />
        <Feature data={features} />
        <VenusList data={venus} />
        <div>ss</div>
        <div>ss</div>
        <div>ss</div>
        <div>ss</div>
        <div>ss</div>
        <div>ss</div>
      </Fragment>
    );
  }
}

const mapPropsToState = (state: State) => {
  return {
    banners: state.home.banners,
    venus: state.venus.list.slice(0, 2),
    notification: state.notification.data && state.notification.data[0],
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch,
    getBanners: () => {
      dispatch({
        type: 'home/getBanners',
        payload: {},
      });
    },
    getNotifications: () => {
      dispatch({
        type: 'notification/getNotifications',
        payload: {},
      });
    },
    fetchVenus: ({ offset, size, total }: ListParams = {}) => {
      dispatch({
        type: 'venus/fetchVenus',
        payload: {
          offset,
          size,
          total,
        },
      });
    },
  };
};
export default connect(
  mapPropsToState,
  mapDispatchToProps
)(Home);

