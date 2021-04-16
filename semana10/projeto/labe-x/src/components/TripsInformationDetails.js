import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { goToAdminHome} from "../constants/routs";
import {TripInform, Centalizar} from '../config/styles'
import {TextField, MenuItem} from '@material-ui/core'
import {imgPlanets, planetList} from '../constants/const'

const CreateTrip = ({id, trips}) => {

  const history = useHistory();
 
  let trip = {};

  trips.forEach(item => {
      if(item.id === id)
        trip = item;
  });
  const indexOf = planetList.indexOf(trip.planet)
  // alert(indexOf, trip.planet)
//   console.log("asd", trip)
  return(
    <TripInform>
       
        <ul>
          <li>
          <img src={imgPlanets[indexOf]} />
          </li>
        <li>
          {trip.name}
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
          {trip.durationInDays} dias
      </li>
      <li>
        <span>Data: </span>
          {trip.date}
      </li>
      </ul>
    </TripInform>
    )
};

export default CreateTrip;
