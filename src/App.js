import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="helloReact">
//       Hello React!
//     </div>
//   );
// }

const ChildComponent = ()=>{
	return(
		<div>
			<h5 className="childComponent">I am a Child Compnent</h5>
		</div>
		);
	};

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

const List = (props)=>{
	return(
		<p>{props.tasks.join(", ")}</p>
	);
}


class ToDo extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
			<h4>
				Today
			</h4>
			<List tasks={["Javascript", "React"]}/>
			<h4>
				Tomorrow
			</h4>
			<List tasks={["CodeIgnitor","Ajax"]}/>
			</div>
		);
	}
}
class ParentComponent extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<Calender/>
				<h1 className="parentComponent">I am the Parent Element</h1>
				<ChildComponent/>
				<ToDo />
				<TypesOfFoods />	
			</div>
			);
	}
};


// export default App;
export default ParentComponent;