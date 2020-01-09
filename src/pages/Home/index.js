import React, { useState, } from 'react';
import reactIcon from '../../icon/react-icon.png';
import Header from '../../components/header';
import './style.scss';
import Checkbox from '../../components/checkbox';

function Home() {
	const [check, setCheck] = useState(false);

	return (
		<div className="home">
			<Header/>
			<img src={reactIcon}></img>
			<div>
				Hello World!!!
			</div>
			<Checkbox isCheck={check} onChange={() => {setCheck(!check);}}/>
		</div>
	);
}

export default Home;
