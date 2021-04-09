import CardProfile from '../components/CardProfile';
import styled from "styled-components";
import Choose from '../components/Choose';
import CardMatch from '../components/CardMatch';
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
   height: 90%;
   position: relative;
    /* background-color: yellow; */
    overflow: auto;  
    
   ::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}

::-webkit-scrollbar-track {
  background: #dd3333aa;        /* color of the tracking area */
  border-radius: 20px;
}
::-webkit-scrollbar-thumb {
  background-color: #d50000;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid #950000;  /* creates padding around scroll thumb */
}
  >div{
    height: auto;
    min-height:100%;
    width: 100%;
    display: flex; 
    padding: 0px 0px;
      /* background-color: red; */
    justify-content: center; 
    align-items: center;
    flex-direction:column;
     align-self: center;
     top: 0px;
     position: absolute;
     button{
       margin: 20px 0px ;
       transition: 0.3s ease-in;
       :hover{
         transform: scale(1.05);
       }
     }
   }
   h3{
      text-align: center;
      width: 100%;
   }
`

  const CardMatches = styled.div`
   position: relative;
   flex-direction: column;
   width: 100%;
   top: 0px;
   
   /* background-color: yellow; */
 
`
  const [match, setMatch] = useState([]);
  const [redenrizou, setRedenrizou] = useState(false);


  const getMatch = async () => {
    try {
      const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Janaylla/matches`);
      console.log(response.data.matches);
      setMatch(response.data.matches);
      setRedenrizou(true);
    } catch (error) {
      // console.log(error.message)
      
      setRedenrizou(true);
    }
  }
  useEffect(() => {
    getMatch();
  }, [])

  const putClear = async () => {
    try {
      await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Janaylla/clear`);
      getMatch();
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
          {match.length !== 0 ?

            match.map((person) => {
              return (<CardMatch
                photo={person.photo}
                name={person.name}
              />)
            }
            )
            :<>
            {redenrizou &&<> <h3>Você não tem nenhum matche :{"("}</h3><h3>
            (O deletar serve para matches dados mesmo os não correspondidos)</h3> </>}
            <Carregando />
            </>
          }</CardMatches>
        <Button variant="outlined" size="medium" color="primary" onClick={onClickClear}>
          <spam class="material-icons">delete</spam>
          Matches
        </Button>
      </div>
    </Bory>

  );
}

export default Match;
