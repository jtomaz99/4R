import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import logo from '../assets/logo.svg';
import Retangulos from '../components/retangulos.js'

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: "",
            email: "",
            password: "",
            password_confirmation: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        /*this.handleChange = this.RegisterSucesso.bind(this);*/

    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    RegisterSucesso(){
        this.props.history.push("/home");
    }


    handleSubmit(event) {
        const {email,password,nome,password_confirmation} = this.state;
        
        axios.post(
            "https://fourr-api.herokuapp.com/registrations/", {
            departamento:{nome_depto: nome,email: email,password: password,password_confirmation: password_confirmation}},
            {withCredentials: true}
        ).then(response => {
            console.log("cadastro resposta", response);
            this.RegisterSucesso();
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
                    <h5><b>Crie sua conta</b></h5>
                    
                    <input 
                    placeholder="Nome"
                    name= "nome"
                    value={this.state.nome}
                    onChange={this.handleChange}
                    required
                    />

                    <input 
                    placeholder="E-Mail"
                    name= "email"
                    value={this.state.email}
                    type="email"
                    onChange={this.handleChange}
                    required
                    />

                    <input 
                    placeholder="Senha"
                    name= "password"
                    value={this.state.password}
                    type="password"
                    onChange={this.handleChange}
                    required
                    />

                    <input 
                    placeholder="Confirme sua senha"
                    name="password_confirmation"
                    value={this.state.password_confirmation} 
                    type="password"
                    onChange={this.handleChange}
                    required
                    />
                    <button type="submit">Criar Conta</button>
                </form>
            </div>
        );
    }
}
