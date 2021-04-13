import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import AdiminHomePage from "./pages/AdminHomePage"
import ApplicationFormPage from "./pages/ApplicationFormPage"
import CreateTripPage from "./pages/CreateTripPage"
import Error from "./pages/Error"
import HomePage from "./pages/HomePage"
import ListTripsPage from "./pages/ListTripsPage"
import LoginPage from "./pages/LoginPage"
import TripDetailsPage from "./pages/TripDetailsPage"

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
         <HomePage/>
      </Route>
      <Route exact path="/">
        <ListTripsPage/>
      </Route>
      <Route exact path="/">
        <ApplicationFormPage/>
      </Route>
      <Route exact path="/">
        <LoginPage/>
      </Route>
      <Route exact path="/">
        <AdiminHomePage/>
      </Route>
      <Route exact path="/">
      <TripDetailsPage/>
      </Route>
      <Route exact path="/">
      <CreateTripPage/>
      </Route>
      <Route>
        <Error/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
