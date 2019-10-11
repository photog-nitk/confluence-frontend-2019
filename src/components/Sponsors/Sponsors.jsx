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
      Type: 'Platinum Partner',
      List: [
        {
          Name: 'IOCL',
          ImageURL: 'https://5.imimg.com/data5/QW/FB/MY-38751272/indian-oil-sign-board-500x500.jpg'
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
    },
    {
      Type: 'Fragrance Partner',
      List: [
        {
          Name: 'Denver',
          ImageURL: 'https://i.ibb.co/y8q1FPw/Hamilton-Flat-Logo-250px-W.jpg'
        }
      ]
    },
    {
      Type: 'Marketing Partner',
      List: [
        {
          Name: 'Remmo Entertainment',
          ImageURL: 'data:image/png;base64,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'
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
