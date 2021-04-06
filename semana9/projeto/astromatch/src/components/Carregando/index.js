import styled, { keyframes } from "styled-components"
import React, { useState, useEffect } from 'react';
import axios from 'axios'

import {Box} from '@material-ui/core';
const fadeIn = keyframes`
  0% {
   
    opacity: 0;
  }
  100% {
    opacity: 1;
    
  }
`
const IconesCarregando = styled.div`
  display: flex;
  span{
      font-size: 40px;
  }
  span:nth-of-type(n+1){
    animation: 2s ${fadeIn} ease-out infinite; 
    transition-timing-function: cubic-bezier(1,-1,1,1);
    animation-delay: 0s;
    opacity: 0;
  }
  span:nth-of-type(n+2){
    animation: 2s ${fadeIn} ease-out infinite; 
    transition-timing-function: cubic-bezier(.8,-1,1,1);
    animation-delay: 0.4s;
    opacity: 0;
  }
  span:nth-of-type(n+3){
    animation: 2s ${fadeIn} ease-out infinite;  
    transition-timing-function: cubic-bezier(.6,-1,1,1);
    animation-delay: 0.8s;
    opacity: 0;
  }
  span:nth-of-type(n+4){
    animation: 2s ${fadeIn} ease-out infinite; 
    transition-timing-function: cubic-bezier(.4,-1,1,1);
    animation-delay: 1.2s;
    opacity: 0;
  }
  span:nth-of-type(n+5){
    animation: 2s ${fadeIn} ease-out infinite; 
    transition-timing-function: cubic-bezier(.2,0,1,1);
    animation-delay: 1.6s;
    opacity: 0;
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
