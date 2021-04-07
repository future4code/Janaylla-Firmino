import CardProfile from '../components/CardProfile';
import styled from "styled-components";
import Choose from '../components/Choose';
import CardMatch from '../components/CardMatch' ;
import Carregando from '../components/Carregando';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios'
const Bory = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
`

function Match() {
   
  const putClear = async () => {
    try {
       await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Janaylla/clear`);
    } catch (error) {
     alert("Erouuu");
    }
  }
  const onClickClear = () => {
    putClear();
  }
  return (
    <Bory> 
        <CardMatch/>
        <Button variant="outlined" size="medium" color="primary" onClick={onClickClear}>
            Limpar Match
        </Button>
    </Bory>

  );
}

export default Match;
