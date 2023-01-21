import React, { useState, useEffect } from 'react';

import { ReactComponent as NavIcon } from '../assets/logo.svg';
import { ReactComponent as MoonIcon } from '../assets/icon-moon.svg';

const Nav = () => {
	// TOGGLE STATES START
	const [lightIsChecked, setLightIsChecked] = useState(false);
	const [darkIsChecked, setDarkIsChecked] = useState(false);

	const onLightCheckedHandler = () => {
		// Fallback code for no :has() support
		document.documentElement.className = 'light';

		setLightIsChecked(true);
		setDarkIsChecked(false);

		localStorage.setItem('themePreference', 'light');
	};

	const onDarkCheckedHandler = () => {
		// Fallback code for no :has() support
		document.documentElement.className = 'dark';

		setLightIsChecked(false);
		setDarkIsChecked(true);

		localStorage.setItem('themePreference', 'dark');
	};

	// Retrieving theme preference from localStorage when page loads
	useEffect(() => {
		const storedThemePreference = localStorage.getItem('themePreference');

		if (storedThemePreference) {
			if (storedThemePreference === 'light') {
				onLightCheckedHandler();
			}
			if (storedThemePreference === 'dark') {
				onDarkCheckedHandler();
			}
		} else {
			onLightCheckedHandler();
		}
	}, []);

	return (
		<nav className='nav'>
			<div className='nav__icon'>
				<NavIcon />
			</div>
			<div className='nav__actions'>
				<div className='nav__actions-font-selector'>{`Sans Serif`}</div>
				<div className='theme-switcher-wrapper'>
					<div className='toggler-wrapper'>
						<form action='' className='theme-switcher'>
							<fieldset>
								<legend className='visually-hidden'>Pick a theme</legend>
								<label className='visually-hidden' htmlFor='light'>
									light theme
								</label>
								<input
									onChange={onLightCheckedHandler}
									type='radio'
									name='theme'
									id='light'
									checked={lightIsChecked}
								/>
								<label className='visually-hidden' htmlFor='white'>
									dark theme
								</label>
								<input
									onChange={onDarkCheckedHandler}
									type='radio'
									name='theme'
									id='dark'
									checked={darkIsChecked}
								/>
							</fieldset>
						</form>
					</div>
					<MoonIcon />
				</div>
			</div>
		</nav>
	);
};

export default Nav;
