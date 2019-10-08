import React, { useEffect, useState } from 'react';
import Nav from '../utils/Nav';
import axios from 'axios';
import config from '../../config.json';
import { Link } from 'react-router-dom';
const Events = props => {
  const category = props.match.params.category;
  const [data, setData] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    const getEvents = async () => {
      try {
        const res = await axios.get(
          `${config.BASE}/events/name/?category=${category}`
        );

        setData([...res.data.data]);
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);

  // const Events = data && data.find(e => e.name === category);

  return (
    <>
      <Nav />

      <div className='m-container'>
        <div className='title-holder'>
          <h1 className='title'>{category}</h1>
        </div>

        <div className='content'>
          {data[0] &&
            data[0].events.map((e, i) => (
              <div className='e-div' key={i}>
                <Link
                  className='events'
                  to={`/categories/${category}/${e.name}`}
                >
                  <p className='size '>{e.name}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Events;
