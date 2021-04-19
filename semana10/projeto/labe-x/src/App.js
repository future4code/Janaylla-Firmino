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
import { theme } from "./config/Theme";
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
         <HomePage></HomePage>
      </Route>
      <Route exact path="/trips/list">
        <ListTripsPage></ListTripsPage>
      </Route>
      <Route exact path="/trips/application">
        <ApplicationFormPage></ApplicationFormPage>
      </Route>
      <Route exact path="/login">
        <LoginPage/>
      </Route>
      <Route exact path="/admin/trips/list">
        <AdiminHomePage/>
      </Route>
      <Route exact path="/admin/trips/create">
      <CreateTripPage/>
      </Route>
      <Route exact path="/admin/trips/:id">
      <TripDetailsPage/>
      </Route>
  
      <Route>
        <Error/>
      </Route>
    </Switch>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
