import React, { Component } from 'react'
import GrandChildComponent from './GrandChildComponent'

class ChildComponent extends Component {
	render() {
		return (
			<>
				<h2>Child Component</h2>
				<GrandChildComponent tech='JavaScript' bgColor='red' />
				<GrandChildComponent tech='React.js' bgColor='green' />
				<GrandChildComponent tech='HTML' bgColor='grey' />
				<GrandChildComponent tech='CSS' bgColor='blue' />
				<GrandChildComponent tech='Bootstrap' bgColor='yellow' />
			</>
		)
	}
}

export default ChildComponent

/* 
	Fragments: <></>
*/