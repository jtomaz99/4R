import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home'


export default class Routes extends Component {
	constructor() {
		super();

		this.state = {
			logged_in: "nao_logado",
			departamento: {}
		};
		
		this.handeLogin = this.handleLogin.bind(this);
		this.handeLogout = this.handleLogout.bind(this);
		this.loginStatus = this.loginStatus.bind(this);
	}
	
	loginStatus(){
		axios
			.get("https://fourr-api.herokuapp.com/logged_in", { withCredentials: true })
			.then(response => {
				if (response.data.logged_in && this.state.logged_in === "nao_logado")
					console.log(response)
				else if (!response.data.logged_in && this.state.logged_in === "logado" )
					console.log(response)
				}
			)
			.catch(error =>{
				console.log("check login error",error);
			});
	}
	
	componentDidMount(){
		this.loginStatus();
	}
	
	handleLogin(data) {
			this.setState({
				logged_in: "logado",
				departamento: data.departamento
			});
			
		}
		
	handleLogout() {
			this.setState({
				logged_in: "nao_logado",
				departamento: {}
			});
			
		}
	
    render() {
    	return (
	        <BrowserRouter>
				<Switch>
					<Route 
						path='/' 
						exact 
						render={props => (
							<Login {... props} 
								handleLogin = {this.handleLogin.bind(this)} 
								logged_in={this.state.logged_in} />
							)}

						/>
					<Route 
						path='/register' 
						exact 
						component={props => (
							<Register {... props} 
							logged_in={this.state.logged_in} />
							)}
						/>
					<Route 
						path='/home' 
						exact 
						render={props => (
							<Home {... props} 
								logged_in = {this.state.logged_in}
								departamento={this.state.departamento} 
								handleLogout = {this.handleLogout.bind(this)}
								loginStatus = {this.loginStatus.bind(this)}/>
							)}

						/>
				</Switch>
	        </BrowserRouter>
    	);
	}
}