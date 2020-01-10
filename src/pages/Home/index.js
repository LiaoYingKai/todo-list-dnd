import React, { useState, } from 'react';
import Header from '../../components/header';
import './style.scss';
import Todo from '../../components/todo';

function Home() {

	return (
		<div className="home">
			<Header/>
			<div className="home__content">
				<Todo/>
			</div>
		</div>
	);
}

export default Home;
