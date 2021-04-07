import CardProfile from '../components/CardProfile';
import styled from "styled-components";
import Choose from '../components/Choose';
import CardMatch from '../components/CardMatch' ;
import Carregando from '../components/Carregando';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios'

function Match() {
  const Bory = styled.div`
  display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   flex-direction: column;
   overflow: auto;
    
    height: 90%;
    /* background-color: yellow; */
   >div{
     bottom: 10px;
      height: 100%;
      width: 100%;
      display: flex; 
      padding: 0px 0px;
      /* background-color: red; */
    justify-content: center; 
    align-items: center;
     flex-direction:column;
    margin: 10px 0px ;
     button{
       margin: 20px 0px ;
     }
   }
`
const CardMatches = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: flex-start;
   position: relative;
   flex-direction: column;
   width: 100%;
`
  const [match, setMatch] = useState([]);


  const getMatch = async () => {
    try {
      const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Janaylla/matches`);
      console.log(response.data.matches);
      setMatch(response.data.matches);
     console.log(Object.keys(response.data.profile).length === 0)
    } catch (error) {
      // console.log(error.message)
    }
  }
  useEffect(() => {
    getMatch();
  }, [])

  const putClear = async () => {
    try {
       await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Janaylla/clear`);
    } catch (error) {
     alert("Erouuu");
    }
  }
  const onClickClear = () => {
    putClear();
  }
  return (
    <Bory>
      <div>
        <CardMatches>
          {match.map((person) => {
            return (<CardMatch
            photo={person.photo}
            name={person.name}
            />)
          }
          )}
      
        
        </CardMatches>
          <div>
        <Button variant="outlined" size="medium" color="primary" onClick={onClickClear}>
            Limpar Matches
        </Button>
        </div>
        </div>
    </Bory>

  );
}

export default Match;
