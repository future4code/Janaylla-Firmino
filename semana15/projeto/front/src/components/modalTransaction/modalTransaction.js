import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import { Form, DivIcon,  TwoInput} from './styled'
import { Close } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

export const deposito = () => {
  return (
    <Form>
      <TextField
        id="outlined-basic"
        label="Valor"
        variant="outlined"
        margin="normal"
        fullWidth />
      <Button variant="contained" color="primary">
        Depositar
                </Button>
    </Form>
  )
}

export const pagamento = () => {
  return (
    <Form>
      <TextField
        id="outlined-basic"
        label="Descrição"
        variant="outlined"
        margin="normal"
        fullWidth />

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
      
         />
         <TextField
         id="outlined-basic"
         label="Valor"
         variant="outlined"
         margin="normal"
          />
         </TwoInput>
      <Button variant="contained" color="primary">
        Pagar</Button>
    </Form>
  )
}

export const transacao = () => {
  return (
    <Form>
      <TextField
        id="outlined-basic"
        label="Nome do beneficiário"
        variant="outlined"
        margin="normal"
        fullWidth />
         <TwoInput>

         <TextField
        id="outlined-basic"
        label="CPF do beneficiário"
        variant="outlined"
        margin="normal"
        fullWidth />
         <TextField
        id="outlined-basic"
        label="Valor"
        variant="outlined"
        margin="normal"
        fullWidth />
         </TwoInput>

      <Button variant="contained" color="primary">
        tRANFERIR
                </Button>
    </Form>
  )
}
function SimpleDialog({ transation, setTransation }) {
  return (
    <Dialog open={transation}>
      <DivIcon>
        <Typography variant="subtitle1">Preencha o form para fazer a transação</Typography>
        <IconButton onClick={() => setTransation('')}>
          <Close />
        </IconButton>
      </DivIcon>
      {transation === "DEPOSITO" && deposito()}
      {transation === "PAGAMENTO" && pagamento()}
      {transation === "TRANSACAO" && transacao()}
    </Dialog>
  );
}



export default function SimpleDialogDemo({ transation, setTransation }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <br />
      {SimpleDialog({ transation, setTransation })}
    </div>
  );
}