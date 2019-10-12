import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';

const NonCitrus = ()=>{
	return(
		<div>
		<h2>Non-Citrus:</h2>
		<ul>
			<li>Apples</li>
			<li>Blueberries</li>
			<li>Strawberries</li>
			<li>Bananas</li>
		</ul>
		</div>
	);
};

const Citrus = ()=>{
	return(
		<div>
		<h2>Citrus:</h2>
		<ul>
			<li>Lemon</li>
			<li>Lime</li>
			<li>Orange</li>
			<li>GrapeFruit</li>
		</ul>
		</div>
	);
};


// const TypesOfFruits = ()=>{
// 	return(
// 		<ul>
// 			<li>Mango</li>
// 			<li>Banana</li>
// 			<li>Apple</li>
// 			<li>Orange</li>
// 			<li>Pomegranate</li>
// 			<li>WildOclose</li>
// 		</ul>
// 	);
// }

const Fruits = ()=>{
	return(
		<div>
			<h1>Fruits: </h1>
			<NonCitrus/>
			<Citrus/>
		</div>
		);
};

const Vegetables = ()=>{
	return(
		<div>
			<h1>Vegetables:</h1>
			<ul>
				<li>Brussel Sprouts</li>
				<li>Broccoli</li>
				<li>Squash</li>
			</ul>
		</div>
	);
};

class TypesOfFoods extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<h2>Types Of Food:</h2>
				<Fruits />
				<Vegetables />
			</div>
			);
	}
};


export default TypesOfFoods;