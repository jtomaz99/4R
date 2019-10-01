import React, { useState } from 'react';
import './register.css';

import api from '../services/apiService';
import logo from '../assets/logo.svg';
import retangulo1 from '../assets/Rectangle2.1.svg';
import retangulo2 from '../assets/Rectangle2.2.svg';
import retangulo3 from '../assets/Rectangle2.3.svg';
import retangulo4 from '../assets/Rectangle2.svg';

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
            <div className="rect1"><img src={retangulo1} alt="RetanguloInferiorEsquerdo" /></div>
            <div className="rect2"><img src={retangulo2} alt="RetanguloSuperiorEsquerdo" /></div>
            <div className="rect3"><img src={retangulo3} alt="RetanguloInferiorDireito" /></div>
            <div className="rect4"><img src={retangulo4} alt="RetanguloSuperiorDireito" /></div>       
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