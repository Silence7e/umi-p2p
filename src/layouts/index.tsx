import React from 'react';
import SubHeader from './SubHeader';
import Header from './Header';

const BasicLayout: React.FC = props => {
  return (
    <div>
      <SubHeader />
      <Header />
      {props.children}
    </div>
  );
};

export default BasicLayout;
