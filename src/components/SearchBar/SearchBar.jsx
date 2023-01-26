import React, { useState, useRef } from 'react';

import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';

const SearchBar = props => {
	// ERROR STATE
	const [isAWord, setIsAWord] = useState(true);

	// INPUT REF
	const wordInputRef = useRef();

	// onSUBMIT HANDLER
	function searchWordHandler(event) {
		event.preventDefault();
		const enteredWord = wordInputRef.current.value;

		if (enteredWord.trim().length === 0) {
			setIsAWord(false);
		} else {
			setIsAWord(true);
			props.onFetchWord(enteredWord);
		}
	}

	return (
		<form
			onSubmit={searchWordHandler}
			className={`searchbar container ${isAWord ? '' : 'error-active'}`}
		>
			<input
				className='searchbar__input'
				type='text'
				maxLength={'255'}
				ref={wordInputRef}
				placeholder='Search for any word...'
			/>
			<button className='searchbar__btn'>
				<SearchIcon />
			</button>
			<p className={`searchbar__error ${isAWord ? '' : 'error-active'}`}>
				Whoops, can't be empty...
			</p>
		</form>
	);
};

export default SearchBar;
