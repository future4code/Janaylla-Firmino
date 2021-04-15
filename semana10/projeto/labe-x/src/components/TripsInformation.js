import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { goToAdminHome} from "../constants/routs";
import {TripInform} from '../config/styles'
import {TextField, MenuItem} from '@material-ui/core'
import Jupiter from '../assets/jupiter_96159.ico'
import Marte from '../assets/mars_96191.ico'
import Mercurio from '../assets/mercury_9123.ico'
import Lua from '../assets/moonfullmoon_96213.ico'
import Neturno from '../assets/neptune_96229.ico'
import Saturno from '../assets/saturn_96158.ico'
import Venus from '../assets/venus_96156.ico'
import Urano from '../assets/uranus_96171.ico'

const CreateTrip = ({id, trips}) => {
    
  const history = useHistory();
 const img = {

 }
  let trip = {};

  trips.forEach(item => {
      if(item.id === id)
        trip = item;
  });
//   console.log("asd", trip)
  return(
    <TripInform>
        <img url={""}/>
        <ul>
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
          {trip.durationInDays}
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
