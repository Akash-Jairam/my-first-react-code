// Import the React and ReactDOM libaries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
	return 'Click on me!';
}

// Create a react component
const App = () => {

	const buttonText ={text: 'CLick on me'};
	const labelText = "Enter name:";
	return (
		<div>
			<label className="label" htmlFor="name">{labelText}</label>
			<input id="name" type="text"/>
			<button style={{backgroundColor:"blue",color:"white",}}>{buttonText.text}</button>

		</div>
	);
};

//Take the react component and display 
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
