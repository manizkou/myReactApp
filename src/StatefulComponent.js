import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';


class StatefulComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name : "StatefulComponent",
			property : "I have states"
		};
	}

	render(){

		const property = this.state.property;
		
		return(
			<div>
				<h1>Hello there this is {this.state.name}! </h1>
				<h4>Property: {property}</h4>
			</div>
		);
	}
};

export default StatefulComponent;