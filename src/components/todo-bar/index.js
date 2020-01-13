import React from 'react';
import PropTypes from 'prop-types';
import FontIcon from '../font-icon';
import Checkbox from '../checkbox';
import './style.scss';

const propTypes = {
	todo: PropTypes.object,
	onClick: PropTypes.func,
};
const defaultProps ={
	todo: {},
	onClick: () => {},
};

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

function TodoBar({
	todo,
	onClick,
}) {
	return (
		<div className="todo-bar">
			<div className="todo-bar__title">
				<div>
					<Checkbox/>
					<input className="todo-bar__title-input" placeholder="Type Something Here…"></input>
				</div>
				<div>
					<FontIcon type={LINE_STAR}/>
					<FontIcon
						type={PEN}
						color={FontIcon.ColorEnums.BLACK}
					/>
				</div>
			</div>
			<div className="todo-bar__icon">
				<FontIcon type={CALENDAR}/>
				<span>2020/01/13</span>
				<FontIcon type={FILE}/>
				<FontIcon type={COMMENT}/>
			</div>
		</div>
	);
}

TodoBar.propTypes = propTypes;
TodoBar.defaultProps = defaultProps;

export default TodoBar;
