import React,{useState, useLayoutEffect} from "react";
import {Bory, Main, Centalizar} from '../config/styles'
import Nav  from "../components/NavAdmin";
import { useHistory } from "react-router-dom";
import CreateTripForm from '../components/CreateTripForm'
import axios from 'axios'
import {useForm} from '../hooks/useForm'
import {baseUrl} from '../constants/axios'
import {goToLogin} from '../constants/routs'

const CreateTripPage = () => {

  const history = useHistory();
  
  useLayoutEffect(() => {
    if(!window.localStorage.getItem('token'))
        goToLogin(history)
  })
 

  const formInicial = {
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  }

  const [openSucesso, setOpenSucesso] = useState();
  const [openError, setOpenError] = useState();
  const [loading, setLoading] = useState(false);
  
  const handleClose = () => {
    setOpenSucesso(false);
    setOpenError(false)
  };

  const [form, setForm, resetForm] = useForm(formInicial)
  const onClickEnviar = (e) =>{
    e.preventDefault();
    setLoading(true)
    axios
    .post(
      `${baseUrl}/trips`, form, {
        headers: {
          auth: window.localStorage.getItem('token')
        }
      }
    )
    .then((res) => {
      // // console.log(res.data);
      // // console.log("Deu certo")
      setOpenSucesso(true)
      setLoading(false)
      resetForm(formInicial)
    })
    .catch((err) => {
      // // console.log(err);
      setOpenError(true)
      setLoading(false)
    });
  }

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
   handleClose={handleClose}
   openSucesso={openSucesso}
   openError={openError}
   loading={loading}
   />
   </Centalizar>
   </Main>
      </Bory>;
};

export default CreateTripPage;
