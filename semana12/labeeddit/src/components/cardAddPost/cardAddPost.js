import React, {useEffect, useState} from 'react'
import {DivConteiner, Form} from './styled'
import {Button, TextField, Grid, InputAdornment, IconButton, FormControl,InputLabel, Input} from '@material-ui/core'
import {AccountCircle, Lock, Email, Visibility, VisibilityOff} from '@material-ui/icons'
import {TextFieldGlobal, ButtonGlobal} from '../../globalStyled'
import {useForm} from '../../hooks/useForm'
import { usePost } from '../../hooks/hooksAxio'

export default function CardAddPost(){
  const [showPassword, setShowPassword] = useState(false)
  const [user, postUser, loading] = usePost("/posts")
  const token = JSON.parse(window.localStorage.getItem('user'))
  const formInicial = { 
    title: "",
    text: ""
  }
  const [form, setForm, resetForm] = useForm(formInicial)

  const onSubmmit = (e) => {
    console.log(token.token)
    e.preventDefault();
     postUser(form, {Authorization: token.token})
  }

    return <DivConteiner>
        <Form onSubmit={onSubmmit}>
        
        <TextFieldGlobal
        fullWidth
          id="standard-textarea"
          placeholder="Placeholder"
          onChange={setForm}
          value={form.title}
          label="Titulo" 
          name="title"
          required 
          onChange={setForm}
          value={form.title}
        />
        <TextFieldGlobal
        fullWidth
          id="standard-textarea"
          label="Texto do post"
          placeholder="Placeholder"
          multiline
          onChange={setForm}
          value={form.text}
          name="text" 
        />
        <ButtonGlobal variant="contained" color="primary" type="submit">
          Novo Post
        </ButtonGlobal>
        </Form>
    </DivConteiner>
}