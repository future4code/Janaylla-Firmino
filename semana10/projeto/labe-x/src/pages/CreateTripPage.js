import React from "react";
import {Apresetation, Bory, Main} from '../config/styles'
import Nav  from "../components/NavAdmin";
import {logado} from '../constants/logado'
import { useHistory } from "react-router-dom";
import CreateTripForm from '../components/CreateTripForm'
import {useInputControl} from '../hooks/useInputControl'
const CreateTripPage = () => {
  const history = useHistory();
  const [email, setEmail] = useInputControl(""); 
    const [password, setPassword] = useInputControl(""); 
  if(logado()){
    
  return <Bory>
   <Apresetation>
   <CreateTripForm
      /></Apresetation>
      </Bory>;
         }
         else{
           history.push('/login');
           return <></>;
         }
};

export default CreateTripPage;
