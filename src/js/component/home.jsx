import React from "react";

export default class home extends React.Component{
	
	constructor(){
		super();
		this.state = {
			clicker: null
		};
	}
	
	render(){
		console.log(this.state)
		let redVariable = '';
		if(this.state.clicker == 'red') redVariable = 'selected';
		let yellowVariable = '';
		if(this.state.clicker == 'yellow') yellowVariable = 'selected';
		let greenVariable = '';
		if(this.state.clicker == 'green') greenVariable = 'selected';

		return <div>
			<div id="trafficColors"></div>
			<div id="boxbox">
				<div className={"red light "+redVariable} onClick={() => this.setState({ clicker: 'red'})}></div>
				<div className={"yellow light "+yellowVariable} onClick={() => this.setState({ clicker: 'yellow'})}></div>
				<div className={"green light "+greenVariable} onClick={() => this.setState({ clicker: 'green'})}></div>
			</div>
		</div>
	}
}
