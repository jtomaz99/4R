import React, { useState } from 'react';
import './register.css';

import api from '../services/apiService';
import logo from '../assets/logo.svg';
import retangulo1 from '../assets/Rectangle2.1.svg'

export default function Register({ history }) {
    const [username, lastname, email, password,passwordconfirmation, setUsername, setLastname, setEmail, setPassword] = useState('');

//    async function handleSubmit(e) {
//        e.preventDefault();

//        const response = await api.post('/devs', {
//            username,
//            lastname,
//            password,
//        });

//        const { _id } = response.data;

//        history.push(`/dev/${_id}`);
//    }

    return(
        <div className="login-container">
            <form onSubmit=''>
                <img src={logo} alt="FOURR"/>
                <h5><b>Crie sua conta</b></h5>
                <input placeholder="Nome"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />

                <input placeholder="Sobrenome"
                    value={lastname}
                    onChange={e => setLastname(e.target.value)}
                />

                <input placeholder="E-Mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />

                <input placeholder="Senha"
                value={password}
                onChage={e => setPassword(e.target.value)}
                />

                <input placeholder="Confirme sua senha"
                value={passwordconfirmation}
                onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}