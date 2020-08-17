import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Empresa from './pages/Empresa';
import Contact from './pages/NewContact';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Produtos" component={Products}/>
                <Route path="/Empresa" component={Empresa}/>
                <Route path="/Contato/new" component={Contact}/>
            </Switch>
        </BrowserRouter>
    );
}