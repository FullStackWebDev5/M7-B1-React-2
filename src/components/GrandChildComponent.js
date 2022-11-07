import React, { Component } from 'react'

class GrandChildComponent extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { bgColor, tech } = this.props
		return (
			<p style={{ backgroundColor: bgColor }}>I love {tech}!</p>
		)
	}
}

export default GrandChildComponent