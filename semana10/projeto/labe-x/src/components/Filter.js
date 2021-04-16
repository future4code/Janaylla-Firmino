import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { goToAdminHome} from "../constants/routs";
import {planetList} from '../constants/const'
import {FormControlLogin, InputLabelLogin, FormCreate, ButtonLogin, DivButtons, TextFieldLogin, DivFormDois, FormFiltro} from '../config/styles'
import {TextField, MenuItem, Typography, Slider, FormGroup, FormControlLabel, Checkbox} from '@material-ui/core'
// import {planetList} from '../constants/const'

const Filter = ({name, planet, date, description, durationInDays, onChange, onClickEnviar, checkedA, checkedB, handleChange}) => {
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
  return(
    <FormFiltro onSubmit={onClickEnviar}>
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
            value={name}
            onChange={onChange} 
        />
         <Typography  gutterBottom>
        Remuneração
      </Typography>
      <Slider
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        // getAriaValueText={"100"}
        defaultValue={[0, 12]}
        max={12}
        // value={[this.props.minimum, this.props.maximum]}
        // onChange={nChageRemuneration}
        fullWidth
      />
        <FormGroup row>
     { 
     planetList.map((planet) => {
          return ( <FormControlLabel
            control={
              <Checkbox
                 checked={checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label={planet}
          />)
      })
      }
     
      </FormGroup>
           </FormControlLogin >
         
      </FormFiltro>
    )
};

export default Filter;
