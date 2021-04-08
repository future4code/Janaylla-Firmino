import CardProfile from '../components/CardProfile'
import styled from "styled-components"
import Choose from '../components/Choose'
import Carregando from '../components/Carregando'
import React, { useState, useEffect } from 'react';

import axios from 'axios'
const Bory = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 100%;
    flex-direction: column;
    h3{
      align-self: center;
      padding: 0 60px;
      text-align: center;
    }
`

function Index(props) {
  const [person, setPerson] = useState({});
  const [redenrizou, setRedenrizou] = useState(false);
  // const [matchesLength, setMatchesLength] = useState(0);
  const getProfileToChoose = async () => {
    try {
      const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Janaylla/person`);
      console.log(response.data.profile);
      setPerson(response.data.profile);
      setRedenrizou(true);
      console.log(Object.keys(response.data.profile).length === 0)
    } catch (error) {
      console.log(person)
        setRedenrizou(true);
        setPerson({});   
      
     
    }
  }
  const getMatch = async () => {
    try {
      const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Janaylla/matches`);
      console.log(response.data.matches.length);
      // setMatchesLength(response.data.matches.length);
      props.matchesLength(response.data.matches.length);
    } catch (error) {
      // console.log(error.message)
    }
  }
  const postChoosePerson = async (id, choice) => {
    const bory = {
        id: id,
        choice: choice
    }
    try {
       await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Janaylla/choose-person`, bory);
      getProfileToChoose();
      getMatch();
    } catch (erro) {
    }
  }
  useEffect(() => {
    getProfileToChoose();
    getMatch();
  }, []);

  const choosePerson = (id, escolha) => {  
    setRedenrizou(false);
    setPerson({});
    postChoosePerson(id, escolha);   
  }
  
  return (
    <Bory> 
      {person && Object.keys(person).length !== 0 && redenrizou?
      <>
      <CardProfile
        photo={person.photo}
        name={person.name}
        age={person.age}
        bio={person.bio}
      />
      <Choose 
        id={person.id}
        choosePerson={choosePerson}
        />
      </>
    :<> 
    {redenrizou && <h3>Acabaram os perfis para você ver. Vá olhar seus matches acessando o ícone no topo da página ;{")"}</h3>} 
    <Carregando/>
    </>
    }
    </Bory>

  );
}

export default Index;
