import React, { useState } from 'react';
import './login.css';



export default function Register({ history }) {
    const [email, password] = useState('');

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
                
                <h5><b>Entre com sua Conta</b></h5>
                

                <input placeholder="E-Mail"
                value={email}
                
                />

                <input placeholder="Senha"
                value={password}
                
                />

                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}