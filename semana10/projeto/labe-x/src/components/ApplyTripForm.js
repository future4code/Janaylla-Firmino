import React,{useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { goToAdminHome} from "../constants/routs";
import {FormControlLogin, FormCreate, ButtonLogin, DivButtons, TextFieldLogin, DivFormDois} from '../config/styles'
import {TextField, MenuItem} from '@material-ui/core'
import {paises} from '../constants/const'

const ApplyTrip = ({id, name, age, applicationText, profession, country, onChange, trips, onClickEnviar}) => {
   
  const history = useHistory();
 
  return(
    <FormCreate>
      <FormControlLogin variant="filled" fullWidth>
           <TextFieldLogin
          id="filled-select-currency"
          select
          label="Viagem"
          value={id}
          onChange={onChange}
          variant="filled"
          name={"id"}
        >
          {trips.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))
          }
        </TextFieldLogin>
        <TextFieldLogin
          id="filled-multiline-static"
          label="Nome"
          variant="filled"
          onChange={onChange}
          name={"name"}
          value={name}
        />
         <DivFormDois>
            <div>
        <TextFieldLogin
          id="filled-select-currency"
          select
          label="País de origem"
          value={country}
          variant="filled"
          fullWidth
          name="country"
          onChange={onChange}
        >
          {paises.map((option) => (
            <MenuItem key={option} value={option} >
              {option}
            </MenuItem>
          ))
          }
        </TextFieldLogin>
         </div>
         <div>
         <TextFieldLogin
    id="age"
    label="Idade"
    type="number"
    variant="filled"
    value={age}
    onChange={onChange}
    InputLabelProps={{
      shrink: true,
    }}
    fullWidth
    name={"age"}
  />
         </div>
         </DivFormDois>
         <TextFieldLogin
          id="filled-multiline-static"
          label="Profissão"
          variant="filled"
          onChange={onChange}
          value={profession}
          name={"profession"}
        />
         <TextFieldLogin
          id="filled-multiline-static"
          label="Porquê devemos te escolher?"
          multiline
          rows={2}
          variant="filled"
          onChange={onChange}
          value={applicationText}
          name={"applicationText"}
        />
</FormControlLogin >
          <DivButtons>
            <ButtonLogin 
          variant="contained"
          color="primary"
          startIcon={<span class="material-icons">
          </span>}
            onClick={onClickEnviar}
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

export default ApplyTrip;
