import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Register from '../pages/Register/Register'

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Register}/>
          <Route>
            <div>Erro 404 - Página não encontrada</div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;