import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';


class StatefulComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: "Manish"
		};
	}

	render(){
		return(
			<div>
				<h1>Hello there {this.state.name}! </h1>
			</div>
		);
	}
};

export default StatefulComponent;