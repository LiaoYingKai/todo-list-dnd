import React, { useState, } from 'react';
import Header from '../../components/header';
import './style.scss';
import Todo from '../../components/todo';
import AddTodoBlock from '../../components/add-todo-black';

function Home() {
	const [isAdd, setIsAdd] = useState(false);

	return (
		<div className="home">
			<Header/>
			<div className="home__content">
				{isAdd ? 
					<Todo onClickCancel={() => {setIsAdd(false);}}/> :
					<AddTodoBlock onClick={() => {setIsAdd(true);}}/>
				}
			</div>
		</div>
	);
}

export default Home;
