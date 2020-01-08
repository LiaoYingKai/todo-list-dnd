import React, { useState } from 'react';
import cx from 'classnames';
import './style.scss';

const list = ['My Tasks', 'In Progress', 'Completed'];

function LayoutHeader() {

	const [id, setId ] = useState(0);

	function _handelClickItem(index) {
		setId(index);
	}

	return (
		<div className="header">
			<ul>
				{
					list.map((item, index) => (
						<li
							key={index}
							className={cx({ 'active' : id === index })}
							onClick={() => {_handelClickItem(index);}}
						> {item} </li>
					))
				}
			</ul>
		</div>
	);
}

export default LayoutHeader;
