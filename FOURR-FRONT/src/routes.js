import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Register from './pages/register';


export default function Routes() {
    return(
        <BrowserRouter>
            <Route path='/' exact component={Register} />
        </BrowserRouter>
    );
}