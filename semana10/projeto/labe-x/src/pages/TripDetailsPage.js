import React, {useState, useEffect} from "react"
import {Bory, Main, MainLeft, MainRight, MenuDetails, CardCandidates, CardsCandidates, Trip} from '../config/styles'
import Nav from "../components/NavAdmin";
import {logado} from '../constants/logado'
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios'
import {baseUrl} from '../constants/axios'
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

  if(logado()){
  return <Bory>
    <Nav currentPage="AdminHome"/>
   <Main>
     <MainLeft></MainLeft>
     <MainRight>
       <MenuDetails>
       {!aprovados ? <h3 id="current" onClick={changeBox}>Pendentes</h3>:
       <h3 onClick={changeBox}>Pendentes</h3> }
       {aprovados ? <h3 id="current" onClick={changeBox}>Aprovados</h3>: 
       <h3 onClick={changeBox}>Aprovados</h3>}
        </MenuDetails>
        <CardsCandidates>
      {trip.candidates && trip.candidates.map(item =>{
          return (<Trip>
              <ul>
                <li>{item.name}</li>
                <li>{item.applicationText}</li>
                <li>{item.country}</li>
                <li>{item.profession}</li>
              </ul>
          </Trip>)
        })}
        </CardsCandidates>
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
