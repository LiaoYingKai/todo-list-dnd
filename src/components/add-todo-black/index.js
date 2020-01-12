import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
	onClick: PropTypes.func,
};

const defaultProps = {
	onClick: () => {},
};

function AddTodoBlock({ onClick }) {
	return (
		<div
			className="todo__add"
			onClick={onClick}
		>
			+ Add Task
		</div>
	);
}

AddTodoBlock.propTypes = propTypes;
AddTodoBlock.defaultProps = defaultProps;

export default AddTodoBlock;
