import React, { useState, useContext } from 'react';
import Store from '../../store/store';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
// import Nav from '../utils/Nav';
import config from '../../config.json';
// import { readSync } from 'fs';
const Onboard = props => {
  const { state, dispatch } = useContext(Store);
  // const event = props.match.params.event;
  // const category = props.match.params.category;
  const [data, setData] = useState({
    college: '',
    contactNumber: '',
    year: ''
  });
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const onboard = async () => {
    const iconfig = {
      headers: {
        Authorization: state.token
      }
    };

    const body = JSON.stringify(data);
    try {
      const res = await axios.put(
        `${config.BASE}/user/onBoard/`,
        body,
        iconfig
      );

      if (res.data.success) {
        dispatch({
          type: 'ONBOARD',
          payload: res.data.data
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    onboard();
  };
  if (!state.isAuth) return <Redirect to='/' />;
  if (state.user && state.user.onBoard) return <Redirect to='/' />;
  return (
    <>
      <div className='o-container'>
        <div className='title-holder'>
          <h1 className='title'>Onboard</h1>

          <div className='form'>
            <h2 className='subtitle'>Welcome to confluence'19 Remastered</h2>
            <form onSubmit={onSubmit}>
              <label htmlFor='contactNumber'>phone_no</label>
              <div className='form-item'>
                <input
                  name='contactNumber'
                  onChange={handleChange}
                  type='text'
                  maxLength='10'
                  required='required'
                />
              </div>
              <label htmlFor='college'>college</label>
              <div className='form-item'>
                <input
                  name='college'
                  onChange={handleChange}
                  type='text'
                  required='required'
                />
              </div>
              <label htmlFor='year'>year</label>
              <div className='form-item'>
                <select name='year' onChange={handleChange} required='required'>
                  <option value='1st'>1st</option>
                  <option value='2nd'>2nd </option>
                  <option value='3rd'>3rd</option>
                  <option value='4th'>4th</option>
                </select>
              </div>
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Onboard;
