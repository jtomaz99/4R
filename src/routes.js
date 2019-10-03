import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';


export default function Routes() {
    return(
        <BrowserRouter>
            <Route path='/' exact component={Login} />
            <Route path='/register' exact component={Register} />
        </BrowserRouter>
    );
}