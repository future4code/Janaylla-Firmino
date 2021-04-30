import React, {useEffect, useState} from 'react'
import {DivConteiner, Form, SpaceBeetween} from './styled'
import {TextFieldGlobal, ButtonGlobal} from '../../globalStyled'
import {useForm} from '../../hooks/useForm'
import { usePost } from '../../hooks/hooksAxio'
import { Dialog, DialogTitle, DialogContent, DialogContentText} from '@material-ui/core'
import {IconButton} from '@material-ui/core'
import {Close} from '@material-ui/icons'

export default function CardAddPost({postFake, update, open, setOpen}){
  const [user, postUser, loading, sucess] = usePost("/posts")
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
     postFake(form)
     resetForm(formInicial)
  }
  useEffect(() => {
    if(sucess){
      update()
    }
  }, [sucess])


    return <DivConteiner>
              <Dialog
        open={open}
         onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <SpaceBeetween>
          Adicione um novo post
        <IconButton onClick={() => setOpen(false)}>
          <Close/>
        </IconButton>
        </SpaceBeetween>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
        
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

          </DialogContentText>
        </DialogContent>
      </Dialog>





    </DivConteiner>
}