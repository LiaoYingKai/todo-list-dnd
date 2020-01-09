import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faStar as SolidFaStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as RegularFaStar, faFile, faCalendarAlt, faCommentDots, faEdit } from '@fortawesome/free-regular-svg-icons';
import './style.scss';

const IconTypeEnums = {
	PEN: faPen,
	EDIT: faEdit,
	SOLID_STAR: SolidFaStar,
	LINE_STAR: RegularFaStar,
	CALENDAR: faCalendarAlt,
	FILE: faFile,
	COMMENT: faCommentDots,
};

const ColorEnums = {
	LIGHT_BLUE: 'light-blue',
	DEEP_ORANGE: 'deep-orange',
	BLACK: 'black'
};

const propTypes = {
	type: PropTypes.oneOf(Object.values(IconTypeEnums).concat('')),
	color: PropTypes.oneOf(Object.values(ColorEnums)),
};

const defaultProps = {
	color: ColorEnums.BLACK,
};

function Icon({ type, color }) {
	return (
		<FontAwesomeIcon icon={type} className={`icon--${color}`}/>
	);
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
Icon.IconTypeEnums = IconTypeEnums;
Icon.ColorEnums = ColorEnums;

export default Icon;