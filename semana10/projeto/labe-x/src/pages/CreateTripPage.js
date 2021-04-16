import React from "react";
import {Apresetation, Bory, Main, Centalizar} from '../config/styles'
import Nav  from "../components/NavAdmin";
import {logado} from '../constants/logado'
import { useHistory } from "react-router-dom";
import CreateTripForm from '../components/CreateTripForm'
import {useInputControl} from '../hooks/useInputControl'
import axios from 'axios'
import {useForm} from '../hooks/useForm'
import {baseUrl} from '../constants/axios'
const CreateTripPage = () => {

  const history = useHistory();
  
  const formInicial = {
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  }
  
  const [form, setForm, resetForm] = useForm(formInicial)
  const onClickEnviar = (e) =>{
    e.preventDefault();
    axios
    .post(
      `${baseUrl}/trips`, form, {
        headers: {
          auth: window.localStorage.getItem('token')
        }
      }
    )
    .then((res) => {
      console.log(res.data);
      console.log("Deu certo")
      history.push('/admin/trips/list')
    })
    .catch((err) => {
      console.log(err);
    });
  }
  if(logado()){

  return <Bory>
    <Nav currentPage="CreateTrip"/>
   <Main>
     <Centalizar>
   <CreateTripForm
   name={form.name}
   planet={form.planet}
   date={form.date}
   durationInDays={form.durationInDays}
   onChange={setForm}
   onClickEnviar={onClickEnviar}
   />
   </Centalizar>
   </Main>
      </Bory>;
         }
         else{
           history.push('/login');
           return <></>;
         }
};

export default CreateTripPage;
