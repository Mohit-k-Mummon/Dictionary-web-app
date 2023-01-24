import React from 'react';
import './App.css';

import Nav from './components/Nav/Nav';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
	return (
		<React.Fragment>
			<Nav />
			<SearchBar />
		</React.Fragment>
	);
}

export default App;
