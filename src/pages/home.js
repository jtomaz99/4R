import React, { Component } from 'react';
import axios from 'axios';

import './home.css';
import logo from '../assets/logo.svg';
import teste from '../assets/background.jpg';

export default class HomeDeslogado extends Component {
    constructor(props) {
        super(props); 
		this.handleLoginClick = this.handleLoginClick.bind(this);
    }
	
	handleLoginClick(){
		this.props.history.push("/login");
	} 
	
	componentDidMount(){
		this.props.loginStatus();
		console.log(this.props.logged_in)
		console.log(this.props.logged_in === "logado")
		if (this.props.logged_in === "logado")
			this.props.history.push("/home");
	}

    render () {
        return(
			
            <div className="container-fluid fundo">

				<nav className="navbar-home navbar-light navbar">
					<h1 className="welcome">Bem vindo ao 4R!</h1>
				</nav>

				<div className="row">
					<div className="col-md-4 col-sm-4 col-xs-6">
						<img className="logo" src={logo}/>
					</div>

					<div className="col-md-4 col-sm-4 col-xs-6">
						<button type="button" className="btn btn-success item" onClick={() => this.handleLoginClick()} >Login</button>
					</div>
					<div>
						<img className="logo" src={teste}/>
					</div>
					<div>
						<h1>sobre nós bla bla</h1>
					</div>
				</div>

				
            </div>
        );
    }
}
