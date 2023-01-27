import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav/Nav';
import SearchBar from './components/SearchBar/SearchBar';
import MainContent from './components/MainContent/MainContent';
import NoDefinition from './components/MainContent/NoDefinition';

const DEFAULT_STATE = [
	{
		word: 'keyboard',
		phonetic: '/ˈkiːbɔːd/',
		phonetics: [
			{ text: '/ˈkiːbɔːd/', audio: '' },
			{ text: '/ˈkiːbɔːd/', audio: '' },
			{
				text: '/ˈkibɔɹd/',
				audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3',
				sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=1755168',
				license: {
					name: 'BY-SA 3.0',
					url: 'https://creativecommons.org/licenses/by-sa/3.0',
				},
			},
		],
		meanings: [
			{
				partOfSpeech: 'noun',
				definitions: [
					{
						definition:
							'(etc.) A set of keys used to operate a typewriter, computer etc.',
						synonyms: [],
						antonyms: [],
					},
					{
						definition:
							'A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.',
						synonyms: [],
						antonyms: [],
					},
					{
						definition:
							'A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.',
						synonyms: [],
						antonyms: [],
					},
				],
				synonyms: ['electronic keyboard'],
				antonyms: [],
			},
			{
				partOfSpeech: 'verb',
				definitions: [
					{
						definition: 'To type on a computer keyboard.',
						synonyms: [],
						antonyms: [],
						example: 'Keyboarding is the part of this job I hate the most.',
					},
				],
				synonyms: [],
				antonyms: [],
			},
		],
		license: { name: 'CC BY-SA 3.0', url: 'https://creativecommons.org/licenses/by-sa/3.0' },
		sourceUrls: ['https://en.wiktionary.org/wiki/keyboard'],
	},
];

function App() {
	// DICTIONARY API / CURRENT WORD STATE MANAGEMENT
	// Here our word state is an array with one object
	const [word, setWord] = useState(DEFAULT_STATE);

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
