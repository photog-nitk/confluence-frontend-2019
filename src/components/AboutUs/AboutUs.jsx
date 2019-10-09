import React from 'react';
// import aboutUsText from './AboutusText.png';
// import frontScreen from './frontScreen.png';
import Console from './AboutusConsiletext-min.png';
import backGlow from './pinkglow.png';
import './AboutUs.css';
import Nav from '../utils/Nav';
const AboutUs = () => {
  return (
    <>
      <div className='about-container wd'>
        <div className='console'>
          <img className='console-pic' src={Console} alt='Console' />
        </div>
        <p class='aboutuscontent'>
          Confluence, the annual cultural Festival of NIT Kurukshetra is a
          cultural extravaganza beyond words, beyond description. Confluence is
          the coming together of free spirits, like-minded zealous youth and a
          celebration of culture of true artistic genius. Its urge to deliver
          the maximum is what makes it one of the most awaited cultural
          festival.
        </p>
        <Nav />
      </div>

      <img className='backglow' src={backGlow} alt='backGlow' />
      <div>
        <p className='aboutuscontent'>
          Confluence, the annual cultural Festival of NIT Kurukshetra is a
          cultural extravaganza beyond words, beyond description. Confluence is
          the coming together of free spirits, like-minded zealous youth and a
          celebration of culture of true artistic genius. Its urge to deliver
          the maximum is what makes it one of the most awaited cultural
          festival.
        </p>
        <Nav />
      </div>
    </>
  );
};

export default AboutUs;
