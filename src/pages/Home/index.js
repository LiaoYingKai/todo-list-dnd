import React, { useState, } from 'react';
import Header from '../../components/header';
import './style.scss';
import Todo from '../../components/todo';
import AddTodoBlock from '../../components/add-todo-black';
import TodoBar from '../../components/todo-bar';

const todo = {
	title: '',
	file: '',
	date: '',
	comment: '',
	statue: {
		isImportant: false,
		isDone: false,
	}
};

function Home() {
	const [isAdd, setIsAdd] = useState(false);
	const [todos, setTodos] = useState([]);

	function _handleAddTodo() {
		// TODO add function
		console.log('add');
	}

	return (
		<div className="home">
			<Header/>
			<div className="home__content">
				{isAdd ? 
					<Todo
						onClose={() => {setIsAdd(false);}}
						onClickAdd={_handleAddTodo}
					/> :
					<AddTodoBlock onClick={() => {setIsAdd(true);}}/>
				}
				
				<TodoBar todo={{
					title: 'test',
					file: 'aa',
					date: 'aa',
					comment: 'aa',
					statue: {
						isImportant: true,
						isDone: true,
					}
				}}/>
			</div>
		</div>
	);
}

export default Home;
