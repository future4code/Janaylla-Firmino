import React, {useEffect, useState} from 'react'
import {DivConteiner, Form} from './styled'
import {TextFieldGlobal, ButtonGlobal} from '../../globalStyled'
import {useForm} from '../../hooks/useForm'
import { usePost } from '../../hooks/hooksAxio'

export default function CardAddComment({postId}){
   const [comment, postComment, loading] = usePost(`/posts/${postId}/comment`)
   const token = JSON.parse(window.localStorage.getItem('user'))
   const formInicial = {
     text: ""
   }
   const [form, setForm, resetForm] = useForm(formInicial)

   const onSubmmit = (e) => {
      console.log(token.token)
      e.preventDefault();
      postComment(form, {Authorization: token.token})
    }

    return <DivConteiner>
       <Form onSubmit={onSubmmit}>
        
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
        oii
    </DivConteiner>
}