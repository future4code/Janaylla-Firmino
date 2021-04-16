import React, {useState, useEffect} from "react";
import {Bory, Filtro, ListTrips, Main} from '../config/styles'
import Nav from "../components/NavAdmin";
import {logado} from '../constants/logado'
import { useHistory } from "react-router-dom";
import {baseUrl} from '../constants/axios';
import CardTrip from "../components/CardTrip";
import axios from 'axios';
import {goToTripDetails} from '../constants/routs'
const AdminHomePage = () => {
 const history = useHistory();

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
const onClick = (id) =>{
  goToTripDetails(history, id)
}
 if(logado()){
  return <Bory>
     <Nav currentPage="AdminHome"/>
     <Main>
    <Filtro>
    
    </Filtro>
    <ListTrips>
    {
        trips.map((trip) => {
          return (
            <CardTrip
            trip={trip}
            textButon="Ver detalhes"
            onClick={onClick}
            />
          )
        })
      }
    </ListTrips>
  </Main>
    </Bory>;
    }
    else{
      history.push('/login');
      return <></>;
    }
};

export default AdminHomePage;