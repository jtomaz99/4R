import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Login from './pages/login';
import Register from './pages/register';
import HomeLogado from './pages/home_logado'
import HomeDeslogado from './pages/home'
import Forgot from './pages/forgot'
import Reset from './pages/reset'
import Cadastro_prod from './pages/cadastro_prod'
import Search from './pages/search'
import ProdutosBusca from './pages/produtos_busca'

export default class Routes extends Component {
	constructor() {
		super();

		this.state = {
			logged_in: "nao_logado",
			departamento: {},
			produtos: {}
		};
		
		this.handeLogin = this.handleLogin.bind(this);
		this.handeLogout = this.handleLogout.bind(this);
		this.loginStatus = this.loginStatus.bind(this);
		this.handleItens = this.handleItens.bind(this);
	}
	
	loginStatus(){
		axios
			.get("https://fourr-api.herokuapp.com/logged_in", { withCredentials: true })
			.then(response => {
				if (response.data.logged_in && this.state.logged_in === "nao_logado")
					this.setState({
						logged_in: "logado",
						departamento: response.data.departamento 
					})
				else if (!response.data.logged_in && this.state.logged_in === "logado" )
					this.setState({
						logged_in: "nao_logado",
						departamento: {}
					})
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
	handleItens(data){
			this.setState({
				produtos: data.produtos
			})
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
							<HomeDeslogado {... props} 
								logged_in={this.state.logged_in} />
							)}
					/>

					<Route 
						path='/login' 
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
							<HomeLogado {... props} 
								logged_in = {this.state.logged_in}
								departamento={this.state.departamento} 
								handleLogout = {this.handleLogout.bind(this)}/>
							)}
					/>

					<Route 
						path='/cadastro_prod' 
						exact 
						render={props => (
							<Cadastro_prod {... props} 
								logged_in = {this.state.logged_in}
								departamento={this.state.departamento} 
								handleLogout = {this.handleLogout.bind(this)}/>
							)}
					/>

					<Route 
						path='/search' 
						exact 
						render={props => (
							<Search {... props} 
								logged_in = {this.state.logged_in}
								departamento={this.state.departamento} 
								handleLogout = {this.handleLogout.bind(this)}/>
							)}
					/>

					<Route 
						path='/produtos-busca' 
						exact 
						render={props => (
							<ProdutosBusca {... props} 
								logged_in = {this.state.logged_in}
								departamento={this.state.departamento}
								produtos={this.state.produtos} 
								handleLogout = {this.handleLogout.bind(this)}/>
							)}
					/>

					<Route 
						path='/forgot' 
						exact 
						render={props => (
							<Forgot {... props}/>
							)}
					/>

					<Route 
						path='/reset' 
						exact 
						render={props => (
							<Reset {... props}/>
							)}
					/>

				</Switch>
	        </BrowserRouter>
    	);
	}
}