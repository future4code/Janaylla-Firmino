import React from 'react'
import {DivConteiner, Form} from './styles'
import {Button, TextField, Grid} from '@material-ui/core'
import {AccountCircle, Lock, Email} from '@material-ui/icons'
import {TextFieldGlobal, ButtonGlobal} from '../../globalStyled'
export default function Register(){

  const onSubmmit = () => {

  }
    return <DivConteiner>
        <Form onSubmit={onSubmmit}>
         <Grid container alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextFieldGlobal id="input-with-icon-grid" label="Nome de usuário" requerid/>
          </Grid>
        </Grid>

        <Grid container  alignItems="flex-end">
          <Grid item>
            <Email />
          </Grid>
          <Grid item>
            <TextFieldGlobal id="input-with-icon-grid" label="E-mail" requerid/>
          </Grid>
        </Grid>

        <Grid container  alignItems="flex-end">
          <Grid item>
            <Lock />
          </Grid>
          <Grid item>
            <TextFieldGlobal id="input-with-icon-grid" label="Senha" requerid/>
          </Grid>
        </Grid>

        <ButtonGlobal variant="contained" color="primary" type="submit">
          Cadastrar
        </ButtonGlobal>
        </Form>
    </DivConteiner>
}