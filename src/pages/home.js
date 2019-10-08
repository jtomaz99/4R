import React, { Component } from 'react';
import axios from 'axios';

import './main.css';
import logo from '../assets/logo.svg';

export default class Home extends Component {
    constructor(props) {
        super(props); 
		
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
	
	handleLogoutClick(){
		axios
			.delete("https://fourr-api.herokuapp.com/logout", { withCredentials:true })
			.then(response => {
				this.props.handleLogout();
				this.props.history.push("../");
			}).catch(error => {
				console.log("erro logout",error)
			})		
		
	}
	
	componentDidMout(){
		this.props.loginStatus();
	}
	
    render () {
        return(
            <div>
            <img src={logo} alt="FOURR"/>
            <h1>Bem vindo, {this.props.departamento.nome}</h1>
			<button onClick={() => this.handleLogoutClick()}>Logout</button>
            </div>
        );
    }
}
