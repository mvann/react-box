import React, { Component } from 'react';
import './Layout.css';

class Layout extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			id: this.props.content.id,
			//Only the id of the boxes will be passed into the Component. The actual
			//boxes will need to be retrieved from the database here in the constructor
			//or in componentWillMount.
			columns: this.props.content.columns
		};
	}

	getColumns() {
		let columns;
		if (this.state.columns.length > 0)
		{
			columns = this.state.columns.map(column => {
				return (<Column key={column.order} content={column} />);
			});
			return (columns);
		}
		return ("Box: No Content");
	}

	render() {
		return (
			<div className="Layout">
				{this.getColumns()}
			</div>
		);
	}
}

class Column extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: this.props.content.boxes
		}
	}

	getContainers() {
		let containers;
		if (this.state.boxes.length > 0)
		{
			containers = this.state.boxes.map(box => {
				return (<Container key={box.order} content={box} />);
			});
			return (containers);
		}
		return ("Column: No Content");
	}

	render() {
		return (
			<div className="Column">
				{this.getContainers()}
			</div>
		);
	}
}

class Container extends Component {
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
			<div className="Container">
				{this.getLis()}
			</div>
		);
	}
}

// class ContainerRow extends Component {
// 	render() {
//
// 	}
// }

export default Layout;















//
