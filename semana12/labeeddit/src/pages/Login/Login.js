import React, {useEffect, useState} from 'react'
import {DivConteiner, Form} from './styled'
import {Grid, InputAdornment, IconButton, FormControl,InputLabel, Input} from '@material-ui/core'
import {Lock, Email, Visibility, VisibilityOff} from '@material-ui/icons'
import {TextFieldGlobal, ButtonGlobal, FormControlGlobal} from '../../globalStyled'
import {useForm} from '../../hooks/useForm'
import { usePost } from '../../hooks/hooksAxio'
import {goToHome} from '../../router/coordinator'
import {useHistory} from 'react-router-dom'

export default function Register(){
  const [showPassword, setShowPassword] = useState(false)
  const formInicial = { 
    email: "",
    password: ""
  }
  const [form, setForm, resetForm] = useForm(formInicial)
  const [user, postUser, loading] = usePost("/login")
  const history = useHistory();
  const onSubmit = (e) => {
    console.log("as")
    e.preventDefault();
    postUser(form)
  }
  useEffect(()=> {
    if(user){
      localStorage.setItem('user',  JSON.stringify(user)) 
      goToHome(history);  
  }
  }, [user])

    return <DivConteiner>
        <Form onSubmit={onSubmit}>

        <TextFieldGlobal
        id="input-with-icon-textfield"
        label="E-mail" 
        onChange={setForm}
         name="email"  
         value={form.email}
         type="email" 
         fullWidth
      />


          <FormControlGlobal>
          <InputLabel>Password</InputLabel>
          <Input
             type={showPassword ? 'text' : 'password'}
            fullWidth
            required
            name="password"
            value={form.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            onChange={setForm}
          />
        </FormControlGlobal>

        

        <ButtonGlobal variant="contained" color="primary" type="submit">
          Cadastrar
        </ButtonGlobal>
        </Form>
    </DivConteiner>
}