import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import { Form, DivIcon,  TwoInput} from './styled'
import { Close } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import {useForm} from '../../hooks/useForm'
export const deposito = (form, onChange, submit) => {
  const onSubmit= (e)=>{
    e.preventDefault()
    submit(form)
  }
  return (
    <Form onSubmit={onSubmit}>
      <TextField
        id="outlined-basic"
        label="Valor"
        variant="outlined"
        margin="normal"
        value={form.value}
        name="value"
        type="number"
        onChange={onChange}
        fullWidth />
      <Button variant="contained" color="primary" type="submit">
        Depositar
                </Button>
    </Form>
  )
}

export const pagamento = (form, onChange, submit) => {
  const onSubmit= (e)=>{
    e.preventDefault()
    submit(form)

  }
  return (
    <Form onSubmit={onSubmit}>
      <TextField
        id="outlined-basic"
        label="Descrição"
        variant="outlined"
        margin="normal"
        fullWidth 
        value={form.description}
        name="description"
        onChange={onChange}
        />

        <TwoInput>

         
         <TextField
        id="outlined-basic"
        label="Date"
        variant="outlined"
        margin="normal"  
        InputLabelProps={{
          shrink: true,
      }}
      type="date"
      value={form.date}
      name="date"
      onChange={onChange}
      
         />
         <TextField
         id="outlined-basic"
         label="Valor"
         variant="outlined"
         margin="normal"
         value={form.value}
      name="value"
      type="number"
      onChange={onChange}
          />
         </TwoInput>
      <Button variant="contained" color="primary" type="submit">
        Pagar</Button>
    </Form>
  )
}

export const transacao = (form, onChange, submit) => {
  const onSubmit= (e)=>{
    e.preventDefault()
    submit(form)

  }
  return (
    <Form onSubmit={onSubmit}>
        <TextField
        id="outlined-basic"
        label="Descrição"
        variant="outlined"
        margin="normal"
        fullWidth 
        name="description"
        onChange={onChange}     
        value={form.description}  
        />
      <TextField
        id="outlined-basic"
        label="Nome do beneficiário"
        variant="outlined"
        margin="normal"
        fullWidth 
        name="nameRecipient"
        onChange={onChange}     
        value={form.nameRecipient}   
        />
       
         <TwoInput>

         <TextField
        id="outlined-basic"
        label="CPF do beneficiário"
        variant="outlined"
        margin="normal"
        fullWidth 
        name="cpfRecipient"
        onChange={onChange}     
        value={form.cpfRecipient}  
        
        />
         <TextField
        id="outlined-basic"
        label="Valor"
        variant="outlined"
        margin="normal"
        fullWidth
        name="value"
        onChange={onChange}     
        value={form.value}  
        type="number"
        />
         </TwoInput>

      <Button variant="contained" color="primary" type="submit">
        tRANFERIR
                </Button>
    </Form>
  )
}
function Transations({ transation, setTransation, newBalance, newPayment, newTransfer}) {
  const [formDep, onChangeFormDep] = useForm({value: ''})
  const [formPag, onChangeFormPag] = useForm({ value: '', description: '', date: ''})
  const [formTra, onChangeFormTra] = useForm({value:'', description:'', cpfRecipient: '', nameRecipient: ''})
  return (
    <Dialog open={transation}>
      <DivIcon>
        <Typography variant="subtitle1">Preencha o form para fazer a transação</Typography>
        <IconButton onClick={() => setTransation('')}>
          <Close />
        </IconButton>
      </DivIcon>
      {transation === "DEPOSITO" && deposito(formDep, onChangeFormDep, newBalance)}
      {transation === "PAGAMENTO" && pagamento(formPag, onChangeFormPag, newPayment)}
      {transation === "TRANSACAO" && transacao(formTra, onChangeFormTra, newTransfer)}
    </Dialog>
  );
}
export default function SimpleDialogDemo({ transation, setTransation, newBalance, newPayment, newTransfer }) {

  return (
    <div>
      <br />
      {Transations({ transation, setTransation, newBalance, newPayment, newTransfer})}
    </div>
  );
}