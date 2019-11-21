import React, { Component } from 'react';
import axios from 'axios';

import './home.css';
import logo from '../assets/logo.svg';
import teste from '../assets/background.jpg';
import Popup from '../components/popup.js'

export default class MeusItens extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            produtos: []
        }

		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.handleRegisterProduct = this.handleRegisterProduct.bind(this);
		this.handlePesquisarClick = this.handlePesquisarClick.bind(this);
		this.deletarItem = this.deletarItem.bind(this);
		this.itemSucess = this.itemSucess.bind(this);
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
	componentDidMount(){
		console.log(this.props.produtos)
	}

	handleRegisterProduct(){
		this.props.history.push('/cadastro_prod')
	}

	handlePesquisarClick(){
		this.props.history.push('/search')
	}
	
	itemSucess(produtos){
        this.setState({
            produtos: produtos
        })
        this.props.handleItens(produtos);
	}

	deletarItem(produtoid,donoproduto){
		axios.post(
            "https://fourr-api.herokuapp.com/deleteitem",{
                produto:{id: produtoid,dono: donoproduto}},
            {withCredentials: true}
        ).then(response => {
            if (response.data.status === true){
            this.itemSucess(response.data.produtos);
            }
        }).catch(error => {
            console.log("error message",error)
        })
	}

    render () {
        return(
			
            <div className="container-fluid fundo">

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

				<div>
					<h1>Meus Itens</h1>
					{this.props.produtos.map((produto, index) => {
				    	return <div className="results">
				    			<h2>Nome: {produto.nome_prod}</h2>
				    			<h2>Descrição: {produto.descricao}</h2>
				    			<h2>Categoria: {produto.categoria}</h2>
				    			<button type="button" className="btn btn-success item" onClick={() => this.deletarItem(produto.id, produto.dono_produto)} >Deletar Produto</button>
				    			</div>
				    })}
				</div>
            </div>
        );
    }
}
