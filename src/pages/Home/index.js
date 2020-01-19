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
	const todos = [
		{
			title: 'test',
			file: 'aa',
			date: 'aa',
			comment: 'aa',
			statue: {
				isImportant: true,
				isDone: true,
			}
		},
		{
			title: 'test2',
			file: 'bb',
			date: 'aba',
			comment: '',
			statue: {
				isImportant: false,
				isDone: false,
			}
		},
	];
	const [isAdd, setIsAdd] = useState(false);
	// const [todos, setTodos] = useState([]);

	function _handleAddTodo() {
		// TODO add function
		console.log('add');
	}

	return (
		<div className="home">
			<Header/>
			<div className="home__content">
				<div className="home__add-btn">
					{isAdd ? 
						<Todo
							onClose={() => {setIsAdd(false);}}
							onClickAdd={_handleAddTodo}
						/> :
						<AddTodoBlock onClick={() => {setIsAdd(true);}}/>
					}
				</div>
				<div className="home__list">
					{
						todos.map((todo, index) => {
							return (
								<TodoBar todo={todo} key={index}/>
							);
						})
					}
				</div>
				<p>
					{todos.filter(todo => !todo.statue.isDone).length} tasks left
				</p>
			</div>
			
		</div>
	);
}

export default Home;
