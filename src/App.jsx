import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav/Nav';
import SearchBar from './components/SearchBar/SearchBar';
import MainContent from './components/MainContent/MainContent';
import NoDefinition from './components/MainContent/NoDefinition';

function App() {
	// DICTIONARY API / CURRENT WORD STATE MANAGEMENT
	// Here our word state is an array with one object
	const [word, setWord] = useState(null);

	// NO DEFINITION STATE
	const [error, setError] = useState(false);

	// HTTP REQUEST FUNCTION ON FORM SUBMIT
	async function fetchWordHandler(word) {
		try {
			// HTTP REQUEST
			const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

			// ERROR HANDLING
			if (!response.ok) {
				setWord(null);
				setError(true);
				throw new Error('Something went wrong here...');
			}

			// SETTING ERROR STATE TO FALSE
			setError(false);

			// TRANSFORM RESPONSE TO JSON
			const data = await response.json();

			// UPDATE CURRENT WORD STATE WITH JSON OBJECT
			setWord(data);
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<React.Fragment>
			<Nav />
			<SearchBar onFetchWord={fetchWordHandler} />
			{word && !error && <MainContent wordData={word} />}
			{!word && error && <NoDefinition />}
		</React.Fragment>
	);
}

export default App;
