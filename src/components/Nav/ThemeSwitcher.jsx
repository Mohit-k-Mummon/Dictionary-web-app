import React, { useState, useEffect } from 'react';

import { ReactComponent as MoonIcon } from '../../assets/icon-moon.svg';

const ThemeSwitcher = () => {
	// TOGGLE STATES START
	const [lightIsChecked, setLightIsChecked] = useState(false);
	const [darkIsChecked, setDarkIsChecked] = useState(false);

	// helper constant
	const documentClassList = document.documentElement.classList;

	const onLightCheckedHandler = () => {
		// Fallback code for no :has() support
		if (documentClassList.contains('dark')) {
			documentClassList.remove('dark');
		}
		documentClassList.add('light');

		setLightIsChecked(true);
		setDarkIsChecked(false);

		localStorage.setItem('themePreference', 'light');
	};

	const onDarkCheckedHandler = () => {
		// Fallback code for no :has() support
		if (documentClassList.contains('light')) {
			documentClassList.remove('light');
		}
		documentClassList.add('dark');

		setLightIsChecked(false);
		setDarkIsChecked(true);

		localStorage.setItem('themePreference', 'dark');
	};

	const onClickLight = () => {
		const theme = localStorage.getItem('themePreference');
		if (theme === 'light') {
			onDarkCheckedHandler();
		}
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
							onClick={onClickLight}
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
	);
};

export default ThemeSwitcher;
