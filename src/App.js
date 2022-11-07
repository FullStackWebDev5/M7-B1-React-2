import React, { Component } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent'

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>App</h1>
				<ChildComponent />
			</div>
		);
	} 
}

export default App;

/*
	Props: Data sent from the parent component down to the child component (One-way data-binding)
*/
