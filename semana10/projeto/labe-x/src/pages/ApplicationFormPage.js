import React, {useEffect, useState} from "react";
import {Bory, Centalizar, Main, MainLeft, MainRight} from '../config/styles'
import Nav from "../components/Nav";
import ApplyTrip from '../components/ApplyTripForm';
import axios from 'axios';
import {baseUrl} from '../constants/axios';
import {useForm} from '../hooks/useForm';

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

  const getTrips = () => {
  axios.get(`${baseUrl}/trips`)
  .then((res) => {
      console.log(res.data.trips);
      setTrips(res.data.trips);
  })
  .catch(() =>{
  })
}
const AppyTrips = () => {
  const body = {
    name: form.name,
    age: form.age,
    applicationText: form.applicationText,
    profession: form.profession,
    country: form.country
  }
  console.log(body, form.id)
  axios.post(`${baseUrl}/trips/${form.id}/apply`, body)
  .then((res) => {
    console.log("Deu Certo")
    goToListTrip(history);
  })
  .catch((err) =>{
    console.log(err)
  })
}
useEffect(()=>{
  getTrips();
}, [])
const onClickEnviar = () => {
  
  AppyTrips()
}
  return <Bory>
    <Nav currentPage="ApplicationForm" />
    <Main>
      <MainLeft>
        <TripsInformation
       id={form.id}
       trips={trips}/>
       
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
        onClickEnviar={onClickEnviar}
        trips={trips}
        />
        </Centalizar>
      </MainRight>
    </Main>
    </Bory>;
};

export default ApplicationFormPage;
