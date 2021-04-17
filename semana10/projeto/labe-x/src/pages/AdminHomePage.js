import React, {useLayoutEffect} from 'react'
import ListTrips from '../components/ListTrip'
import Nav from '../components/NavAdmin'
import {Bory, Main} from '../config/styles'
import {goToLogin} from '../constants/routs'
import { useHistory } from "react-router-dom";

const AdminHomePage = () => { 
    const history = useHistory();
  useLayoutEffect(() => {
    if(!window.localStorage.getItem('token'))
        goToLogin(history)
  })
    return (
    <Bory>
      <Nav
         currentPage="AdminHome"
      />
    <ListTrips
    page="Admin"
    />
    </Bory>)
  };
  export default AdminHomePage;