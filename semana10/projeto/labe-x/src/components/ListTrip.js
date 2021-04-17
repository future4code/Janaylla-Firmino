import React, {useState, useEffect} from "react";
import {Bory, Main, Filtro, ListTrips, CentalizarProgess} from '../config/styles'
import Nav from "../components/Nav";
import axios from 'axios';
import CardTrip from "../components/CardTrip";
import {baseUrl} from '../constants/axios'
import {goToApplicationForm, goToTripDetails} from '../constants/routs'
import {useHistory} from 'react-router-dom'
import Filter from '../components/Filter'
import {useForm} from '../hooks/useForm'
import {planetList} from '../constants/const'
import CircularProgress from '@material-ui/core/CircularProgress';

const ListTripsP = ({page}) => {
const history = useHistory();
const [trips, setTrips] = useState([]);
const [tripsOrdenado, setTripsOrdenado] = useState([])
const [loading, setLoading] = useState(true)

  const filtroInicial = {
    name: "",
    ordenacao: "Relevantes"
  }

  const [planets, setPlanets] = useState([true,true, true, true, true, true, true, true]);
  const [dias, setDias] = useState([50,50])
  const [filtro, setFiltro, resetFiltro] = useForm(filtroInicial)
  const [max, setMax] = useState(50)

  const getTrips = () => {
    setLoading(true)
    axios.get(`${baseUrl}/trips`)
    .then((res) => {
        console.log(res.data.trips);
        setTrips(res.data.trips);
        const lista = res.data.trips.sort((a, b) => {
          return a.durationInDays - b.durationInDays
        })
        setLoading(false)
        setMax(lista[lista.length - 1].durationInDays)
       
    })
    .catch(() =>{
      alert("Algo deu errado :(, recarregue a página e tente novamente")
    })
  }
  

  useEffect(()=>{
          getTrips();
  }, [])

 
  
  const orderByFilter = (allTrips) => {
    return allTrips.filter((trip) => {
      return (!dias[1] || dias[1] === 50)  || trip.durationInDays <= dias[1] 
    })
      .filter((trip) => {
        return (!dias[0] || dias[0] === 50) || trip.durationInDays >= dias[0] 
      })
       .filter((trip) => {
         return !filtro.name || (trip.name.toUpperCase().includes(filtro.name.toUpperCase()) || trip.description.toUpperCase().includes(filtro.name.toUpperCase()))
       })
       .filter((trip) => {
          const index = planetList.indexOf(trip.planet)
          return planets[index]
       })
  }
  
 const orderBy = (allTrips, filtroOrdena) => {
    switch (filtroOrdena) {
      case "Nome (A-z)":
        return trips.sort((a, b) => {
          return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
        })
        case "Nome (Z-a)":
          return (orderBy(allTrips, "Nome (A-z)").reverse()) 
      case "Dias (Crescente)":
        return trips.sort((a, b) => {
          return a.durationInDays - b.durationInDays
        })
        case "Dias (Decrescente)":
          return (orderBy(allTrips, "Dias (Crescente)").reverse()) 
          
      case "Data (Crescente)":
        let intermediateArray = [...trips]
        let arrayWithOrderNumber = intermediateArray.map((trip) => {
          let array = trip.date.split('-')
          let dayNumber = Number(array[2]) + 30 * Number(array[1]) + 365 * Number(array[0]) 
          // console.log("Numero", array[0])
          let jobWithOrderNumber = { ...trip, orderNumber: dayNumber }
         
          return jobWithOrderNumber  
          
        })
      
        let orderedArray = arrayWithOrderNumber.sort((a, b) => {
          return a.orderNumber - b.orderNumber
        })
        orderedArray.forEach((trip) => {
          delete trip.orderNumber
        })
        return orderedArray
        case "Data (Decrescente)":
          return (orderBy(allTrips ,"Data (Crescente)").reverse())

          case "Relevantes":
            return allTrips;
    }
  }

  useEffect(()=>{
    setTripsOrdenado(
      orderByFilter(orderBy(trips, filtro.ordenacao))
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
//   alert((page === "Admin"));
const onClickExcluir = (id) =>{
   
    axios
    .delete(
      `${baseUrl}/trips/${id}`, {
        headers: {
          auth: window.localStorage.getItem('token')
        }
      }
    )
    .then((res) => {
      console.log("Deu certo");
      getTrips()
    })
    .catch((err) => {
      console.log(err);
    });

}
const onClickVerDetalhes = (id) =>{
    goToTripDetails(history, id)
  }
  return (<Main>
    <Filtro>
      <Filter
      filtro={filtro}
      onChange={setFiltro}
      planets={planets}
      onChangePlanets={onChangePlanets}
      dias={dias}
      setDias={setDias}
      onChangeDias={onChangeDias}
      max={max}
      />
    </Filtro> 
    <ListTrips>
      <h4>Quantidade de viagens encontradas: {tripsOrdenado.length}</h4>
      
      {loading ? 
      <CentalizarProgess> <CircularProgress/> </CentalizarProgess>
        :
        (page === "Admin" && window.localStorage.getItem('token'))
        ?
        tripsOrdenado.map((trip) => {
            return (
              <CardTrip
              trip={trip}
              textButon="Ver detalhes"
              onClick={() => onClickVerDetalhes(trip.id)}
              onClickExcluir={onClickExcluir}
              />
            )
          })
          :
          tripsOrdenado.map((trip) => {
            return (
              <CardTrip
              trip={trip}
              textButon="Inscrever-se"
              onClick={onClickButton}
              />
            )
          })
      }
    </ListTrips>
  </Main>)
};
export default ListTripsP;
