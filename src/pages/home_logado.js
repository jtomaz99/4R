import React, { Component } from 'react';
import axios from 'axios';

import './home.css';
import logo from '../assets/logo.svg';

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
            <div className="fundo text-center">
				<div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
				<nav className="navbar navbar-expand-md navbar-dark fixed-top new-navbar">
					<a className="navbar-brand" href="/home">4R</a>
    				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      				<span className="navbar-toggler-icon"></span>
   				 	</button>
						<div className="collapse navbar-collapse" id="navbarCollapse">
							<ul className="navbar-nav mr-auto">
							</ul>
							<form className="form-inline mt-2 mt-md-0">
								<button type="button" className="btn btn-link my-2 my-sm-0 item" onClick={() => this.handlePesquisarClick()} >Pesquisar</button>
								<button type="button" className="btn btn-link my-2 my-sm-0 item" onClick={() => this.handleRegisterProductClick()} >Cadastrar seu produto</button>
								<button type="button" className="btn btn-link my-2 my-sm-0 item" onClick={() => this.meusItens()} >Meus Itens</button>
								<button type="button" className="btn btn-link my-2 my-sm-0 item" onClick={() => this.handleLogoutClick()} >Sair</button>

							</form>
						</div>
				</nav>
				

				<div className="row">
					<div className="col-sm teste-margin">
						<img className="logo" src={logo}/>
					</div>
				</div>

				<main role="main" className="inner cover">
					<h1 className="cover-heading">Precisa de algum item na Universidade?</h1>
					<p className="lead">Aqui você encontra diversos itens de departamentos da universidade para o seu departamento.</p>
					<p className="lead">
					<a href="#" className="btn btn-lg btn-secondary">Learn more</a>
					</p>
				</main>
				
				<footer className="container py-5 mt-auto">
					<div className="row">
						<div class="col-12 col-md">
							<small className="d-block mb-3 text-muted">&copy; 2019.2</small>
						</div>
						<div className="col-6 col-md">
							<button type="button" className="btn btn-link my-2 my-sm-0 item-footer" onClick={() => this.handlePesquisarClick()} >Pesquisar</button>
						</div>
						<div className="col-6 col-md">
							<button type="button" className="btn btn-link my-2 my-sm-0 item-footer" onClick={() => this.handleRegisterProductClick()} >Cadastrar seu produto</button>
						</div>
						<div className="col-6 col-md">
							<button type="button" className="btn btn-link my-2 my-sm-0 item-footer" onClick={() => this.meusItens()} >Meus Itens</button>
						</div>
						<div className="col-6 col-md">
							<h5>Queremos passar</h5>
						</div>
					</div>
				</footer>
				</div>
            </div>
        );
    }
}
