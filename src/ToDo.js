import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';


const List = (props)=>{
	return(
		<p>{props.tasks.join(", ")}</p>
	);
}

List.defaultProps = {tasks:["Play Hard","Work Hard"]};

class ToDo extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
			<h2>To do list:</h2>
			<h4>
				Today
			</h4>
			<List tasks={["Javascript", "React"]} />
			<h4>
				Tomorrow
			</h4>
			<List tasks={["CodeIgnitor","Ajax"]}/>

			<h4>Day After tomorrow</h4>
			<List />
			</div>
		);
	}
}



export default ToDo;