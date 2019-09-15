import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';
import Guests from './components/Guests/Guests';
import Contact from './components/Contact/Contact';
import Sponsors from './components/Sponsors/Sponsors';
import User from './components/User/User';
import LoggedIn from './LoggedIn';		
import Error404 from './components/Error404/Error404'


class App extends Component {

	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						{/* <Route path="/onBoarding" component={OnBoarding} /> */}
						<LoggedIn exact path="/" component={HomePage} />
						{/* <LoggedIn path="/events/:category" component={Events} />*/}
						<LoggedIn path="/guestlectures" component={Guests} />
						<LoggedIn path="/contact" component={Contact} />
						<LoggedIn path="/about" component={AboutUs} />
						<LoggedIn path="/sponsors" component={Sponsors} />
						<LoggedIn path="/user" component={User} /> 
						<LoggedIn component = {Error404} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
		