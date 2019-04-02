import React from 'react';
import SubHeader from './SubHeader';
import Header from './Header';
import Footer from './Footer';

const BasicLayout: React.FC = props => {
  return (
    <div>
      <SubHeader />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default BasicLayout;
