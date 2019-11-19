import React, { Component } from 'react';
import axios from 'axios';

import './home.css';
import logo from '../assets/logo.svg';
import teste from '../assets/background.jpg';
import Popup from '../components/popup.js'

export default class Home extends Component {
    constructor(props) {
        super(props); 

        this.state = {
        	donoP: 'Escreva sua solicitação e envie um e-mail para: '
        }

		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.handlePesquisarClick = this.handlePesquisarClick.bind(this);
		this.solicitarItem = this.solicitarItem.bind(this);
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

	solicitarItem(dono){
		this.setState({
			donoP: this.state.donoP + dono
		})
		this.togglePopup()

	}

	togglePopup() {  
        this.setState({  
            showPopup: !this.state.showPopup  
        })
    }  

	handlePesquisarClick(){
		this.props.history.push("/search");
	}
    render () {
        return(
			
            <div className="container-fluid fundo">

				<nav className="navbar-home navbar-light navbar">
					<h1 className="welcome">4R</h1>
				</nav>

				<div className="row">

					<div className="col-md-4 col-sm-4 col-xs-6">
						<button type="button" className="btn btn-success item" onClick={() => this.handlePesquisarClick()} >Pesquisar Outros</button>
					</div>

					<div className="col-md-4 col-sm-4 col-xs-6">
						<img className="logo" src={logo}/>
					</div>

					<div className="col-md-4 col-sm-4 col-xs-6">
						<button type="button" className="btn btn-success item" onClick={() => this.handleLogoutClick()} >Sair</button>
					</div>
				</div>
				<div className="container-items">
					<h1>Resultado da busca</h1>
					<div className="row">
					{this.props.produtos.map((produto, index) => {
						return  <div className="col-lg-4 col-md-6 mb-4">
									<div className="card h-100">
										<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
										<div className="card-body">
						  					<h4 className="card-title">{produto.nome_prod}</h4>
											<h5>{produto.categoria}</h5>
						  					<p className="card-text">Descrição: {produto.descricao}</p>
										</div>
										<div class="card-footer">
											<button type="button" class="btn btn-primary" onClick={() => this.solicitarItem(produto.dono_produto)} >Solicitar Produto</button>
              							</div>
									</div>
					  		   	</div>
				    })}
					</div>
				</div>

				{this.state.showPopup ? <Popup text= {this.state.donoP + "teste"}
                            closePopup={this.togglePopup.bind(this)}/>: null}
            </div>
        );
    }
}
