import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import FontIcon from '../font-icon';
import Checkbox from '../checkbox';
import DatePicker from '../date-picker';
import './style.scss';
const propTypes = {
	onClose: PropTypes.func,
	onClickAdd: PropTypes.func,
	todo: PropTypes.object,
};

const defaultProps = {
	onClose: () => {},
	onClickAdd: () => {},
	todo: {},
};

const { IconTypeEnums } = FontIcon;
const {
	PEN,
	LINE_STAR,
	CALENDAR,
	FILE,
	COMMENT,
} = IconTypeEnums;

function Todo({
	onClose,
	onClickAdd,
	todo,
}) {
	const [title, setTitle] = useState(todo.title || '');
	const [date, setDate] = useState(todo.date || '') ;
	const [time, setTime] = useState(getTime());
	const [file, setFile] = useState(todo.setDate || '');
	const [comment, setComment] = useState(todo.comment || '');

	function _handleAdd() {
		console.log(date, time);
		onClose();
		onClickAdd({
			title: title,
			date: date,
			time: time,
			file: file,
			comment: comment,
			statue: {
				isImportant: false,
				isDone: false,
			}
		});
	}

	function getTime() {
		const today = new Date();

		return `${today.getHours()}:${today.getMinutes()}`;
	}
	function _renderDate() {
		return (
			<div className="todo__content-item">
				<FontIcon type={CALENDAR}/>
				<div>
					<p>Deadline</p>
					<DatePicker
						onSelect={(date) => {setDate(date);}}
						defaultValue={'2019/11/11'}
					/>
					<input
						type="time"
						className="todo__content-item--time"
						placeholder="hh:mm"
						onChange={(event) => {setTime(event.target.value);}}
						value={time}
					/>
				</div>
			</div>
		);
	}

	function _renderFile() {
		return (
			<div className="todo__content-item">
				<FontIcon type={FILE}/>
				<div>
					<p>File</p>
					<label className="custom-file-upload">
						<input type="file"/>
						+
					</label>
				</div>
			</div>
		);
	}

	function _renderComment() {
		return (
			<div className="todo__content-item">
				<FontIcon type={COMMENT}/>
				<div>
					<p>Comment</p>
					<textarea
						placeholder="Type your memo here…"
						value={comment}
						onChange={(event) => {setComment(event.target.vlaue);}}
					></textarea>
				</div>
			</div>
		);
	}
	return (
		<div className="todo">
			<React.Fragment>
				<div className="todo__title">
					<div>
						<Checkbox/>
						<input
							className="todo__title-input"
							placeholder="Type Something Here…"
							value={title}
							onChange={(event) => {setTitle(event.target.value);}}
						/>
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
					{_renderDate()}
					{_renderFile()}
					{_renderComment()}
				</div>
				<div className="todo__footer">
					<Button
						type={Button.TypeEnums.CANCAL}
						onClick={onClose}
					> Cancel </Button>
					<Button
						onClick={_handleAdd}
					> Add </Button>
				</div>
			</React.Fragment>
		</div>
	);
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default Todo;
