import React from 'react';

const CoverImage = () => {
  return (
    <div className="row">
      <div className="bannerText">
        <h1>Go Map Yourself!</h1>
        <p>a search engine built by and for travelers like you</p>
      </div>
      <div className="widewrapper">
        <img src="https://s3.ap-northeast-2.amazonaws.com/umapit/main_img02.jpg" alt="umapit" />
      </div>
    </div>
  );
}

export default CoverImage;

/*
<div className="jumbotron">
  <h1>uMapIt</h1>
  <h2>Go map yourself!</h2>
</div>
*/
