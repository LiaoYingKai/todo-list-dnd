import React from 'react';
import PropTypes from 'prop-types';
import FontIcon from '../font-icon';
import Checkbox from '../checkbox';
import cx from 'classnames';
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
	const {
		title,
		file,
		date,
		comment,
		statue = {},
	} = todo;
	const {
		isImportant = false,
		isDone = false,
	} = statue;

	return (
		<div className={cx("todo-bar", { "todo-bar--important": isImportant, })} onClick={onClick} >
			<div className="todo-bar__title">
				<div>
					<Checkbox isCheck={isDone}/>
					<div className={cx("todo-bar__title-text", { "todo-bar__title-text--checked" : isDone })}>{title}</div>
				</div>
				<div>
					{isImportant ? <FontIcon type={SOLID_STAR} color={FontIcon.ColorEnums.DEEP_ORANGE}/> : <FontIcon type={LINE_STAR}/>}
					<FontIcon type={PEN} color={FontIcon.ColorEnums.BLACK}/>
				</div>
			</div>
			<div className="todo-bar__icon">
				{ date ? <span> <FontIcon type={CALENDAR}/> 2020/01/13</span> : null }
				{ file ? <FontIcon type={FILE}/> : null}
				{ comment ? <FontIcon type={COMMENT}/> : null}
			</div>
		</div>
	);
}

TodoBar.propTypes = propTypes;
TodoBar.defaultProps = defaultProps;

export default TodoBar;
