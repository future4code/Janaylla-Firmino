import React, {useEffect, useState} from 'react'
import {DivConteiner, Form} from './styled'
import {Button, TextField, Grid, InputAdornment, IconButton, FormControl,InputLabel, Input} from '@material-ui/core'
import {AccountCircle, Lock, Email, Visibility, VisibilityOff} from '@material-ui/icons'
import {TextFieldGlobal, ButtonGlobal} from '../../globalStyled'
import {useForm} from '../../hooks/useForm'
import { usePost } from '../../hooks/hooksAxio'

export default function Register(){
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
        <Form onSubmit={onSubmit}>
         <Grid container alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextFieldGlobal label="Nome de usuário" required onChange={setForm}
            name="username" value={form.username}
            />
          </Grid>
        </Grid>

        <Grid container  alignItems="flex-end">
          <Grid item>
            <Email />
          </Grid>
          <Grid item>
            <TextFieldGlobal id="input-with-icon-grid" label="E-mail" required type="email" fullWidth  onChange={setForm} name="email"  value={form.email}/>
          </Grid>
        </Grid>

        <Grid container  alignItems="flex-end">
          <Grid item>
            <Lock />
          </Grid>
          <Grid item>
          <FormControl>
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
        </FormControl>
          </Grid>
        </Grid>

        <ButtonGlobal variant="contained" color="primary" type="submit">
          Cadastrar
        </ButtonGlobal>
        </Form>
    </DivConteiner>
}