import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Register from '../pages/Register/Register'
import Feed from '../pages/Feed/Feed'
import Login from '../pages/Login/Login'
const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Register}/>
        <Route exact path="/feed" component={Feed}/>
        <Route exact path="/login" component={Login}/>
          <Route>
            <div>Erro 404 - Página não encontrada</div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;