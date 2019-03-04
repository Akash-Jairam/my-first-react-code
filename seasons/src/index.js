import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
	constructor(props){
		// WE MUST ALWAYS CALL THE SUPER FUNCTION WITHIN THE CONSTRUCTOR
		super(props);

		//This is the only time we do direct assignment
		//to this.state
		this.state = {lat:null, errorMessage:''};
	}

	componentDidMount(){
		console.log("My component was successfully rendered to the screen");
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({lat: position.coords.latitude}),
			err => this.setState({errorMessage:err.message})
		);
	}

	componentDidUpdate(){
		console.log("My component was successfully rerendered");
	}

	render(){
			if (this.state.lat && !this.state.errorMessage) {
				return <SeasonDisplay lat={this.state.lat}/>;
			}

			if (!this.state.lat && this.state.errorMessage) {
				return <div>error: {this.state.errorMessage}</div>;
			}

			return <div>Loading!</div>
	}
}

ReactDOM.render(<App />,document.querySelector('#root'));