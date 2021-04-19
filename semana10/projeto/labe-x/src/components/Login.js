import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { goToHome} from "../constants/routs";

import {FilledInput, InputLabel, LinearProgress} from '@material-ui/core';

import {FormControlLogin, InputLabelLogin, FilledInputLogin, Form, ButtonForm, InputAdornmentLogin, DivButtons, SnackbarGreen, SnackbarRed} from '../config/styles'

const Login = (props) => {
    
  const [typePassaword, setTypePassaword] = useState(false);
  const handleClickShowPassword = () => {
    setTypePassaword(!typePassaword);
  };
  const history = useHistory();
  return(
    <Form onSubmit={props.onClickLogin}> 
      <FormControlLogin variant="filled" fullWidth>
        <InputLabelLogin htmlFor="component-filled" >Login</InputLabelLogin>
        <FilledInputLogin 
          type="email"
        value={props.inputEmail}
        onChange={props.inputSetEmail}
        required
        />
      </FormControlLogin >
      <FormControlLogin variant="filled" fullWidth>
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={ typePassaword ? 'text' : 'password'}
            endAdornment={
              <InputAdornmentLogin position="end">
                <span  onClick={handleClickShowPassword} class="material-icons">
                  {typePassaword ? "visibility" : "visibility_off"}
                </span>
              </InputAdornmentLogin>
            }
            value={props.inputPassaword}
            onChange={props.inputSetPassaword}
            required
          />
           {props.loadingForm && <LinearProgress />}
          </FormControlLogin> 
          <DivButtons>
          <div>
     
      <SnackbarRed
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={props.openError}
        onClose={props.handleClose}
        message="Login e/ou senha incorretos"
        key={"bottom" + "center"}
      />
    </div>
            <ButtonForm 
          variant="contained"
          color="primary"
          startIcon={<span class="material-icons">
          </span>}
          type="submit"
          >Logar
          </ButtonForm>
          <ButtonForm 
          variant="outlined"
          color="primary"
          onClick={() => goToHome(history)}
          startIcon={<span class="material-icons">
          </span>}
          >Cancelar
          </ButtonForm>
          </DivButtons>
      </Form>
    )
};

export default Login;
