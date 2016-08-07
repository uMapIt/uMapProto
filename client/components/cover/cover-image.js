import React from 'react';

const CoverImage = () => {
  return (
    <div className = 'row'>
      <div className='bannerText'>
        <h1>Go Map Yourself!</h1>
        <p>a search engine built by and for travelers like you</p>
      </div>
      {/*Rotating banner images start*/}
        <div className="bannerwrapper"></div>
         <div className="m_fade">
            <ul id="main_imgfade">
             <li>
               <img className="banner-image col-xs-12" src="https://s3.ap-northeast-2.amazonaws.com/umapit/main_img02.jpg" alt="umapit" />
             </li>
           </ul>
         </div>
    {/*rotating banner images finish*/}
    </div>
  );
}

export default CoverImage;
