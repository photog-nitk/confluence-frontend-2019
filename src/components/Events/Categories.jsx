import React from 'react';
import Nav from '../utils/Nav';
import { List } from '../EventImg';
import { Link } from 'react-router-dom';
const Categories = () => {
  return (
    <>
      {' '}
      <Nav />
      <div className='m-container wd'>
        <div className='title-holder'>
          <h1 className='title'>EVENTS</h1>
        </div>

        <div className='content'>
          {List.map((e, i) => (
            <Link to={`/categories/${e.eventName}`}>
              <img className='catImg' src={e.img} alt={e.eventName} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
