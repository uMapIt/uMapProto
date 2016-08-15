import React from 'react';

import Header from './header/header';

export default (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        {props.children}
      </div>
    </div>
  );
};
