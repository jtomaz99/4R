import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import logo from '../assets/logo.svg';

export default class Home extends Component {
    constructor(props) {
        super(props); 

    }

    render () {

        return(
            <div>
            <img src={logo} alt="FOURR"/>
            <h1>logado</h1>
            </div>
        );
    }
}
