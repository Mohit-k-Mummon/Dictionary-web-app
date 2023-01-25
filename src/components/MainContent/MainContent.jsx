import React from 'react';
import { ReactComponent as PlayButton } from '../../assets/icon-play.svg';

const MainContent = () => {
	return (
		<main className='main-content container'>
			<header className='main-content__header'>
				<div className='word-container'>
					<h1 className='word'>keyboard</h1>
					<p className='phonetic'>/ˈkiːbɔːd/</p>
				</div>
				<button className='play-btn'>
					<PlayButton />
				</button>
			</header>
			<div className='definition'>
				<div className='part-of-speech'>
					<p>noun</p>
				</div>

				<div className='meaning'>
					<h2>Meaning</h2>
					<ul className='list-container'>
						<li className='definition-list-item'>
							(etc.) A set of keys used to operate a typewriter, computer etc.
						</li>
						<li className='definition-list-item'>
							A component of many instruments including the piano, organ, and
							harpsichord consisting of usually black and white keys that cause
							different tones to be produced when struck.
						</li>
						<li className='definition-list-item'>
							A device with keys of a musical keyboard, used to control electronic
							sound-producing devices which may be built into or separate from the
							keyboard device.
						</li>
					</ul>
				</div>

				<div className='synonyms-antonyms'>
					<div className='synonyms'>
						<p>Synonyms</p>
						<a href='https://www.google.com' target={'_blank'} rel='noreferrer'>
							electronic keyboard
						</a>
					</div>
				</div>
			</div>
			<div className='definition'>
				<div className='part-of-speech'>
					<p>verb</p>
				</div>

				<div className='meaning'>
					<h2>Meaning</h2>
					<ul className='list-container'>
						<li className='definition-list-item'>To type on a computer keyboard.</li>
						<li className='example-list-item'>
							"Keyboarding is the part of this job i hate the most."
						</li>
					</ul>
				</div>
			</div>
			<div className='source'>
				<p>Source</p>
				<a href='http://www.google.com' target='_blank' rel='noopener noreferrer'>
					https://en.wiktionary.org/wiki/keyboard
				</a>
			</div>
		</main>
	);
};

export default MainContent;
