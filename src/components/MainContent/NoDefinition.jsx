import React from 'react';

const NoDefinition = () => {
	return (
		<main className='no-definition container'>
			<p className='emoji'>😕</p>
			<h1 className='heading'>No Definitions Found</h1>
			<p className='tagline'>
				Sorry pal, we couldn't find definitions for the word you were looking for. You can
				try the search again at a later time or head to the web instead.
			</p>
		</main>
	);
};

export default NoDefinition;
