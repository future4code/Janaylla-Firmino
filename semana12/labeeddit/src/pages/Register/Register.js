import React, {useEffect, useState} from 'react'
import {DivConteiner, Form} from './styled'
import {Button, TextField, Grid, InputAdornment, IconButton, FormControl,InputLabel, Input} from '@material-ui/core'
import { Visibility, VisibilityOff} from '@material-ui/icons'
import {TextFieldGlobal, ButtonGlobal, FormControlGlobal, LinkGlobal} from '../../globalStyled'
import {useForm} from '../../hooks/useForm'
import { usePost } from '../../hooks/hooksAxio'
import Header from '../../components/header/header'
import {goToLogin} from '../../router/coordinator'
import {useHistory} from 'react-router-dom'
export default function Register(){
  
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false)
  const formInicial = { 
    username: "",
    email: "",
    password: ""
  }
  const [form, setForm, resetForm] = useForm(formInicial)
  const [user, postUser, loading] = usePost("/signup")
  const onSubmit = (e) => {
    e.preventDefault();
    postUser(form)
  }
  useEffect(()=> {
    if(user){
      localStorage.setItem('user',  JSON.stringify(user))   
  }
  }, [user])

    return <DivConteiner>
        <Header onClickButton={() => goToLogin(history)} textButton={"Login"}/>
        <Form onSubmit={onSubmit}>
        <TextFieldGlobal
        label="User Name" 
        onChange={setForm}
         name="username"  
         value={form.username}
         required
         fullWidth
      />

        <TextFieldGlobal
        id="input-with-icon-textfield"
        label="E-mail" 
        onChange={setForm}
         name="email"  
         value={form.email}
         required
         type="email" 
         fullWidth
      />


          <FormControlGlobal>
          <InputLabel>Password</InputLabel>
          <Input
             type={showPassword ? 'text' : 'password'}
            fullWidth
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
            required
            onChange={setForm}
          />
        </FormControlGlobal>
        <ButtonGlobal variant="contained" color="primary" type="submit">
          Cadastrar
        </ButtonGlobal>
        <LinkGlobal onClick={() => goToLogin(history)}>
          Já sou cadastrado
        </LinkGlobal>
        </Form>
    </DivConteiner>
}