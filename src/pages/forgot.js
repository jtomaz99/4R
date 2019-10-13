import React, { Component } from 'react';
import axios from 'axios';

import './main.css';
import logo from '../assets/logo.svg';
import Retangulos from '../components/retangulos.js'

export default class Forgot extends Component {
    constructor(props) {
        super(props);

		
        this.state = {
            email: "",
        }

		this.forgotSucesso = this.forgotSucesso.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
		
    }

	forgotSucesso(){
		this.props.history.push("/reset");
	}
		
	
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        const {email} = this.state;
        
        axios.post(
            "https://fourr-api.herokuapp.com/forgot/", 
            {departamento:{email: email}},
            {withCredentials: true}
        ).then(response => {
			if (response.data.status === true){
            this.forgotSucesso();
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
                    <h5><b>Esqueci minha senha</b></h5>
                    <p>Enviaremos um email com um token para resetar sua senha</p>

                    <input 
                    placeholder="Email"
                    name= "email"
                    value={this.state.token}
                    onChange={this.handleChange}
                    required
                    />

                    <button type="submit">Enviar Token</button>
                </form>
            </div>
        );
    }
}