import React from 'react';
import {Button} from '@material-ui/core';
import {DivContainer} from './styled'

export default function Butons({setTransation}) {
  return (
    <DivContainer>
       <Button variant="contained" size="large" color="primary" onClick={() =>setTransation("DEPOSITO")} >
          Deposito
        </Button>
        <Button variant="contained" size="large" color="primary" onClick={() =>setTransation("PAGAMENTO")}>
          Pagamento
        </Button>
        <Button variant="contained" size="large" color="primary" onClick={() =>setTransation("TRANSACAO")}>
          Transação
        </Button>
    </DivContainer>
  );
}