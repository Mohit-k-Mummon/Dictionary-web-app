import React from 'react';
import './App.css';

import Nav from './components/Nav/Nav';
import SearchBar from './components/SearchBar/SearchBar';
import MainContent from './components/MainContent/MainContent';

function App() {
	return (
		<React.Fragment>
			<Nav />
			<SearchBar />
			<MainContent />
		</React.Fragment>
	);
}

export default App;
