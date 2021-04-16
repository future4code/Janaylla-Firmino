import React, {useState, useEffect, useDebugValue} from "react";
import {Bory, Main, Filtro, ListTrips} from '../config/styles'
import Nav from "../components/Nav";
import axios from 'axios';
import CardTrip from "../components/CardTrip";
import {baseUrl} from '../constants/axios'
import {goToApplicationForm} from '../constants/routs'
import {useHistory} from 'react-router-dom'
import Filter from '../components/Filter'
import {useForm} from '../hooks/useForm'
import {planetList} from '../constants/const'
const ListTripsPage = () => {
  const history = useHistory();
  const [trips, setTrips] = useState([]);
  const [tripsOrdenado, setTripsOrdenado] = useState([])

  
  let max2 = 1000;
  trips.forEach((item) => {
      if(item.durationInDays >= max2){
        max2 = item.durationInDays;
      }
  })
  const filtroInicial = {
    name: "",
    ordenacao: "",
    max: max2
  }
  
  const [planets, setPlanets] = useState([true,true, true, true, true, true, true, true]);
  const [dias, setDias] = useState([50,50])
  const [filtro, setFiltro, resetFiltro] = useForm(filtroInicial)
  
  const getTrips = () => {
    axios.get(`${baseUrl}/trips`)
    .then((res) => {
        console.log(res.data.trips);
        setTrips(res.data.trips);
    })
    .catch(() =>{
    })
  }
  
  useEffect(()=>{
    getTrips();
  }, [])

  useEffect(()=>{
    setTripsOrdenado(
      trips.filter((trip) => {
        return !dias[1]  || trip.durationInDays <= dias[1] 
      })
        .filter((trip) => {
          return !dias[0] || trip.value >= dias[0] 
        })
         .filter((trip) => {
           return !filtro.name || (trip.name.toUpperCase().includes(filtro.name.toUpperCase()) || trip.description.toUpperCase().includes(filtro.name.toUpperCase()))
         })
         .filter((trip) => {
            const index = planetList.indexOf(trip.planet)
            return planets[index]
         }) 
    )

  }, [trips, planets, filtro, dias])

  const onClickButton = (id) => {
    window.localStorage.setItem('idSelect', id)
    goToApplicationForm(history)
  }

  const onChangePlanets = (index) =>{
    // alert("oii")
    let planetsAtual = [...planets];
    planetsAtual[index] = !planetsAtual[index];
    setPlanets(planetsAtual)
  }
  const onChangeDias = (e, a) =>{
    setDias(a);
  }
  return <Bory>
  <Nav currentPage="ListTrips"/>
  <Main>
    <Filtro>
      <Filter
      filtro={filtro}
      onChange={setFiltro}
      planets={planets}
      onChangePlanets={onChangePlanets}
      dias={dias}
      setDias={setDias}
      onChangeDias={onChangeDias}
      />
    </Filtro>
    <ListTrips>
    {
        tripsOrdenado.map((trip) => {
          return (
            <CardTrip
            trip={trip}
            textButon="Increver-se"
            onClick={onClickButton}
            />
          )
        })
      }
    </ListTrips>
  </Main>
    </Bory>;
};

export default ListTripsPage;
