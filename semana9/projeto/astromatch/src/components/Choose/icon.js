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
        <span class="material-icons" onClick={() => props.choosePerson(props.id, props.choose)}>
            {props.icone}
        </span>
    </CardChoose>
      
    );
  }
  
  export default Index;
  