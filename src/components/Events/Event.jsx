import React, { useEffect, useState, useContext } from 'react';
import Store from '../../store/store';
import axios from 'axios';
import Nav from '../utils/Nav';
import config from '../../config.json';
const Event = props => {
  const { state } = useContext(Store);
  const [notif, setNotif] = useState([]);
  const event = props.match.params.event;
  const category = props.match.params.category;
  const [data, setData] = useState(null);
  const [events, setEvents] = useState(null);
  // const [isReg, setReg] = useState(false);
  useEffect(() => {
    const getRegEvents = async () => {
      try {
        const iconfig = {
          headers: {
            Authorization: state.token
          }
        };

        const res = await axios.get(`${config.BASE}/user/event/`, iconfig);
        setEvents([...res.data.data]);
      } catch (error) {
        console.log(error);
      }
    };

    if (state.isAuth) {
      getRegEvents();
    }
    window.scrollTo(0, 0);
    const getEvents = async () => {
      try {
        const res = await axios.get(
          `${config.BASE}/events/desc/?event=${event}`
        );

        setData({ ...res.data.data });
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);

  const register = async () => {
    setNotif([...notif, { data: 'Registering' }]);

    setTimeout(() => {
      setNotif([]);
    }, 3000);
    if (!state.isAuth) {
      props.history.push('/notauthorized');
    }

    try {
      const iconfig = {
        headers: {
          Authorization: state.token
        }
      };

      const body = JSON.stringify({});
      const res = await axios.put(
        `https://confluence-backend.appspot.com/api/user/event/?category=${category}&event=${event}`,
        body,
        iconfig
      );
      if (res.data.success) {
        setNotif([...notif, { data: 'Registered Successfully' }]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const catcheck = events && events.find(e => e.name === category);
  const evecheck = catcheck && catcheck.events.find(e => e.name === event);

  return (
    <>
      <Nav />

      <div className='m-container'>
        <div className='title-holder'>
          <h1 className='event-t title'>{event}</h1>
        </div>

        {data == null ? (
          <p className='loading'>Loading</p>
        ) : (
          <div className='description'>
            {evecheck && evecheck.name != null ? (
              <h3 className='reg'>Already registered</h3>
            ) : (
              <p className='register' onClick={register}>
                Register
              </p>
            )}
            {notif.map((e, i) => (
              <p className='status-text'>{e.data}</p>
            ))}
            <p>
              <span className='bold'>Description : </span>
              {data.description}
            </p>{' '}
            <br />
            <p>
              {' '}
              <span className='bold'>Venue : </span> {data.venue}
            </p>
            {data.prize == null ? null : (
              <p>
                {' '}
                <span className='bold'>Prize : </span> Rs.{data.prize}
              </p>
            )}
            <br />
            <br />
            <p>
              {' '}
              <span className='bold'>Rules : </span>
            </p>{' '}
            <br />
            {data.rules === undefined || data.rules === null ? (
              <p>loading</p>
            ) : (
              data.rules.length > 0 &&
              data.rules.map((e, i) => (
                <p key={i} className='rule'>
                  {i + 1}. {e}
                </p>
              ))
            )}
            <br />
            <p>
              {' '}
              <span className='bold'>Coordinators : </span>
            </p>{' '}
            <br />
            {data.coordinators === undefined || data.coordinators === null ? (
              <p>loading</p>
            ) : (
              data.coordinators.length > 0 &&
              data.coordinators.map((e, i) => (
                <p key={i} className='rule'>
                  {i + 1}. {e}
                </p>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Event;
