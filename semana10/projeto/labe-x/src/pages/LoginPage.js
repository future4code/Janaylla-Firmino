import React, {useEffect} from "react";
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

  const onClickLogin = () =>{
    console.log("Ema", email, "S", password);
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
        console.log(res.data);
        window.localStorage.setItem('token', res.data.token)
        history.push('/admin/trips/list')
      })
      .catch((err) => {
        console.log(err);
      });
  }
 if(!logado()){
  
  return <Bory>
    <Apresetation>
      <Login
      inputEmail={email}
      inputSetEmail={setEmail}
      inputPassaword={password}
      inputSetPassaword={setPassword}
      onClickLogin={onClickLogin}
      />
    </Apresetation>
  </Bory>;
  }
  else{
    history.push('/admin/trips/list');
    return (<></>)
  }
};

export default LoginPage;
