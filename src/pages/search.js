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
            categoria: "",
        }

        this.itemSucess = this.itemSucess.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    itemSucess(){
		this.props.history.push("/item-list");
	}

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit(event) {
        const {nome,categoria} = this.state;
        
        axios.post(
            "https://fourr-api.herokuapp.com/searchs/", {
            item:{nome_item: nome,categoria: categoria}}, //atualizar
            {withCredentials: true}
        ).then(response => {
            if (response.data.categoria === true){ //atualizar
            this.itemSucess();
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
                    <h5><b>Qual item você precisa?</b></h5>
                    
                    <input 
                    placeholder="Nome do produto"
                    name= "nome"
                    value={this.state.nome}
                    onChange={this.handleChange}
                    required
                    />

                    <input 
                    placeholder="Categoria do produto"
                    name= "categoria"
                    value={this.state.categoria}
                    type="categoria"
                    onChange={this.handleChange}
                    required
                    />
                    <button type="submit">Pesquisar</button>
                </form>
            </div>
        );
    }
}
