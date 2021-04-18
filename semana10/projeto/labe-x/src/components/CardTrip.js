import {ButtonForm, ButtonFormEncerrado} from '../config/styles'
import {Trip} from '../config/styles'
import Excluir from '../components/Comfim'
const CardTrip = ({trip, onClick, onClickExcluir}) => {
  const date = new Date(trip.date)

  let dateEnd = new Date(date.getTime() + (trip.durationInDays * 24 * 60 * 60 * 1000));

  let dateEndString = dateEnd.getDate() < 9 ? "0" + (dateEnd.getDate()+ 1) + "/": (dateEnd.getDate() + 1) + "/"

   dateEndString += dateEnd.getMonth() < 9 ? "0"+ (dateEnd.getMonth()+ 1) + "/" :
   (dateEnd.getMonth()+ 1) + "/" ;

    dateEndString += dateEnd.getFullYear();
    
    let dateString = trip.date.split('-');
    dateString = `${dateString[2]}/${dateString[1]}/${dateString[0]}`

    const currentDate = new Date();
    
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
          {trip.durationInDays} dias
      </li>
      <li>
        <span>Data: </span>
          {dateString}
      </li>
      <li>
        <span>Fim da viagem: </span>
          {dateEndString}
      </li>
      <li>
        
      {
      onClickExcluir ? <>
          <ButtonForm
        variant="contained"
        color="primary"
        startIcon={<span class="material-icons"></span>}
        onClick={() => onClick(trip.id)}
        >
          Ver detalhes</ButtonForm>
            <Excluir
             onClick={() => onClickExcluir(trip.id)}
            />
            </>
            : <>
            {
              currentDate.getTime() - date.getTime() > 0 ?
              <ButtonFormEncerrado
              variant="contained"
              color="primary"
              startIcon={<span class="material-icons"></span>}
              onClick={() => onClick(trip.id)}
              >
                Encerrado</ButtonFormEncerrado>
              :
              <ButtonForm
              variant="contained"
              color="primary"
              startIcon={<span class="material-icons"></span>}
              onClick={() => onClick(trip.id)}
              >
                Candidatar-se</ButtonForm>
            }
          
              </>
          }

          </li>
    </ul>

  </Trip>)
}
export default CardTrip;