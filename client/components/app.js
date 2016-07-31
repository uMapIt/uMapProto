import React from 'react';

import Header from './header/header';
import CoverImage from './cover/cover-image';

export default (props) => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <CoverImage />
      </div>
      <div className="container">
        <div className="row">
          {props.children}
        </div>
      </div>
    </div>
  );
};
