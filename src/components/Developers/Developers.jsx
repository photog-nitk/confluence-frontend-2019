import React, { Component } from 'react';
import CardList from "../CardList/CardList"

class Developers extends Component {
    
    constructor(){
        super();

        this.state = {
            developers : []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then(users => this.setState({developers : users}));
    }


	render() {

        
		return (
			<div>
                <h1 style={{fontFamily: 'Saira Stencil One' , textAlign : 'center', fontSize: '62px' , color: '#0ccac4',background:'to left, rgba(7,27,82,1) 0%, rgba(0,128,128,1) 100%'}}>Developers</h1>
                <CardList developers = {this.state.developers}/>
			</div>
		);
	}
}


export default Developers;