import React, { useState } from 'react';

import { ReactComponent as NavIcon } from '../../assets/logo.svg';
import Dropdown from './Dropdown';
import ThemeSwitcher from './ThemeSwitcher';

const Nav = () => {
	// DROPDOWN STATE START
	const [active, setActive] = useState(false);

	const onClickFontSelector = () => {
		if (active) {
			setActive(false);
		} else {
			setActive(true);
		}
	};
	// END

	const [currentFont, setCurrentFont] = useState('sans serif');
	// PULL CURRENT FONT DATA FROM CHILD
	const pullCurrentFont = font => {
		setCurrentFont(font);
	};
	// END

	return (
		<nav className='nav container'>
			<div className='nav__icon'>
				<NavIcon />
			</div>
			<div className='nav__actions'>
				<div onClick={onClickFontSelector} className='nav__actions-font-selector'>
					<p>{`${currentFont}`}</p>
					<Dropdown onClickFont={pullCurrentFont} active={active} />
				</div>
				<ThemeSwitcher />
			</div>
		</nav>
	);
};

export default Nav;
