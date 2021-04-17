import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { goToAdminHome} from "../constants/routs";
import {planetList} from '../constants/const'
import {FormControlLogin, InputLabelLogin, FormCreate, ButtonForm, DivButtons, TextFieldLogin, DivFormDois, SnackbarGreen, SnackbarRed} from '../config/styles'
import {TextField, MenuItem, LinearProgress} from '@material-ui/core'
import Button from '@material-ui/core/Button';


const CreateTrip = ({name, planet, date, description, durationInDays, onChange, onClickEnviar, handleClose, openError, openSucesso, loading}) => {
  const history = useHistory();

  const data = new Date();
  let dataString = data.getFullYear() + "-";
  if(data.getMonth() < 9)
    dataString += "0"+ (data.getMonth()+ 1)+"-";
  else
     dataString += (data.getMonth()+ 1) + "-";

  if(data.getDate() < 9)
    dataString += "0"+ (data.getDate()+ 1);
  else
    dataString += (data.getDate()+ 1);
    
  // alert(dataString)
  return(
    <FormCreate onSubmit={onClickEnviar}>
      <FormControlLogin variant="filled" fullWidth>
            <TextFieldLogin
           inputProps={{ minlength: 5}}
            id="date"
            label="Nome"
            type="text"  
            variant="filled"
            InputLabelProps={{
            shrink: true,
            }}
            name={"name"}
            value={name}
            onChange={onChange}
            required 
        />
           <TextFieldLogin
          id="filled-select-currency"
          select
          label="Planeta"
          value={planet}
          onChange={onChange}
          variant="filled"
          name={"planet"}
          required 
        >
          {planetList.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextFieldLogin>
          <TextFieldLogin
          required 
          id="filled-multiline-static"
          label="Descrição"
          multiline
          rows={2}
          variant="filled"
          onChange={onChange}
          value={description}
          name={"description"}
          inputProps={{ minlength: 30}}
        />
          <DivFormDois>
            <div>
      <TextFieldLogin
    id="date"
    label="Data da Viagem"
    type="date"
    variant="filled" 
    value={date}
    onChange={onChange}
    name={"date"}
    InputLabelProps={{
      shrink: true,
    }}
    fullWidth
    required
    inputProps={{ min: dataString }}
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
  inputProps={{ min: 50}}
  name={"durationInDays"}
  value={durationInDays}
  onChange={onChange}
  required 
/>

</div>
  </DivFormDois>
{loading && <LinearProgress />}
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

      </FormControlLogin >
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
          onClick={() => goToAdminHome(history)}
          startIcon={<span class="material-icons">
          </span>}
          >Cancelar
          </ButtonForm>
          </DivButtons>
          
      </FormCreate>
    )
};

export default CreateTrip;
