import React, { Component } from 'react';
import './register.css';
import axios from 'axios';
import logo from '../assets/logo.svg';
import Retangulos from '../components/retangulos.js'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        const {email,password} = this.state;
        
        axios.post(
            "http://fourr-api.herokuapp.com/sessions/", 
            {departamento:{email: email,password: password}},
            {withCredentials: true}
        ).then(response => {
            console.log("Login resposta", response);
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
                    <h5><b>Entre com sua conta</b></h5>
                    
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
                    <button type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}