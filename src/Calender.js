import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';


const CurrentDate = (props)=>{
	return(
		<h2>The current date is: {props.date}</h2>
		// <h2>{props.date}</h2>

	);
}

class Calender extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<CurrentDate date={Date()} />
		);
	}
}

export default Calender;