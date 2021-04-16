import React, {useState, useEffect} from "react"
import {Bory, Main, MainLeft, MainRight, MenuDetails, Centalizar} from '../config/styles'
import Nav from "../components/NavAdmin";
import {logado} from '../constants/logado'
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios'
import {baseUrl} from '../constants/axios'
import CardCandidates from '../components/CardCandidates'

const TripDetailsPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [aprovados, setAprovados] = useState(false);

  const [trip, setTrip] = useState({});
  const getTrip = () => {
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
    })
    .catch((err) => {
      console.log(err);
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
    <Nav currentPage="AdminHome"/>
   <Main>
     <MainLeft
     
     ></MainLeft>
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
   </Main>
    </Bory>;
       }
       else{
         history.push('/login');
         return <></>;
       }
};

export default TripDetailsPage;
