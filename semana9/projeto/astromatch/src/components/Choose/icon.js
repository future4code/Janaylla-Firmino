import styled from "styled-components"
import React from 'react';


function Index(props) {
    const CardChoose = styled.div`
      width: 90px;
      height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
   
    
  span{
      font-size: 80px;
      cursor: pointer;
      color:${props.color};
      opacity: 0.8;
      /* content: 'favorite' !important; */
      transition: 0.3s ease-in;
      :hover{
          font-size: 100px;
          opacity: 1;
      }
  }
  h3{
      content: 'whatever it is you want to add';
  }
  `
    return (
      <CardChoose>
        <span class="material-icons" onClick={() => props.choosePerson(props.id, props.choose)}>
            {props.icone}
        </span>
    </CardChoose>
      
    );
  }
  
  export default Index;
  