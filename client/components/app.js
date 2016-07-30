import React from 'react';
import Header from './header';

export default (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <div>
        <h1>Yes!!!</h1>
      </div>
    </div>
  );
};
