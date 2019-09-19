import React, { useContext, useReducer } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';
import Guests from './components/Guests/Guests';
import Contact from './components/Contact/Contact';
import Sponsors from './components/Sponsors/Sponsors';
import Developers from './components/Developers/Developers';
import User from './components/User/User';
import LoggedIn from './LoggedIn';
import Error404 from './components/Error404/Error404';
import Store from './store/store';
import rootReducer from './reducers/rootReducer';

const App = () => {
  const initState = useContext(Store);
  const [state, dispatch] = useReducer(rootReducer, initState);
  console.log(state);
  return (
    <>
      <Store.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/onBoarding" component={OnBoarding} /> */}
            <LoggedIn exact path='/' component={HomePage} />
            {/* <LoggedIn path="/events/:category" component={Events} /> */}
            <LoggedIn path='/guestlectures' component={Guests} />
            <LoggedIn path='/contact' component={Contact} />
            <LoggedIn path='/about' component={AboutUs} />
            <LoggedIn path='/sponsors' component={Sponsors} />
            <LoggedIn path='/user' component={User} />
            <LoggedIn path='/developers' component={Developers} />
            <LoggedIn component={Error404} />
          </Switch>
        </BrowserRouter>
      </Store.Provider>
    </>
  );
};

export default App;
