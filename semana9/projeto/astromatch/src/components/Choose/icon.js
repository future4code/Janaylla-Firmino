import styled from "styled-components"
import React from 'react';
import { PinDropSharp } from "@material-ui/icons";


function Index(props) {
    const CardChoose = styled.div`
      width: 90px;
      height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
    :hover{
       span:first-of-type{
             display: none;
         }
         span:last-of-type{
           display: initial;
         }
      }
      span:last-of-type{
           display: none;
      }
    
  span{
   
     
      font-size: 80px;
      cursor: pointer;
      color:${props.color};
      /* content: 'favorite' !important; */
      :hover{
          font-size: 100px;
      }
  }
  h3{
      content: 'whatever it is you want to add';
  }
  `
    return (
      <CardChoose>
        <span class="material-icons">
            {props.icone}
        </span>
        <span class="material-icons">
        {props.iconeHover}
        </span>
    </CardChoose>
      
    );
  }
  
  export default Index;
  