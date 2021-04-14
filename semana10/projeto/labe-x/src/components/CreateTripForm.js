import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { goToHome, goToListTrip, goToApplicationForm} from "../constants/routs";

import {FormControlLogin, InputLabelLogin, FormCreate, ButtonLogin, DivButtons, TextFieldLogin, DivFormDois} from '../config/styles'
import {TextField, MenuItem} from '@material-ui/core'
const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  
const CreateTrip = (props) => {
    
  const [typePassaword, setTypePassaword] = useState(false);
  const handleClickShowPassword = () => {
    setTypePassaword(!typePassaword);
  };
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const history = useHistory();
  return(
    <FormCreate>
      <FormControlLogin variant="filled" fullWidth>
            <TextFieldLogin
            id="date"
            label="Nome"
            type="text"  
            variant="filled"
            InputLabelProps={{
            shrink: true,
            }}
        />
           <TextFieldLogin
          id="filled-select-currency"
          select
          label="Planeta"
          value={currency}
          onChange={handleChange}
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextFieldLogin>
          <TextFieldLogin
          id="filled-multiline-static"
          label="Descrição"
          multiline
          rows={3}
          variant="filled"
        />
       
      </FormControlLogin >
     <DivFormDois>
      <TextFieldLogin
    id="date"
    label="Data da Viagem"
    type="date"
    defaultValue="2020-05-24"     
    variant="filled"
    InputLabelProps={{
      shrink: true,
    }}
  />
  <p>até</p>
   <TextFieldLogin
    id="date"
    label="Data do fim viagem"
    type="date"
    defaultValue="2020-05-24"     
    variant="filled"
    InputLabelProps={{
      shrink: true,
    }}
  />
  </DivFormDois>
  <TextFieldLogin
  id="date"
  label="Quandade de dias:"
  type="number"  
  variant="filled"
  InputLabelProps={{
  shrink: true,
  }}
/>
          <DivButtons>
            <ButtonLogin 
          variant="contained"
          color="primary"
          startIcon={<span class="material-icons">
          </span>}
          >Nova Viagem
          </ButtonLogin>
          <ButtonLogin 
          variant="outlined"
          color="primary"
          onClick={() => goToHome(history)}
          startIcon={<span class="material-icons">
          </span>}
          >Cancelar
          </ButtonLogin>
          </DivButtons>
      </FormCreate>
    )
};

export default CreateTrip;
