import React, { Component } from 'react'
import './App.css'
// import ChildComponent from './components/ChildComponent'
import Count from './components/Count'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Count />
				{/* <ChildComponent /> */}
			</div>
		);
	} 
}

export default App;

/*
	React components re-render whenever there is a change in
	- Props: Data sent from the parent component down to the child component (One-way data-binding)
	- State: Data which is private to a component

	Note: Earlier, states could only be created in class based components
*/