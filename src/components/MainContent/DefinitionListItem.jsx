import React, { useState, useEffect } from 'react';

const DefinitionListItem = props => {
	// Example property state
	const [hasExample, setHasExample] = useState(false);

	// Checking to see if obj has example property
	useEffect(() => {
		if (props.obj.hasOwnProperty('example')) {
			setHasExample(true);
		}
	}, [props.obj]);

	return (
		<React.Fragment>
			<li className='definition-list-item'>{props.obj.definition}</li>
			{hasExample && <li className='example-list-item'>{props.obj.example}</li>}
		</React.Fragment>
	);
};

export default DefinitionListItem;
