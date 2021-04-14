import React from "react"
import {Bory} from '../config/styles'
import Nav from "../components/NavAdmin";
import {logado} from '../constants/logado'
import { useHistory } from "react-router-dom";

const TripDetailsPage = () => {
  const history = useHistory();
  if(logado()){
  return <Bory>
    <Nav currentPage="AdminHome"/>
    TripDetailsPage</Bory>;
       }
       else{
         history.push('/login');
         return <></>;
       }
};

export default TripDetailsPage;
