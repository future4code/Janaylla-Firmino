import React, {useState, useEffect} from "react"
import {Bory, Main, MainLeft, MainRight, MenuDetails, Centalizar, CentalizarProgess} from '../config/styles'
import Nav from "../components/NavAdmin";
import {logado} from '../constants/logado'
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios'
import {baseUrl} from '../constants/axios'
import CardCandidates from '../components/CardCandidates'
import TripsInformationDetails from '../components/TripsInformationDetails'
import { CircularProgress } from "@material-ui/core";

const TripDetailsPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [aprovados, setAprovados] = useState(false);
  const [loading, setLoading] = useState(true);
  const [trip, setTrip] = useState();
  const getTrip = () => {
    setLoading(true)
    axios
    .get(
      `${baseUrl}/trip/${id}`, {
        headers: {
          auth: window.localStorage.getItem('token')
        }
      }
    )
    .then((res) => {
      console.log(res.data.trip);
      setTrip(res.data.trip)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err);
      alert("Algo deu errado :(, recarregue a página e tente novamente")
    });
  }
  useEffect(()=>{
    getTrip();
  }, [])

  const changeBox = () => {
    setAprovados(!aprovados);
  }

  const onClickAprovar = (idCandidate, approve) => {
    console.log(idCandidate)
    const bory = {
      approve: approve
    } 
    axios
    .put(
      `${baseUrl}/trips/${id}/candidates/${idCandidate}/decide`, bory, {
        headers: {
          auth: window.localStorage.getItem('token')
        }
      }
    )
    .then((res) => {
      getTrip();
      // console.log(res.data);
      console.log("Deu certo")
      // history.push('/admin/trips/list')
    })
    .catch((err) => {
      console.log(err);
    });
  }
  if(logado()){
  return <Bory>
    <Nav />
    {trip &&
   <Main>
     <MainLeft>
     {loading ? <Centalizar>
       <CircularProgress/>
     </Centalizar>:
     <TripsInformationDetails
     id={id} 
     trip={trip}
     />
     }
     </MainLeft>
     
     <MainRight>
       <MenuDetails>
       {!aprovados ? <h3 id="current" onClick={changeBox}>Pendentes</h3>:
       <h3 onClick={changeBox}>Pendentes</h3> }
       {aprovados ? <h3 id="current" onClick={changeBox}>Aprovados</h3>: 
       <h3 onClick={changeBox}>Aprovados</h3>}
        </MenuDetails>
          <Centalizar>
            {aprovados ? 
             <CardCandidates
             candidates={trip.approved}
           />:
        <CardCandidates
        onClickAprovar={onClickAprovar}
          candidates={trip.candidates}
        />}
        </Centalizar>
     </MainRight>
    
   </Main> }
    </Bory>
    
       }
       else{
         history.push('/login');
         return <></>;
       }
};

export default TripDetailsPage;
