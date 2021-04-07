import styled from "styled-components"
import React from 'react';
import {Box} from '@material-ui/core';

const Nav = styled.nav`
    width: 100%;
    justify-content: space-around;
    align-items: center;
    position: relative;
    display: flex;
    border-bottom: 1px solid black;
    height: 10%;
    > #match{
    font-size: 40px;
    width: 80px;
     align-items: center;
     display: flex;
     justify-content: center;
     letter-spacing: -13px;
     cursor: pointer;
     color: black;
      opacity: 0.7;
      :hover{
        opacity: 1;
      }
       div:nth-of-type(2){
        font-size: 30px;
     }
     h2{
      font-size: 40px !important;
      display: flex;
      flex-wrap:nowrap;
    justify-content: space-around;
    align-items: center;

     }
  }

  
  > #home{
    font-size: 40px !important;
    width: 80px;
    
     align-items: center;
     display: flex;
     justify-content: center;
     letter-spacing: -10px;
     cursor: pointer;
     color: black;
      opacity: 0.7;
      :hover{
        opacity: 1;
      }
      div:nth-of-type(n+2){
        font-size: 20px;
        letter-spacing: -5px;
        
       align-self: flex-start;
     }
  
  }
  h2{
      font-size: 30px;
      display: flex;
      flex-wrap:nowrap;
    justify-content: space-around;
    align-items: center;
  cursor: pointer;
      }
`
function Index(props) {
   
    return (
      <Nav>
       <Box color="primary.main"><h2 onClick={() => props.setPage("match")}>astroMatch</h2></Box>
       { props.page === "match" ?
        <span class="material-icons" id="match" onClick={() => props.setPage("home")}>
             <Box>perm_identity</Box>
        <Box color="primary.main">favorite</Box>
        <Box>perm_identity</Box>
         </span>     
       :
        <span class="material-icons" id="home" onClick={() => props.setPage("match")}>
        <Box>perm_identity</Box>
          <Box color="primary.main">favorite</Box>
          <Box>add</Box>
        </span> 

      }
      </Nav>
      
    );
  }
  
  export default Index;
  