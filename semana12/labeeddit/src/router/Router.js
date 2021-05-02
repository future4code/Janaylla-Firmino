import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Register from '../pages/Register/Register'
import Feed from '../pages/Feed/Feed'
import Post from '../pages/Post/Post'
import Login from '../pages/Login/Login'
import Error from '../pages/Error/Error'
const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Feed}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/post/:id" component={Post}/>
        <Route exact path="/register" component={Register}/>
        <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;