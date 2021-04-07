import styled from "styled-components"
import React from 'react';
import {Box} from '@material-ui/core';
const CardImg = styled.div`
    height: 100%;
    width: 100%;
     /* background-color: rosybrown;  */
    display: flex;
    align-items: center;
    justify-content: center;
    
    img{
        max-height: 100%;
        max-width: 100%;
    }
`
const CardDescricao = styled.div`
    position: absolute;
    bottom: 0px;
    padding: 10px !important;
    color: white;
    background-color: #000000aa;
    width: 100%;
    h2{
        -webkit-text-stroke-width: 0.5px; /* largura da borda */
        -webkit-text-stroke-color: #ffffff; /* cor da borda */
    }
`
const CardProfile = styled.div`
     height: calc(70% - 40px);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    margin: 20px;
    width: calc(100% - 40px);
`
function Index(props) {
        return (
        <CardProfile>
        <CardImg >
          <img src={props.photo}/>
        </CardImg>
        <CardDescricao>
             <h2> <Box color="primary.light">
            {props.name}, {props.age} </Box></h2> 
            <p>{props.bio}</p>
        </CardDescricao>
    </CardProfile>
    );
  }
  
  export default Index;
  