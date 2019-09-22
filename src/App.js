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



const TypesOfFruits = ()=>{
	return(
		<ul>
			<li>Mango</li>
			<li>Banana</li>
			<li>Apple</li>
			<li>Orange</li>
			<li>Pomegranate</li>
			<li>WildOclose</li>
		</ul>
	);
}

const Fruits = ()=>{
	return(
		<div>
			<h3>Types Of Fruits: </h3>
			<TypesOfFruits />
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
				<h1>Types Of Food:</h1>
				<Fruits/>
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
				<h1 className="parentComponent">I am the Parent Element</h1>
				<ChildComponent/>	
			</div>
			);
	}
};


// export default App;
export default ParentComponent;