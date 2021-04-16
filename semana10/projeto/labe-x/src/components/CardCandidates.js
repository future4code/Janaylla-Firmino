import {Bory, Main, MainLeft, MainRight, MenuDetails, CardCandidates, CardsCandidates, Trip, ButtonLogin, Centalizar} from '../config/styles'
const cardCandidates = ({candidates, onClickAprovar}) => {
return (    
<CardsCandidates>
    {candidates && candidates.map(item =>{
    return (<Trip>
        <ul>
          <li>{item.name}</li>
          <li><span>Por quê contratar: </span>{item.applicationText}</li>
          <li><span>País: </span>{item.country}</li>
          <li><span>Profissão: </span>{item.profession}</li>
          <li><span>Idade: </span>{item.age}</li>
        {onClickAprovar && <>
          <ButtonLogin
  variant="contained"
  color="primary"
  startIcon={<span class="material-icons"></span>}
   onClick={() => onClickAprovar(item.id, true)}
  >
    Aprovar
    </ButtonLogin>
    <ButtonLogin
  variant="outlined"
  color="primary"
  startIcon={<span class="material-icons"></span>}
  // onClick={() => onClick(trip.id)}
  onClick={() => onClickAprovar(item.id, false)}
  >
    Desaprovar
    </ButtonLogin>
    </>}
        </ul>

    </Trip>)
  })}
  </CardsCandidates>)
}
export default cardCandidates;