import styled from "styled-components"
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Box} from '@material-ui/core';
import Carregando from '../Carregando/index'
const CardImg = styled.div`
    height: 425px;
    width: 100%;
    /* background-color: rosybrown; */
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        max-height: 100%;
        max-width: 100%;
    }
`
const CardDescricao = styled.div`
    width: 100%;
  
    position: absolute;
    bottom: -10px;
    padding: 10px !important;
    color: white;
    background-color: #000000aa;
    h2{
        -webkit-text-stroke-width: 0.5px; /* largura da borda */
        -webkit-text-stroke-color: #ffffff; /* cor da borda */
    }
`
const CardProfile = styled.div`
     height: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    padding: 0;
`
function Index() {
    const [person, setPerson] = useState([]);
    const getProfileToChoose = async () => {
        try {
        const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Janaylla/person`);
        console.log(response.data.profile);
        setPerson(response.data.profile);
        } catch (error) {
        // console.log(error.message)
        }
    }
    useEffect(()=> {
        //  getProfileToChoose();
    }, [])

    return (
        <CardProfile>
        <CardImg >
          <img src={person.photo}/>
        </CardImg>
        <CardDescricao>
       <h2> <Box color="primary.light">
            {person.name}, {person.age} </Box></h2> 
            <p>{person.bio}</p>
          
        </CardDescricao>
      
    </CardProfile>
    );
  }
  
  export default Index;
  