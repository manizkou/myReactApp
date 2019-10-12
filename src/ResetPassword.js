import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import ReturnTempPassword from './ReturnTempPassword.js';


class ResetPassword extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
			<h2>Reset Password</h2>
          	<h3>We have generated a new temporary password for you.</h3>
          	<h3>Please reset this password from your account settings ASAP.</h3>
          	<ReturnTempPassword tempPassword="HellSingh"/>
          	</div>
		);
	}
};

export default ResetPassword;