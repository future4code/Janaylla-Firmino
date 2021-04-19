import React from "react";
import {Bory, Apresetation, ButtonApresetation, TextApresentation, DivButtons} from "../config/styles";
import { useHistory } from "react-router-dom";
import {goToListTrip, goToLogin} from "../constants/routs";

const HomePage = () => {
  
  const history = useHistory();

  return <Bory>
    <Apresetation>
      
      <TextApresentation>
      <h2>
      Já pensou em viajar para outro planeta (ou para a lua)? Agora você pode a Labe-x leva você, veja as nossas opções de vigem e e se candidate-se em quantas desejar.
      </h2>
      </TextApresentation>
      <DivButtons>
      <ButtonApresetation 
      variant="contained"
      size="large" 
      color="primary"
      startIcon={<span class="material-icons">
      luggage
      </span>}
      onClick={() => goToListTrip(history)}>Viagens Disponiveis</ButtonApresetation>
      
      <ButtonApresetation 
      color="primary"
      variant="contained"
      size="large" 
      startIcon={<span class="material-icons">
      lock
      </span>}
      onClick={() => goToLogin(history)}>Sou adm</ButtonApresetation>
      </DivButtons>
    </Apresetation>
    </Bory>;
};

export default HomePage;
