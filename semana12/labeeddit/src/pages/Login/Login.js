import React, {useEffect, useState} from 'react'
import {DivConteiner, Form} from './styled'
import { InputAdornment, IconButton, InputLabel, Input} from '@material-ui/core'
import { Visibility, VisibilityOff} from '@material-ui/icons'
import {TextFieldGlobal, ButtonGlobal, FormControlGlobal, DivButtons, LinkGlobal, LinearProgressGlobal} from '../../globalStyled'
import {useForm} from '../../hooks/useForm'
import { usePost } from '../../hooks/hooksAxio'
import {goToHome, goToRegister} from '../../router/coordinator'
import {useHistory} from 'react-router-dom'
import Header from '../../components/header/header'
import Error from '../../components/error/error'

export default function Register(){
  const [showPassword, setShowPassword] = useState(false)
  const formInicial = { 
    email: "",
    password: ""
  }
  const [form, setForm, resetForm] = useForm(formInicial)
  const [user, postUser, loading, sucess] = usePost("/login")
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
       
     <Header onClickButton={() => goToRegister(history)} textButton={"Cadastrar-se"}/>
        <Form onSubmit={onSubmit}>
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
        <DivButtons>
        <ButtonGlobal variant="contained" color="primary" type="submit">
          Entrar
        </ButtonGlobal>
        {loading && <LinearProgressGlobal/> }
        {sucess === -1 && <Error text="E-mail ou senha incorretos"/>}        
        {sucess === 1 && <Error text="Login feito com sucesso" sucess={true}/>}
        </DivButtons>
        <LinkGlobal onClick={() => goToRegister(history)}>
          Ainda não sou cadastrado
        </LinkGlobal>
        </Form>
    
    </DivConteiner>
}