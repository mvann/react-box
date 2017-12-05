import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
	// constructor(props)
	// {
	// 	super(props);
	// 	this.state = {
	// 		content = [];
	// 	};
	// }

	getColumns() {
		let columns;
		if (this.props.content)
		{
			columns = this.props.content.map(content => {
				return (<Column content={content} />);
			});
			return (columns);
		}
		return ("Box: No Content");
	}

	render() {
		return (
			<div className="Box">
				{this.getColumns()}
			</div>
		);
	}
}

class Column extends Component {
	getCells() {
		let cells;
		if (this.props.content)
		{
			cells = this.props.content.map(content => {
				return (<Cell content={content} />);
			});
			return (cells);
		}
		return ("Column: No Content");
	}

	render() {
		return (
			<div className="Column">
				{this.getCells()}
			</div>
		);
	}
}

class Cell extends Component {
	getLis()
	{
		return (
			<ul>
				<li>First Name:{this.props.content.nameFirst}</li>
				<li>Last Name:{this.props.content.nameLast}</li>
			</ul>
		);
	}

	render() {
		return (
			<div className="Cell">
				{this.getLis()}
			</div>
		);
	}
}

export default Box;
