import React, { useState, useEffect, useMemo } from 'react';
import { ReactComponent as PlayIcon } from '../../assets/icon-play.svg';

import Definition from './Definition';

const MainContent = props => {
	// Helper Constant
	const word = props.wordData[0];
	// Here word is referencing the object from our initial array

	// Map each meaning to an Array
	const definitions = word.meanings
		// Adding an id for keying
		.map(obj => {
			return { ...obj, id: Math.random() * 10 };
		})
		.map(meaning => {
			// Here meaning refers to each object in our meanings array
			return <Definition key={meaning.id} meaning={meaning} />;
		});

	// PLAY BUTTON AUDIO LOGIC
	const [hasAudio, setHasAudio] = useState(false);

	const audio = useMemo(() => {
		return new Audio();
	}, []);

	useEffect(() => {
		const audioArray = [];
		word.phonetics.forEach(obj => {
			if (obj.audio !== '') {
				audioArray.push(obj);
			}
		});

		if (audioArray.length !== 0) {
			audio.src = audioArray[0].audio;
			setHasAudio(true);
		} else {
			setHasAudio(false);
		}
	}, [audio, word.phonetics]);

	// Play audio Function
	function playAudio() {
		audio.play();
	}
	// END

	return (
		<main className='main-content container'>
			<header className='main-content__header'>
				<div className='word-container'>
					<h1 className='word'>{word.word}</h1>
					<p className='phonetic'>{word.phonetic}</p>
				</div>
				<button onClick={playAudio} className='play-btn'>
					{hasAudio && <PlayIcon />}
				</button>
			</header>
			{definitions}
			<div className='source'>
				<p>Source</p>
				<a
					href={`https://en.wiktionary.org/wiki/${word.word}`}
					target='_blank'
					rel='noopener noreferrer'
				>
					{`https://en.wiktionary.org/wiki/${word.word}`}
				</a>
			</div>
		</main>
	);
};

export default MainContent;
