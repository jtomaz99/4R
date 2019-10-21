import React, { Component } from 'react';
import axios from 'axios';

import './home.css';
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
			
            <div className="container-fluid">

				<nav className="navbar-home navbar-light navbar">
					<h1 className="welcome">Bem vindo, {this.props.departamento.nome}</h1>
				</nav>

				<div className="row">

					<div className="col-md-4 col-sm-4 col-xs-6">
						<button type="button" className="btn btn-success item">Sobre-nós</button>
					</div>

					<div className="col-md-4 col-sm-4 col-xs-6">
						<img className="logo" src={logo}/>
					</div>

					<div className="col-md-4 col-sm-4 col-xs-6">
						<button type="button" className="btn btn-success item" onClick={() => this.handleLogoutClick()} >Sair</button>
					</div>

				</div>

					<div className="row">

					<div className="col-md-6 image-back">
						
					</div>
					<div className="col-md-6 image-back2">
						<img src={teste} className="coluna"/>
						
					</div>

  				</div>

				
				
            </div>
        );
    }
}
