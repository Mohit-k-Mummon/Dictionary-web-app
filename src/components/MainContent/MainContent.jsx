import React from 'react';
import { ReactComponent as PlayButton } from '../../assets/icon-play.svg';

import Definition from './Definition';

const MainContent = props => {
	// Helper Constant
	const word = props.wordData[0];
	// Here word is referencing the object from our initial array

	// const transformedObj = word.meanings.map(obj => {
	// 	return { ...obj, id: Math.random() * 10 };
	// });
	// console.log(transformedObj);

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

	return (
		<main className='main-content container'>
			<header className='main-content__header'>
				<div className='word-container'>
					<h1 className='word'>{word.word}</h1>
					<p className='phonetic'>{word.phonetic}</p>
				</div>
				<button className='play-btn'>
					<PlayButton />
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
