import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home'


export default class Routes extends Component {
	constructor() {
		super();

		this.state = {
			logged_in: "não_logado",
			user: {}
		}
		this.handleLogin.bind(this);	
	}
	
	handleLogin(data) {
			this.setState({
				logged_in: "logado",
				user: data.user
			})
		}
	
    render() {
    	return (
	        <BrowserRouter>
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
	        </BrowserRouter>
    	);
	}
}