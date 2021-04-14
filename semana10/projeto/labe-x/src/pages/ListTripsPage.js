import React, {useState, useEffect} from "react";
import {Bory, Main, Filtro, ListTrips, Trip} from '../config/styles'
import Nav from "../components/Nav";
import axios from 'axios';

import {Box} from '@material-ui/core'

const ListTripsPage = () => {
  const [trips, setTrips] = useState([]);
  const getTrips = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/janaylla-firmino-cruz/trips")
    .then((res) => {
        console.log(res.data.trips);
        setTrips(res.data.trips);
    })
    .catch(() =>{
      alert("deixa de ser burra menina")
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
          return (<Trip>
            <ul>
              <li>
                  <Box color="text.primary">
                  {trip.name}
              </Box>
              </li>
              <li>
                  {trip.description}
              </li>
              <li>
                  <span>Planeta: </span>
                  {trip.planet}
              </li>
              <li>
                 <span>Duração: </span>
                  {trip.durationInDays}
              </li>
              <li>
                <span>Data: </span>
                  {trip.date}
              </li>
            </ul>
        
          </Trip>)
        })
      }
    </ListTrips>
  </Main>
    </Bory>;
};

export default ListTripsPage;
