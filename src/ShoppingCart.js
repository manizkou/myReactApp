import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import PropTypes from 'prop-types';

const Items = (props)=>{
	return(
		<h4>Current Quantity Of Items in Cart: {props.quantity}</h4>
	);
};


Items.propTypes = {
	quantity: PropTypes.number.isRequired
};

Items.defaultProps = {
	quantity: 0
};


class ShoppingCart extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<Items />
		);
	}
};

export default ShoppingCart;