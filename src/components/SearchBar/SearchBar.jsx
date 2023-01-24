import React from 'react';

import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';

const SearchBar = () => {
	return (
		<form className='searchbar container' action=''>
			<input className='searchbar__input' type='text' maxLength={'255'} />
			<button className='searchbar__btn'>
				<SearchIcon />
			</button>
		</form>
	);
};

export default SearchBar;
