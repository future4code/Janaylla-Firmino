import React, {useEffect, useState} from 'react'
import {DivConteiner, Form, SpaceBeetween, DivIconsEmoji} from './styled'
import {TextFieldGlobal, ButtonGlobal, IconEmoji, LinearProgressGlobal} from '../../globalStyled'
import {useForm} from '../../hooks/useForm'
import { usePost } from '../../hooks/hooksAxio'
import { Dialog, DialogTitle, DialogContent, DialogContentText} from '@material-ui/core'
import {IconButton} from '@material-ui/core'
import {Close} from '@material-ui/icons'
import Error from '../../components/error/error'

export default function CardAddPost({postFake, open, setOpen}){
  const [user, postUser, loading, sucess] = usePost("/posts")
  const token = JSON.parse(window.localStorage.getItem('user'))
  const [keyEmoji, setKeyEmoji] = useState("title")
  const formInicial = { 
    title: "",
    text: ""
  }
  const [form, setForm, resetForm, AddEmoji] = useForm(formInicial)
  const emojis = ["😊","😝","😀","😮","❤","😐","😩","😷","😍"]
  
  const onSubmmit = (e) => {
    console.log(token.token)
     e.preventDefault();
     postUser(form, {Authorization: token.token})
     postFake(form)
     resetForm(formInicial)
  }

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
          onClick={() => setKeyEmoji("title")}
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
          onClick={() => setKeyEmoji("text")}
        />
        <DivIconsEmoji>
        
      
       {
         emojis.map((emoji) => {
            return(
              <IconEmoji onClick={() => AddEmoji(keyEmoji, emoji)}>
              {emoji}
          </IconEmoji>
            )
         })
       }
         {sucess === -1 && <Error text="O post não foi adicionado, tente novamente"/>}        
    
        </DivIconsEmoji>
        <ButtonGlobal variant="contained" color="primary" type="submit">
          Novo Post
        </ButtonGlobal>
        {loading && <LinearProgressGlobal/>}
        </Form>

          </DialogContentText>
        </DialogContent>
      </Dialog>





    </DivConteiner>
}