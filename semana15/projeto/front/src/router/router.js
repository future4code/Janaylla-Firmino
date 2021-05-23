import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from '../pages/index/index'
import User from '../pages/user/user'
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Index/>
        </Route>
        <Route exact path="/user/:cpf">
        <User/>
        </Route>
        <Route>
         <div>Pagina não encontrada</div>
        </Route>
        </Switch>
    </BrowserRouter>
  );
};

export default Router;