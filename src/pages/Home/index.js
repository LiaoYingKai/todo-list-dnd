import React, { Component, } from 'react';
import reactIcon from '../../icon/react-icon.png';
import Header from '../../components/header';
import './style.scss';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<Header/>
				<img src={reactIcon}></img>
				<div>
					Hello World!!!
				</div>
			</div>
		);
	}
}

export default Home;
