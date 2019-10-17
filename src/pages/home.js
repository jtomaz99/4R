import React, { Component } from 'react';
import axios from 'axios';

import './main.css';
import logo from '../assets/logo.svg';
import teste from '../assets/background.jpg';

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
	
    render () {
        return(
            <div>
				<nav className="navbar-home navbar-light navbar">
					<h1 className="welcome">Bem vindo, {this.props.departamento.nome}</h1>
					<button onClick={() => this.handleLogoutClick()}>Logout</button>
				</nav>
				<a href="#" className="links text-decoration-none font-weight-bolder float-left" >Sobre-nós</a>
      			<a href="#" className="links text-decoration-none font-weight-bolder float-right">Sair</a>
				<div className="container-logo">
					<img src={logo} alt="FOURR"/>
				</div>
				<div id="ladoalado"><img src={teste}/></div> 
            </div>
        );
    }
}
