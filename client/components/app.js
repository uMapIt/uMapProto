import React from 'react';

import Header from './header/header';
import CoverImage from './cover/cover-image';

export default (props) => {
  return (
    <div>
      <Header />
      <CoverImage />
      {props.children}
    </div>
  );
};
