import React, { Component } from 'react';

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState(prevState => ({
			counter: prevState.counter + 1
		}));
	}
	render() {
		return (
			<div className="maincol">
				<h1>Button</h1>
				<div className="content">
					<button onClick={this.handleClick}>
						Clicked {this.state.counter} times
					</button>
				</div>
			</div>
		);
	}
}

export default Button;
