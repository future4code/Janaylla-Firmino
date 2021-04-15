import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { goToAdminHome} from "../constants/routs";
import {planet} from '../constants/const'
import {FormControlLogin, InputLabelLogin, FormCreate, ButtonLogin, DivButtons, TextFieldLogin, DivFormDois} from '../config/styles'
import {TextField, MenuItem} from '@material-ui/core'

const CreateTrip = (props) => {
    
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
            value={props.name}
            onChange={props.setName}
        />
           <TextFieldLogin
          id="filled-select-currency"
          select
          label="Planeta"
          value={props.planet}
          onChange={props.setPlanet}
          variant="filled"
        >
          {planet.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextFieldLogin>
          <TextFieldLogin
          id="filled-multiline-static"
          label="Descrição"
          multiline
          rows={2}
          variant="filled"
          onChange={props.setDescription}
          value={props.description}
        />
          <DivFormDois>
            <div>
      <TextFieldLogin
    id="date"
    label="Data da Viagem"
    type="date"
    variant="filled"
    value={props.date}
    onChange={props.setDate}
    InputLabelProps={{
      shrink: true,
    }}
    fullWidth
  /></div>
  <div>
  <TextFieldLogin
  fullWidth
  id="date"
  label="Quandade de dias:"
  type="number"  
  variant="filled"
  InputLabelProps={{
  shrink: true,
  }}
  value={props.durationInDays}
  onChange={props.setDurationInDays}
  
/>
</div>
  </DivFormDois>
      </FormControlLogin >
  
 
          <DivButtons>
            <ButtonLogin 
          variant="contained"
          color="primary"
          startIcon={<span class="material-icons">
          </span>}
            onClick={props.onClickEnviar}
          >Nova Viagem
          </ButtonLogin>
          <ButtonLogin 
          variant="outlined"
          color="primary"
          onClick={() => goToAdminHome(history)}
          startIcon={<span class="material-icons">
          </span>}
          >Cancelar
          </ButtonLogin>
          </DivButtons>
      </FormCreate>
    )
};

export default CreateTrip;
