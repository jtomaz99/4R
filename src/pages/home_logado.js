import React, { Component } from 'react';
import axios from 'axios';

import './home.css';
import logo from '../assets/logo.svg';
import teste from '../assets/background.jpg';

export default class HomeLogado extends Component {
    constructor(props) {
        super(props);  
        
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.handlePesquisarClick = this.handlePesquisarClick.bind(this);
		this.meusItens = this.meusItens.bind(this);
		this.meusItensSucess = this.meusItensSucess.bind(this);
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
	
	meusItensSucess(produtos){
        this.setState({
            produtos: produtos
        })
        this.props.handleItens(produtos);
        this.props.history.push("/meus-itens");
	}

	
	meusItens() {    
        axios.post(
            "https://fourr-api.herokuapp.com/searchdono/",{
                dono:{dono: this.props.departamento.email}},
            {withCredentials: true}
        ).then(response => {
            if (response.data.status === true){
            this.meusItensSucess(response.data.produtos);
            }
        }).catch(error => {
            console.log("error message",error)
        })

    }
	
	handlePesquisarClick(){
		this.props.history.push("/search")
	}

	handleRegisterProductClick(){
		this.props.history.push("/cadastro_prod")
	}
	
    render () {
        return(
			
            <div className="container-fluid fundo">

				<nav className="navbar-home navbar-light navbar">
					<h1 className="welcome">4R</h1>
				</nav>

				<div className="row">

					<div className="col-md-4 col-sm-4 col-xs-6">
						<button type="button" className="btn btn-success item" onClick={() => this.handlePesquisarClick()} >Pesquisar</button>
					</div>
					
					<div className="col-md-4 col-sm-4 col-xs-6">
						<button type="button" className="btn btn-success item" onClick={() => this.meusItens()} >Meus Itens</button>
					</div>

					<div className="col-md-4 col-sm-4 col-xs-6">
						<img className="logo" src={logo}/>
					</div>

					<div className="col-md-4 col-sm-4 col-xs-6">
						<button type="button" className="btn btn-success item" onClick={() => this.handleLogoutClick()} >Sair</button>
					</div>
					<div>
						<div className="row container-items">
							<button type="button" className="btn btn-success item" onClick={() => this.handleRegisterProductClick()} >Cadastrar seu produto</button>
						</div>
					</div>
				</div>

				
            </div>
        );
    }
}
