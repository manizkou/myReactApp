import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponent.js';
import ToDo from'./ToDo.js';
import TypesOfFoods from'./TypesOfFoods.js';
import Calender from'./Calender.js';




// function App() {
//   return (
//     <div className="helloReact">
//       Hello React!
//     </div>
//   );
// }

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