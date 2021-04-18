import React from "react";
import {TripInform} from '../config/styles'
import {imgPlanets, planetList} from '../constants/const'

const CreateTrip = ({id, trips}) => {

  let trip = {};

  trips.forEach(item => {
      if(item.id === id)
        trip = item;
  });
  const indexOf = planetList.indexOf(trip.planet)
  // alert(indexOf, trip.planet)
  //  // console.log("asd", trip)
  let dateString = trip.date.split("-")
  dateString = `${dateString[2]}/${dateString[1]}/${dateString[0]}`
  return(
    <TripInform>
         <div>
            <img src={imgPlanets[indexOf]} />
          </div>
        <ul>
        <li>
          <span>
          {trip.name}
          </span>
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
          {dateString}
      </li>
      <li>
        
      </li>
      </ul>
    </TripInform>
    )
};

export default CreateTrip;
