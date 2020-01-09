import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
const propTypes = {
	isCheck: PropTypes.bool,
	onChange: PropTypes.func,
};
const defaultProps = {
	isCheck: false,
	onChange: () => {},
};

function Checkbox({
	isCheck,
	onChange
}) {

	return (
		<React.Fragment>
			<input type="checkbox" id="checkbox" checked={isCheck} onChange={onChange}></input>
			<label htmlFor="checkbox" className="checkbox"></label>
		</React.Fragment>
		
	);
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
