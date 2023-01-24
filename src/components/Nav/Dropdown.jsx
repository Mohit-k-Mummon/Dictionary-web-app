import React, { useEffect, useCallback } from 'react';

const Dropdown = props => {
	// TYPOGRAPHY STATES START

	// helper constant
	const documentClassList = document.documentElement.classList;

	// Sans-serif clicked in drop down
	const onSansSerifCheckedHandler = useCallback(() => {
		if (documentClassList.contains('serif')) {
			documentClassList.remove('serif');
		}
		if (documentClassList.contains('mono')) {
			documentClassList.remove('mono');
		}
		documentClassList.add('sans-serif');
		props.onClickFont('sans serif');

		localStorage.setItem('typographyPreference', 'sans-serif');
	}, [documentClassList, props]);

	// Serif clicked in drop down
	const onSerifCheckedHandler = useCallback(() => {
		if (documentClassList.contains('sans-serif')) {
			documentClassList.remove('sans-serif');
		}
		if (documentClassList.contains('mono')) {
			documentClassList.remove('mono');
		}
		documentClassList.add('serif');
		props.onClickFont('serif');

		localStorage.setItem('typographyPreference', 'serif');
	}, [documentClassList, props]);

	// Mono clicked in drop down
	const onMonoCheckedHandler = useCallback(() => {
		if (documentClassList.contains('serif')) {
			documentClassList.remove('serif');
		}
		if (documentClassList.contains('sans-serif')) {
			documentClassList.remove('sans-serif');
		}
		documentClassList.add('mono');
		props.onClickFont('mono');

		localStorage.setItem('typographyPreference', 'mono');
	}, [documentClassList, props]);

	// RETRIEVING FONT PREFERENCE FROM LOCAL STORAGE ON PAGE LOAD
	useEffect(() => {
		const storedFontPreference = localStorage.getItem('typographyPreference');

		if (storedFontPreference) {
			if (storedFontPreference === 'san-serif') {
				onSansSerifCheckedHandler();
			} else if (storedFontPreference === 'serif') {
				onSerifCheckedHandler();
			} else if (storedFontPreference === 'mono') {
				onMonoCheckedHandler();
			}
		} else {
			onSansSerifCheckedHandler();
		}
	}, [onSansSerifCheckedHandler, onSerifCheckedHandler, onMonoCheckedHandler]);

	return (
		<ul className={`${'nav__actions-dropdown'} ${props.active ? 'active' : ''}`}>
			<li onClick={onSansSerifCheckedHandler}>Sans Serif</li>
			<li onClick={onSerifCheckedHandler}>Serif</li>
			<li onClick={onMonoCheckedHandler}>Mono</li>
		</ul>
	);
};

export default React.memo(Dropdown);
