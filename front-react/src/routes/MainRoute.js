import React from 'react'
import { Route, BrowserRouter  as Router, Switch } from 'react-router-dom'
import CadastrarProduto from '../views/CadastrarProduto';
import ListarProdutos from '../views/ListarProdutos';
import Login from '../views/Login'

const MainRoute = () => (
    <Router>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/listar-produtos" component={ListarProdutos} />
            <Route path="/cadastrar-produtos" component={CadastrarProduto} />
            <Route exact path="/" component={Login} />
        </Switch>
    </Router>
)

export default MainRoute;
