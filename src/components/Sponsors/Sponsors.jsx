import React, { useEffect, useState } from 'react';
import Nav from '../utils/Nav';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../config.json';
import sponsorHeading from './SponsorsFont.svg';
import './sponsors.css';
import title from './bulb.jpg';
import online from './online.jpg';

const Sponsors = () => {
  const sponsiList = [
    {
      Type: 'Title Sponsor',
      List: [
        {
          Name: 'Hero ',
          ImageURL: 'https://i.ibb.co/LQcytnP/hero.png'
        }
      ]
    },
    {
      Type: 'Powered By',
      List: [
        {
          Name: 'MTV Beats',
          ImageURL: 'https://i.ibb.co/0KDWwwK/mtv-beats.png'
        }
      ]
    },
    {
      Type: 'Charged By',
      List: [
        {
          Name: 'APCPL',
          ImageURL: 'https://i.ibb.co/K02FmYV/apcpl.png'
        }
      ]
    },
    {
      Type: 'Online Food Partner',
      List: [
        {
          Name: 'Swiggy',
          ImageURL: 'https://i.ibb.co/R9fh8tX/swiggy.png'
        }
      ]
    },
    {
      Type: 'Education Partner',
      List: [
        {
          Name: 'GATE Forum',
          ImageURL: 'https://i.ibb.co/wwF17xn/download.jpg'
        },
        {
          Name: 'Made Easy',
          ImageURL: 'https://i.ibb.co/crQNcDf/0.png'
        },
        {
          Name: 'GATE Academy',
          ImageURL: 'https://i.ibb.co/dQP8Vq3/gateacademy.jpg'
        }
      ]
    },
    {
      Type: 'Automobile Partner',
      List: [
        {
          Name: 'Honda Cars',
          ImageURL: 'https://i.ibb.co/HLZqgPQ/honda.png'
        }
      ]
    },
    {
      Type: 'Gifting Partner',
      List: [
        {
          Name: 'The Souled Store',
          ImageURL: 'https://i.ibb.co/6nFH5jp/tss.jpg'
        }
      ]
    },
    {
      Type: 'Knowledge Partner',
      List: [
        {
          Name: 'Wiley',
          ImageURL: 'https://i.ibb.co/WGJ4317/wiley.png'
        }
      ]
    },
    {
      Type: 'Saving Partner',
      List: [
        {
          Name: 'Grab On',
          ImageURL: 'https://i.ibb.co/mNspTgL/grabon.jpg'
        }
      ]
    }
  ];

  return (
    <>
      {/* <div className="sponsor-container">
      <Nav />
        <img className="sponsor-head" src={sponsorHeading} alt="sponsorHeading" />
      
      <div className="sponsors-cont">
        <div className="title">
          <h1 className="title-head"> TITLE SPONSOR </h1>
          <img className="title-img" src={title} alt="titleImg" />
          <h3 className="title-name"> TITLE NAME </h3>
        </div>
        <div className="online">
          <h1 className="online-head"> ONLINE PATNERS </h1>
          <div className="online-sponsors">
               <Link to='./sponsors' >
                <div className="online-single">
                  <img className="online-img" src={online} alt="" />
                  <h2 className="online-name" > ONLINENAME </h2>
                </div>
              </Link>
          </div> 
        </div> 
      </div> 
    </div>  */}

      <div className='sponsor-container'>
        <Nav />
        <img
          className='sponsor-head'
          src={sponsorHeading}
          alt='sponsorHeading'
        />

        <div className='sponsors-cont'>
          {sponsiList.map((s, i) => (
            <>
              <h1>{s.Type}</h1>
              <div className='sponsi-multi'>
                {s.List.map((m, j) => (
                  <div className='sponsi-single'>
                    <img src={m.ImageURL} alt={m.Name}></img>
                    <h2>{m.Name}</h2>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sponsors;
