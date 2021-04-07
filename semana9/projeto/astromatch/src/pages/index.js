import CardProfile from '../components/CardProfile'
import styled from "styled-components"
import Choose from '../components/Choose'
import Nav from '../components/Nav'
import Carregando from '../components/Carregando'
import React, { useState, useEffect } from 'react';

import axios from 'axios'
const Bory = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
`

function Index() {
  const [person, setPerson] = useState({});
  const getProfileToChoose = async () => {
    try {
      const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Janaylla/person`);
      console.log(response.data.profile);
      setPerson(response.data.profile);
     console.log(Object.keys(response.data.profile).length === 0)
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
    } catch (error) {
     alert("Erouuu")
    }
  }
  useEffect(() => {
    getProfileToChoose();
  }, []);

  const choosePerson = (id, escolha) => {
    postChoosePerson(id, escolha);
  }
  return (
    <Bory> 
      {person && Object.keys(person).length !== 0 ?
      <>
      <CardProfile
        photo={person.photo}
        name={person.name}
        age={person.age}
        bio={person.bio}
      />
      <Choose 
        id={person.id}
        choosePerson={choosePerson}/>
      </>
    :<>
    <Carregando/>
    </> }
    </Bory>

  );
}

export default Index;
