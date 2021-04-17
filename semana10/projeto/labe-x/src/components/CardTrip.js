import {ButtonLogin} from '../config/styles'
import {Trip} from '../config/styles'
import Excluir from '../components/Comfim'
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
            <Excluir
             onClick={() => onClickExcluir(trip.id)}
            />
        
          }
          </li>
    </ul>

  </Trip>)
}
export default CardTrip;