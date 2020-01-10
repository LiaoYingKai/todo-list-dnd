import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import FontIcon from '../font-icon';
import Checkbox from '../checkbox';
import './style.scss';
const propTypes = {};

function Todo() {
	return (
		<div className="todo">
			<div className="todo__title">
				<div>
					<Checkbox/>
					<input className="todo__title-input" placeholder="Type Something Here…"></input>
				</div>
				<div>
					<FontIcon type={FontIcon.IconTypeEnums.LINE_STAR}/>
					<FontIcon
						type={FontIcon.IconTypeEnums.PEN}
						color={FontIcon.ColorEnums.LIGHT_BLUE}
					/>
				</div>
			</div>
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
