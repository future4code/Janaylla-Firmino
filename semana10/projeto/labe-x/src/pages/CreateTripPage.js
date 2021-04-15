import React from "react";
import {Apresetation, Bory, Main, Centalizar} from '../config/styles'
import Nav  from "../components/NavAdmin";
import {logado} from '../constants/logado'
import { useHistory } from "react-router-dom";
import CreateTripForm from '../components/CreateTripForm'
import {useInputControl} from '../hooks/useInputControl'
import axios from 'axios'

import {baseUrl} from '../constants/axios'
const CreateTripPage = () => {

  const history = useHistory();
  
  const [name, setName] = useInputControl(""); 
  const [planet, setPlanet] = useInputControl(""); 
  const [date, setDate] = useInputControl(""); 
  const [description, setDescription] = useInputControl(""); 
  const [durationInDays, setDurationInDays] = useInputControl("");
  
  const onClickEnviar = () =>{
    const body = {
      name, planet, date, date, description, durationInDays
    };
   
     console.log(body)
    axios
    .post(
      `${baseUrl}/trips`,body, {
        headers: {
          auth: window.localStorage.getItem('token')
        }
      }
    )
    .then((res) => {
      console.log(res.data);
      console.log("Deuu certo")
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
   name={name}
   setName={setName}
   planet={planet}
   setPlanet={setPlanet}
   date={date}
   setDate={setDate}
   description={description}
   setDescription={setDescription}
   durationInDays={durationInDays}
   setDurationInDays={setDurationInDays}
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
