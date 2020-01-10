import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import './style.scss';
const propTypes = {};

function Todo() {
	return (
		<div className="todo">
			<div>title</div>
			<div>content</div>
			<div className="todo__footer">
				<Button type={Button.TypeEnums.CANCAL}> Cancel </Button>
				<Button> Add </Button>
			</div>
			
			
		</div>
	);
}

Todo.propTypes = propTypes;

export default Todo;
