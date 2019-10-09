import React, { useEffect, useState } from 'react';
import TeamConflu from './TeamConfluText.svg';
import './contact.css';
import axios from 'axios';
import config from '../../config.json';
import Nav from '../utils/Nav';
const Contact = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await axios.get(`${config.BASE}/teamConflu/`);

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
      <div className='con-contain'>
        <div className='con-heading'>
          <img className='con-title' src={TeamConflu} alt='Team Confluence' />
        </div>
        <div className='con-cards'>
          {/* card starts here */}
          {data.map((e, i) =>
            e.members.map((m, ind) => (
              <div key={ind} className='t-card'>
                <div>
                  <img
                    className='t-img circle'
                    src={m.profilePic}
                    alt='propic'
                  />
                </div>
                <div>
                  <p className='t-name'>{m.name}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
