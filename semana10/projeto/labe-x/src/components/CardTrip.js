import {ButtonLogin} from '../config/styles'
import {Trip} from '../config/styles'

const CardTrip = ({trip, textButon, onClick, onClickExcluir}) => {
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
      <li>
      <ButtonLogin
        variant="contained"
        color="primary"
        startIcon={<span class="material-icons"></span>}
        onClick={() => onClick(trip.id)}
        >
          {textButon}</ButtonLogin>
          {onClickExcluir &&
          <ButtonLogin
        variant="outlined"
        color="secondary"
        startIcon={<span class="material-icons"></span>}
         onClick={() => onClickExcluir(trip.id)}
        >
          Excluir</ButtonLogin>
          }
          </li>
    </ul>

  </Trip>)
}
export default CardTrip;