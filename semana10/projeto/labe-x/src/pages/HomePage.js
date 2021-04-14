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
      Etiam aliquam fringilla ante nec aliquam. In consequat ipsum tellus, eu iaculis sem ultricies id. Fusce tristique cursus nunc eget dignissim. Nam eget venenatis mi, ac porta justo.
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
