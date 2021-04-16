import {ButtonLogin} from '../config/styles'
import {Trip} from '../config/styles'

const CardTrip = ({trip, textButon, onClick}) => {
return (<Trip>
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
      <ButtonLogin
        variant="contained"
        color="primary"
        startIcon={<span class="material-icons"></span>}
        onClick={() => onClick(trip.id)}
        >
          {textButon}</ButtonLogin>
    </ul>

  </Trip>)
}
export default CardTrip;