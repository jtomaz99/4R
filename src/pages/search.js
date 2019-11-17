import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import logo from '../assets/logo.svg';
import Retangulos from '../components/retangulos.js'

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: "",
            produtos: []
        }

        this.itemSucess = this.itemSucess.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    itemSucess(produtos){
        this.setState({
            produtos: produtos
        })
        this.props.handleItens(produtos);
        this.props.history.push("/produtos-busca");
	}

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        const {nome} = this.state;  
        axios.post(
            "https://fourr-api.herokuapp.com/search/",{
                produto:{nome: nome}},
            {withCredentials: true}
        ).then(response => {
            if (response.data.status === true){
            this.itemSucess(response.data.produtos);
            }
        }).catch(error => {
            console.log("error message",error)
        })
        
        event.preventDefault();

    }


    render () {

        return(
            <div className="login-container">
                <Retangulos />    
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} alt="FOURR"/>
                    <h5><b>Buscar Produtos</b></h5>
                    
                    <input 
                    placeholder="Nome do produto"
                    name= "nome"
                    value={this.state.nome}
                    onChange={this.handleChange}
                    required
                    />
                    <button type="submit">Pesquisar</button>
                </form>
            </div>
        );
    }
}
