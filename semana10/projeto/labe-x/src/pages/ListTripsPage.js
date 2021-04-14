import React, {useState, useEffect} from "react";
import {Bory, Main, Filtro, ListTrips} from '../config/styles'
import Nav from "../components/Nav";
import axios from 'axios';
import CardTrip from "../components/CardTrip";
import {baseUrl} from '../constants/axios'  
const ListTripsPage = () => {
  const [trips, setTrips] = useState([]);
  const getTrips = () => {
    axios.get(`${baseUrl}/trips`)
    .then((res) => {
        console.log(res.data.trips);
        setTrips(res.data.trips);
    })
    .catch(() =>{
    })
  }
  useEffect(()=>{
    getTrips();
  }, [])
  return <Bory>
  <Nav currentPage="ListTrips"/>
  <Main>
    <Filtro>
    
    </Filtro>
    <ListTrips>
    {
        trips.map((trip) => {
          return (
            <CardTrip
            trip={trip}
            textButon="Ver mais"
            />
          )
        })
      }
    </ListTrips>
  </Main>
    </Bory>;
};

export default ListTripsPage;
