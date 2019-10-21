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
        console.log(this.state.imagem)
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.logged_in === "logado"){
            const {descricao,categoria,nome_prod} = this.state;
            axios.post(
                "https://fourr-api.herokuapp.com/new_product/",{
                        produto:{dono_produto: this.props.departamento.email,
                        descricao: descricao,
                        categoria: categoria,
                        nome_prod: nome_prod}},
                        {withCredentials: true}
            ).then(response => {
                if (response.data.status === true) {
                    const {imagem} = this.state;
                    const fd = new FormData();
                    fd.append('imagem',this.state.imagem);
                    console.log('img',this.state.imagem)
                    console.log('name',this.state.imagem.name)
                    axios.post(
                        "https://fourr-api.herokuapp.com/new_img/",fd,{withCredentials: true}
                        ).then(response => {
                            console.log("response",response.data)
                        }
                        ).catch(error => {
                            console.log("error message",error)
                        })
                    }}
            ).catch(error => {
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
                    <h5><b>Cadastrar Produto</b></h5>
                    
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
