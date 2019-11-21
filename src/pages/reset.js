import React, { Component } from 'react';
import axios from 'axios';

import './main.css';
import logo from '../assets/logo.svg';
import Retangulos from '../components/retangulos.js'

export default class Forgot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: "",
            password: ""
        }

        this.resetSucesso = this.resetSucesso.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }

    resetSucesso(){
        this.props.history.push("/");
    }
        
    
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        const {token,password} = this.state;
        
        axios.post(
            "https://fourr-api.herokuapp.com/reset/", 
            {departamento:{token: token,
                            password: password}},
            {withCredentials: true}
        ).then(response => {
            if (response.data.status === true){
            this.resetSucesso();
            }
        }).catch(error => {
            console.log("error message",error)
            this.resetSucesso();
        })
        
        event.preventDefault();

    }

    render () {

        return(
            <div className="login-container">
                <Retangulos />    
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} alt="FOURR"/>
                    <h5><b>Esqueci minha senha</b></h5>
                    <p>Insira o token e a sua nova senha</p>

                    <input 
                    placeholder="Token"
                    name= "token"
                    value={this.state.token}
                    onChange={this.handleChange}
                    required
                    />

                    <input 
                    placeholder="Nova Senha"
                    name= "password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                    />

                    <button type="submit">Resetar Senha</button>
                </form>
            </div>
        );
    }
}
