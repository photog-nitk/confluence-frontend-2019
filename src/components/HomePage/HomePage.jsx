import React, { useContext } from 'react';
import Disk from './discElements-min.png';
import ConfluText from './smalldisk-min.png';
import Theme from './homepagetheme-min.png';
import Nav from '../utils/Nav';
import Store from '../../store/store';
import Categories from '../Events/Categories';
import './HomePage.css';
import { Redirect } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';

const HomePage = () => {
  // const { state, dispatch } = useContext(Store);
  const { state } = useContext(Store);

  if (state.user && !state.user.onBoard) return <Redirect to='/onboard' />;
  return (
    <>
      <div className='main'>
        <div className='container wd'>
          <div className='home-container'>
            <div className='rotator'>
              <img id='disc' src={Disk} alt='disk' />
              <img id='conflutxt' src={ConfluText} alt='conflutxt' />
            </div>
            <img id='theme' src={Theme} alt='theme' />
          </div>
        </div>

        <Nav />
      </div>
    </>
  );
};

export default HomePage;
