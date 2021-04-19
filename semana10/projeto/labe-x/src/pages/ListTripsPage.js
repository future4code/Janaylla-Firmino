import React from 'react'
import ListTrips from '../components/ListTrip'
import Nav from '../components/Nav'
import {Bory, Main} from '../config/styles'

const ListTripsPage = () => { 
    return ( <Bory>
    <Nav currentPage="ListTrips"/>
      <ListTrips
      page="Login"
    />
    </Bory>)
  };
  export default ListTripsPage;
