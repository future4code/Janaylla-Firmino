import styled, { keyframes } from "styled-components"
import React, { useState, useEffect } from 'react';
import axios from 'axios'

import {Box} from '@material-ui/core';
const fadeIn = keyframes`
  0% {
   
    opacity: 0;
  }
  99% {
    opacity: 1;
    
  }
`
const IconesCarregando = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span{
      font-size: 40px;
      
    opacity: 0;
  }
  span:nth-of-type(n+1){
    animation: 2s ${fadeIn} infinite; 
    transition-timing-function: cubic-bezier(1,-1,1,1);
    animation-delay: 0s;
  }
  span:nth-of-type(n+2){
    animation: 2s ${fadeIn} infinite; 
    transition-timing-function: cubic-bezier(.8,-1,1,1);
    animation-delay: 0.4s;
  }
  span:nth-of-type(n+3){
    animation: 2s ${fadeIn} infinite;  
    transition-timing-function: cubic-bezier(.6,-1,1,1);
    animation-delay: 0.8s;
  }
  span:nth-of-type(n+4){
    animation: 2s ${fadeIn} infinite; 
    transition-timing-function: cubic-bezier(.4,-1,1,1);
    animation-delay: 1.2s;
  }
  span:nth-of-type(n+5){
    animation: 2s ${fadeIn} ease-out infinite; 
    transition-timing-function: cubic-bezier(.2,0,1,1);
    animation-delay: 1.6s;
  }
`

function Index() {


    return (
        <IconesCarregando>
            <Box  color="primary.main">
            <span class="material-icons">
                favorite
            </span>
            <span class="material-icons">
                favorite
            </span>
            <span class="material-icons">
                favorite
            </span>
            <span class="material-icons">
                favorite
            </span>
            <span class="material-icons">
                favorite
            </span>
            </Box>
        </IconesCarregando>

    );
}

export default Index;
