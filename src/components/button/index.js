import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const TypeEnums = {
	OK: 'ok',
	CANCAL: 'cancel',
};

const {
	OK
} = TypeEnums;

const propTypes = {
	type: PropTypes.oneOf(Object.values(TypeEnums)),
	children: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
};

const defaultProps = {
	type: OK,
	onClick: () => {},
};

function Button({
	type,
	children,
	className,
	onClick,
}) {
	const icon = type === OK ? '+' : 'x' ;

	return (
		<button className={cx('button', className, `button--${type}`)} onClick={onClick}>
			{icon}&nbsp;&nbsp;{children}
		</button>
	);
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
Button.TypeEnums = TypeEnums;

export default Button;
