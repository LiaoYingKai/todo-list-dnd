import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import FontIcon from '../font-icon';
import Checkbox from '../checkbox';
import './style.scss';
const propTypes = {};

const { IconTypeEnums } = FontIcon;
const {
	PEN,
	EDIT,
	SOLID_STAR,
	LINE_STAR,
	CALENDAR,
	FILE,
	COMMENT,
} = IconTypeEnums;

function Todo() {
	const [isAdd, setIsAdd] = useState(false);

	function _renderContentItem(icon, title, content) {
		return (
			<div className="todo_content-tem">
				<div></div>
				<div></div>
			</div>
		);
	}

	function _renderAdd() {
		return (
			<div
				className="todo__add"
				onClick={() => {setIsAdd(true);}}
			>
				+ Add Task
			</div>
		);
	}
	function _renderForm() {
		return (
			<React.Fragment>
				<div className="todo__title">
					<div>
						<Checkbox/>
						<input className="todo__title-input" placeholder="Type Something Here…"></input>
					</div>
					<div>
						<FontIcon type={LINE_STAR}/>
						<FontIcon
							type={PEN}
							color={FontIcon.ColorEnums.LIGHT_BLUE}
						/>
					</div>
				</div>
				<div className="todo__content">
					<FontIcon type={CALENDAR}/>
					<FontIcon type={FILE}/>
					<FontIcon type={COMMENT}/>
				</div>
				<div className="todo__footer">
					<Button
						type={Button.TypeEnums.CANCAL}
						onClick={() => {setIsAdd(false);}}
					> Cancel </Button>
					<Button> Add </Button>
				</div>
			</React.Fragment>
		);
	}

	return (
		<div className="todo">
			{isAdd ? _renderForm() : _renderAdd()}
		</div>
	);
}

Todo.propTypes = propTypes;

export default Todo;
