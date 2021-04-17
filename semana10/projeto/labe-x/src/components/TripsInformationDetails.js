import React from "react";
import { useHistory } from "react-router-dom";
import {TripInform} from '../config/styles'
import {imgPlanets, planetList} from '../constants/const'

const CreateTrip = ({id, trip}) => {

  const history = useHistory();

  const indexOf = planetList.indexOf(trip.planet)
  // alert(indexOf, trip.planet)
  // // console.log("asd", trip)
  return(
    <TripInform>
      
        <div>
            <img src={imgPlanets[indexOf]} />
          </div>
        <ul>
        <li>
        <span>{trip.name}</span>
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
      <li>
        <span>Canditatos Pandentes: </span>
          {trip.candidates.length} 
      </li>
      <li>
        <span>Canditatos Aprovados:: </span>
          {trip.approved.length} 
      </li>
      </ul>
    </TripInform>
    )
};

export default CreateTrip;
