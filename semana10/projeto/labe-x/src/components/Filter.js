import React from "react";
import { useHistory } from "react-router-dom";
import {planetList} from '../constants/const'
import {FormControlLogin, InputLabelLogin, FormCreate, ButtonForm, DivButtons, TextFieldLogin, DivFormDois, FormFiltro, MaxMin} from '../config/styles'
import {TextField, MenuItem, Typography, Slider, FormGroup, FormControlLabel, Checkbox} from '@material-ui/core'
// import {planetList} from '../constants/const'

const Filter = ({filtro, onChange, planets, onChangePlanets, dias, onChangeDias, max}) => {
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
    "Relevantes",
    "Nome (A-z)",
    "Nome (Z-a)",
    "Data (Crescente)",
    "Data (Decrescente)",
    "Dias (Crescente)",
    "Dias (Decrescente)"
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
        Duração (dias)
      </Typography>
      <Slider
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        // getAriaValueText={"100"}
        defaultValue={dias}
        min={50}
        max={max}
         value={dias}
        onChange={onChangeDias}
        fullWidth
      />
        <FormGroup row>
          {dias[0] !== 50 || dias[1] !== 50 ?
          
          <MaxMin>
            <p><span>Min: </span>{dias[0]}</p>
            <p><span>Max: </span>{dias[1]}</p>
          </MaxMin>
      :
      <MaxMin>
      <p><span>Min: </span></p>
      <p><span>Max: </span></p>
    </MaxMin>
        }
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
        Ordenar
      </Typography>
      <TextFieldLogin
          id="filled-select-currency"
          select
          label="por"
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
