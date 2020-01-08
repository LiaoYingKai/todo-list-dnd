import React from 'react';
import { HashRouter as Router, } from 'react-router-dom';
import LayoutRouter from '../route';

function Layout() {
	return (
		<Router>
			<div className="home-page__content">
				<LayoutRouter/>
			</div>
		</Router>
	);
}

export default Layout;