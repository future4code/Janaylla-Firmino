import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { goToAdminHome} from "../constants/routs";
import {planetList, planetListChaves} from '../constants/const'
import {FormControlLogin, InputLabelLogin, FormCreate, ButtonLogin, DivButtons, TextFieldLogin, DivFormDois, FormFiltro} from '../config/styles'
import {TextField, MenuItem, Typography, Slider, FormGroup, FormControlLabel, Checkbox} from '@material-ui/core'
// import {planetList} from '../constants/const'

const Filter = ({filtro, onChange, planets, onChangePlanets, dias, onChangeDias}) => {
  const history = useHistory();
  
  
  const data = new Date();
  let dataString = data.getFullYear() + "-";
  if(data.getMonth() < 10)
    dataString += "0"+ (data.getMonth()+ 1)+"-";
  else
     dataString += (data.getMonth()+ 1) + "-";

  if(data.getDate() < 10)
    dataString += "0"+ (data.getDate()+ 1);
  else
    dataString += (data.getDate()+ 1);
  // alert(dataString)
  const ordenacao = [
    "",
    "Nome",
    "Data",
    "Dias"
  ]
  return(
    <FormFiltro >
      <FormControlLogin variant="filled" fullWidth>
            <TextFieldLogin
             minlength="5"
            id="date"
            label="Buscar"
            type="text"  
            variant="filled"
            InputLabelProps={{
            shrink: true,
            }}
            name={"name"}
            value={filtro.name}
            onChange={onChange} 

        />
         <Typography  gutterBottom>
        Remuneração
      </Typography>
      <Slider
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        // getAriaValueText={"100"}
        defaultValue={dias}
        min={0}
        max={filtro.max}
         value={dias}
        onChange={onChangeDias}
        fullWidth
      />
        <FormGroup row>
     { 
     planetList.map((planet, index) => {
          return ( <FormControlLabel
          
            control={
              <Checkbox
                checked={planets[index]}
                 onChange={() => onChangePlanets(index)}
                //  name={planetListChaves[index]}
                color="primary"
              />
            }
            label={planet}
          />)
      })
      }     
      </FormGroup>
      <Typography  gutterBottom>
        Ordenação
      </Typography>
      <TextFieldLogin
          id="filled-select-currency"
          select
          label="País de origem"
          value={filtro.ordenacao}
          variant="filled"
          fullWidth
          name="ordenacao"
          onChange={onChange}
        >
          {ordenacao.map((option) => (
            <MenuItem key={option} value={option} >
              {option}
            </MenuItem>
          ))
          }
        </TextFieldLogin>
           </FormControlLogin >
         
      </FormFiltro>
    )
};

export default Filter;
