import styled from "styled-components"
import React from 'react';
import ICon from './icon';

const CardChoose = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    padding: 0;
    height: 30%;
`
function Index(props) {
   
    return (
      <CardChoose>
          <ICon
            color="red"
            iconeHover="close"
            icone="close"
          />
          <ICon
            color="green"
            iconeHover="favorite"
            icone="favorite_border"
          />
          
      </CardChoose>
      
    );
  }
  
  export default Index;
  