import React, { useEffect, useState } from 'react';
import Dev from './DevelopersText_1.svg';
import './dev.css';
import Nav from '../utils/Nav';
import axios from 'axios';
import config from '../../config.json';
const Developer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await axios.get(`${config.BASE}/developers/?role=webapp`);

        setData([...res.data.data]);
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);

  return (
    <div>
      <Nav />
      <div className='dev-contain'>
        <div className='dev-heading'>
          <img className='dev-title' src={Dev} alt='' />
        </div>

        <div className='dev-cards'>
          {/* card starting */}
          {data[0] &&
            data[0].members.map((e, i) => (
              <div key={i} className='dev-card'>
                <div className='dev-info'>
                  <div className='dev-name'>{e.name}</div>
                  <div className='dev-prof'>{e.designatio}</div>
                  <div className='dev-divider'></div>

                  <div className='dev-git-icon'>
                    <a href={e.githubID}>
                      <i className='fa gitlink fa-github'></i>
                    </a>
                  </div>
                  <div className='dev-photo'>
                    <img className='dev-image' src={e.profilePic} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Developer;
