import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './login';


export default function Routes() {
    return(
        <BrowserRouter>
            <Route path='/' exact component={Login} />
        </BrowserRouter>
    );
}