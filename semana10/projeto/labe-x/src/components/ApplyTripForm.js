import React,{useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { goToListTrip} from "../constants/routs";
import {FormControlLogin, FormCreate, ButtonForm, DivButtons, TextFieldLogin, DivFormDois, SnackbarGreen, SnackbarRed} from '../config/styles'
import {TextField, MenuItem, LinearProgress} from '@material-ui/core'
import {paises} from '../constants/const'

const ApplyTrip = ({id, name, age, applicationText, profession, country, onChange, trips, onClickEnviar, handleClose, openError, openSucesso, loading, loadingForm}) => {
   
  const history = useHistory();
 
  return(
    <FormCreate onSubmit={onClickEnviar}>
      <FormControlLogin variant="filled" fullWidth>
           <TextFieldLogin
          id="filled-select-currency"
          select
          label="Viagem"
          value={id}
          onChange={onChange}
          variant="filled"
          name={"id"}
          required
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
          required
          inputProps={{ minlength: 3}}
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
          required
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
    inputProps={{ min: 18}}
    required
    fullWidth
    name={"age"}
  />
         </div>
         </DivFormDois>
         <TextFieldLogin
         required
          id="filled-multiline-static"
          label="Profissão"
          variant="filled"
          onChange={onChange}
          value={profession}
          name={"profession"}
          inputProps={{ minlength: 10}}
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
          required
          inputProps={{ minlength: 30}}
        />
        
 {loadingForm && <LinearProgress />}
        </FormControlLogin >
        

<div>
      <SnackbarGreen
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSucesso}
        onClose={handleClose}
        message="Viagem criada com sucesso!!!"
        key={"bottom" + "center"}
      />
      <SnackbarRed
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openError}
        onClose={handleClose}
        message="Algo deu errado :(. Tente novamente"
        key={"bottom" + "center"}
      />
    </div>

          <DivButtons>
            <ButtonForm 
          variant="contained"
          color="primary"
          startIcon={<span class="material-icons">
          </span>}
          type="submit"
          >Nova Viagem
          </ButtonForm>
          <ButtonForm 
          variant="outlined"
          color="primary"
          onClick={() => goToListTrip(history)}
          startIcon={<span class="material-icons">
          </span>}
          >Cancelar
          </ButtonForm>
          </DivButtons>
      </FormCreate>
    )
};

export default ApplyTrip;
