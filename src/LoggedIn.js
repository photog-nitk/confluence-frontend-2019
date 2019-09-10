import React from 'react';
import { Route } from 'react-router-dom';

// import Nav

const LoggedIn = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={matchProps => (
			<div>

				{/* <Nav /> */}
				<Component {...matchProps} />
				
			</div>
		)}
	/>
);
		
export default LoggedIn;