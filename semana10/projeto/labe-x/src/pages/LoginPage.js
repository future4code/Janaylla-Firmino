import React, {useState, useLayoutEffect} from "react";
import {Apresetation, Bory} from '../config/styles'
import { useHistory } from "react-router-dom";
import {useInputControl} from '../hooks/useInputControl'
import Login from "../components/Login";
import {baseUrl} from '../constants/axios'
import axios from 'axios'
import {logado} from '../constants/logado'

const LoginPage = () => {
  const [email, setEmail] = useInputControl(""); 
  const [password, setPassword] = useInputControl(""); 
  const history = useHistory();
  
  const [openError, setOpenError] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);
  
  useLayoutEffect(() => {
    if(window.localStorage.getItem('token'))
       history.push('/admin/trips/list');
  })

  const handleClose = () => {
    setOpenError(false)
  };
  const onClickLogin = (e) =>{
    e.preventDefault();
    setLoadingForm(true)
    // console.log("Ema", email, "S", password);
    const body = {
      email: email,
      password: password
    };
 
    axios
      .post(
        `${baseUrl}/login`,
        body
      )
      .then((res) => {
        setLoadingForm(false)
        // console.log(res.data);
        window.localStorage.setItem('token', res.data.token)
        history.push('/admin/trips/list')
      })
      .catch((err) => {
        setLoadingForm(false)
        setOpenError(true)
        // console.log(err);
      });
  }  
  return <Bory>
    <Apresetation>
      <Login
      inputEmail={email}
      inputSetEmail={setEmail}
      inputPassaword={password}
      inputSetPassaword={setPassword}
      onClickLogin={onClickLogin}
      handleClose={handleClose}
      openError={openError}
      loadingForm={loadingForm}
      />
    </Apresetation>
  </Bory>;
};

export default LoginPage;
