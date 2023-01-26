import React, { useState, useEffect } from 'react';
import DefinitionListItem from './DefinitionListItem';

const Definition = props => {
	// Has Synonyms State, state to see if synonyms array is empty
	const [hasSynonyms, setHasSynonyms] = useState(false);

	// function to check if synonyms array is empty
	useEffect(() => {
		setHasSynonyms(false);
		if (props.meaning.synonyms.length !== 0) {
			setHasSynonyms(true);
		}
	}, [props.meaning.synonyms]);

	// Synonyms Element helper const
	const synonyms = (
		<div className='synonyms'>
			<p>Synonyms</p>
			<a href='https://www.google.com' target={'_blank'} rel='noreferrer'>
				{props.meaning.synonyms[0]}
			</a>
		</div>
	);

	console.log(props.meaning.definitions);
	// Mapping objects in definitions array to a list item
	const list = props.meaning.definitions
		.map(obj => {
			return { ...obj, id: Math.random() * 10 };
		})
		.map(obj => <DefinitionListItem key={obj.id} obj={obj} />);

	return (
		<div className='definition'>
			<div className='part-of-speech'>
				<p>{props.meaning.partOfSpeech}</p>
			</div>

			<div className='meaning'>
				<h2>Meaning</h2>
				<ul className='list-container'>{list}</ul>
			</div>

			<div className='synonyms-antonyms'>{hasSynonyms && synonyms}</div>
		</div>
	);
};

export default Definition;
