import React from 'react';
import ReactDom from 'react-dom';
import {Component} from 'react';


class ReturnTempPassword extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
            	<p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
            </div>
		);
	}
};

export default ReturnTempPassword;