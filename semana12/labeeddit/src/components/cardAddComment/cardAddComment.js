import React, {useEffect, useState} from 'react'
import {DivConteiner, Form, DivComment} from './styled'
import {TextFieldGlobal, ButtonGlobal, IconEmoji} from '../../globalStyled'
import {useForm} from '../../hooks/useForm'
import { usePost } from '../../hooks/hooksAxio'
import {IconButton, Fab} from '@material-ui/core'
import {Send} from '@material-ui/icons'

export default function CardAddComment({postId, commentFake, update}){
   const [comment, postComment, loading, sucess] = usePost(`/posts/${postId}/comment`)
   const token = JSON.parse(window.localStorage.getItem('user'))
   const formInicial = {
     text: ""
   }
   const [form, setForm, resetForm, AddEmoji] = useForm(formInicial)

   const emojis = ["😊","😝","😀","😮","❤","😐","😩","😷","😍"]
   const onSubmmit = (e) => {
      e.preventDefault();
      postComment(form, {Authorization: token.token})
      commentFake(form)
      resetForm(formInicial)
  }
  useEffect(() => {
    if(sucess){
      update()
    }
  }, [sucess])

    return <DivConteiner>
       <Form onSubmit={onSubmmit}>
       <DivComment>       
          <TextFieldGlobal
        fullWidth
          id="standard-textarea"
          label="Texto do comentário"
          placeholder="Placeholder"
          multiline
          onChange={setForm}
          value={form.text}
          name="text"
          required 
        />
         <Fab color="primary"  type="submit" size="small">
          <Send/>
        </Fab>
  </DivComment>

        {
         emojis.map((emoji) => {
            return(
              <IconEmoji onClick={() => AddEmoji("text", emoji)}>
              {emoji}
          </IconEmoji>
            )
         })
       }

        </Form> 
    </DivConteiner>
}