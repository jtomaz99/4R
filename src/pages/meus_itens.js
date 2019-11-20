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

				<nav className="navbar-home navbar-light navbar">
					<h1 className="welcome">Bem vindo, {this.props.departamento.nome}</h1>
				</nav>

				<div className="row">
					<div className="col-md-4 col-sm-4 col-xs-6">
						<img className="logo" src={logo}/>
					</div>

					<div className="col-md-4 col-sm-4 col-xs-6">
						<button type="button" className="btn btn-success item" onClick={() => this.handleLogoutClick()} >Sair</button>
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
