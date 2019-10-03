import React, { useState } from 'react';
import './login.css';

import api from '../services/apiService';
import logo from '../assets/logo.svg';
import retangulo1 from '../assets/Rectangle2.1.svg';
import retangulo2 from '../assets/Rectangle2.2.svg';
import retangulo3 from '../assets/Rectangle2.3.svg';
import retangulo4 from '../assets/Rectangle2.svg';

export default function Register({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/login', {
            email,
            password,
        });

        const { _id } = response.data;

        history.push(`/${_id}`);
    }

    return(
        <div className="login-container">
            <div className="rect1"><img src={retangulo1} alt="RetanguloInferiorEsquerdo" /></div>
            <div className="rect2"><img src={retangulo2} alt="RetanguloSuperiorEsquerdo" /></div>
            <div className="rect3"><img src={retangulo3} alt="RetanguloInferiorDireito" /></div>
            <div className="rect4"><img src={retangulo4} alt="RetanguloSuperiorDireito" /></div>        
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="FOURR"/>
                <h5><b>Entre com sua Conta</b></h5>
                

                <input placeholder="E-Mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />

                <input placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />

                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}