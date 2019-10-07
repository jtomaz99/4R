import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';


export default class Routes extends Component {
	constructor() {
		super();

		this.state = {
			logged_in: false,
			user: {}
		}
	}
    render() {
    	return (
	        <BrowserRouter>
	            <Route 
	            	path='/' 
	            	exact 
	            	render={props => (
	            		<Login {... props} logged_in={this.state.logged_in} />
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