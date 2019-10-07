import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home'


export default class Routes extends Component {
	constructor() {
		super();

		this.state = {
			logged_in: "não_logado",
			departamento: {}
		};
		
		this.handeLogin = this.handleLogin.bind(this);
	}
	
	handleLogin(data) {
			console.log(data)
			console.log(this.logged_in,this.departamento)
			this.setState({
				logged_in: "logado",
				departamento: data.departamento
			});
			console.log(this.logged_in,this.departamento)
			
		}
	
    render() {
    	return (
	        <BrowserRouter>
				<Switch>
					<Route 
						path='/' 
						exact 
						render={props => (
							<Login {... props} handleLogin = {this.handleLogin.bind(this)} logged_in={this.state.logged_in} />
							)}

						/>
					<Route 
						path='/register' 
						exact 
						component={props => (
							<Register {... props} logged_in={this.state.logged_in} />
							)}
						/>
				</Switch>
	        </BrowserRouter>
    	);
	}
}