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
    height: 20%;
`
function Index(props) {
   
    return (
      <CardChoose>
          <ICon
            color="red"
            icone="close"
            choosePerson={props.choosePerson}
            id={props.id}
            chooseValue={false}
          />
          <ICon
            color="green"
            icone="favorite"
            choosePerson={props.choosePerson}
            id={props.id}
            choose={true}
          />
          
      </CardChoose>
      
    );
  }
  
  export default Index;
  