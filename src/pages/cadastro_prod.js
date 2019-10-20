import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import logo from '../assets/logo.svg';
import Retangulos from '../components/retangulos.js'
import Popup from '../components/popup.js'

export default class Cadastro_prod extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dono_produto: this.props.departamento.email,
            descricao: "",
            imagem: null,
            categoria: "",
            nome_prod: "",
            showPopup: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.togglePopup = this.togglePopup.bind(this)
        
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    togglePopup() {  
        this.setState({  
            showPopup: !this.state.showPopup  
        })
    }  

    fileSelectedHandler(event){
        this.setState({
            imagem: event.target.files[0]
        })
    }

    handleSubmit(event) {
        if (this.props.logged_in === "logado"){
            const {dono_produto,descricao,nome_prod,imagem,categoria} = this.state;
            console.log({produto:{
                        dono_produto: this.props.departamento.email,
                        descricao: descricao,
                        categoria: categoria,
                        nome_prod: nome_prod,
                        imagem: imagem}});
            axios.post(
                "https://fourr-api.herokuapp.com/new_product/", {
                produto:{dono_produto: this.props.departamento.email,
                        descricao: descricao,
                        categoria: categoria,
                        nome_prod: nome_prod,
                        imagem: imagem}},
                        {withCredentials: true}
            ).then(response => {
                console.log("cadastro resposta", response);
            }).catch(error => {
                console.log("error message",error)
            })
        }
        else{
            this.togglePopup()
        }
        event.preventDefault();
    }

    render () {

        return(
            <div className="login-container">
                <Retangulos />    
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} alt="FOURR"/>
                    <h5><b>Cadastrar Produto {this.props.departamento.email} </b></h5>
                    
                    <input 
                    placeholder="Nome do Produto"
                    name= "nome_prod"
                    value={this.state.nome_prod}
                    onChange={this.handleChange}
                    required
                    />

                    <input 
                    placeholder="Categoria"
                    name= "categoria"
                    value={this.state.categoria}
                    onChange={this.handleChange}
                    required
                    />

                    <input 
                    placeholder="Descricao"
                    name= "descricao"
                    value={this.state.descricao}
                    type="text"
                    onChange={this.handleChange}
                    required
                    />

                    <input 
                    placeholder="imagem"
                    name="file"
                    type="file"
                    onChange={this.fileSelectedHandler}
                    required
                    />
                    <button type="submit">Cadastrar</button>
                </form>
                {this.state.showPopup ? <Popup text='Faça login para cadastrar um produto!'  
                            closePopup={this.togglePopup.bind(this)}/>: null}
            </div>
        );
    }
}
