import React, {useEffect, useState} from "react";
import {Bory, Centalizar, Main, MainLeft, MainRight} from '../config/styles'
import Nav from "../components/Nav";
import ApplyTrip from '../components/ApplyTripForm';
import axios from 'axios';
import {baseUrl} from '../constants/axios';
import {useForm} from '../hooks/useForm';
import { CircularProgress } from "@material-ui/core";

import { goToListTrip} from "../constants/routs";
import TripsInformation from '../components/TripsInformation';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ApplicationFormPage = () => {
  const [trips, setTrips] = useState([]);
  const history = useHistory();
  const id = window.localStorage.getItem('idSelect') ? window.localStorage.getItem('idSelect') : "";
  const formInicial = {
    id: id,
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: ""
  }
  
  const [form, setForm, resetForm] = useForm(formInicial)
  const [loading, setLoading] = useState(true);
  const getTrips = () => {
    setLoading(true)
      axios.get(`${baseUrl}/trips`)
      .then((res) => {
      // console.log(res.data.trips);
      setTrips(res.data.trips);
      setLoading(false)
  })
  .catch(() =>{
    alert("Algo deu errado :(, recarregue a página e tente novamente")
  })
}
  
const [openSucesso, setOpenSucesso] = useState();
const [openError, setOpenError] = useState();
const [loadingForm, setLoadingForm] = useState(false);

 
const handleClose = () => {
  setOpenSucesso(false);
  setOpenError(false)
};
const AppyTrips = (e) => {
    e.preventDefault();
    setLoadingForm(true)
  const body = {
    name: form.name,
    age: form.age,
    applicationText: form.applicationText,
    profession: form.profession,
    country: form.country
  }
  // // console.log(body, form.id)
  axios.post(`${baseUrl}/trips/${form.id}/apply`, body)
  .then((res) => {
    // // console.log("Deu Certo")
    setOpenSucesso(true)
    setLoadingForm(false)
    resetForm(formInicial)
  })
  .catch((err) =>{
    // // console.log(err)
    setOpenError(true)
    setLoadingForm(false)
  })
}
useEffect(()=>{
  getTrips();
}, [])

  return <Bory>
    <Nav currentPage="ApplicationForm" />
    <Main>
      <MainLeft>
      {loading ? <Centalizar>
       <CircularProgress/>
     </Centalizar>:
     <TripsInformation
       id={form.id}
       trips={trips}/>
       
     }
       
      </MainLeft>
      <MainRight>
        <Centalizar>
        <ApplyTrip
        id={form.id}
        name={form.name}
        age={form.age}
        applicationText={form.applicationText}
        profession={form.profession}
        country={form.country}
        onChange={setForm}
        onClickEnviar={AppyTrips}
        trips={trips}
        handleClose={handleClose}
        openSucesso={openSucesso}
        openError={openError}
        loadingForm={loadingForm}
        loading={loading}
        />
        </Centalizar>
      </MainRight>
    </Main>
    </Bory>;
};

export default ApplicationFormPage;
