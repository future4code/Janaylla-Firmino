import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Title, DivContainer } from './styled'
import { Replay } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
export default function MiddleDividers({ name, cpf, balance, birtDate }) {
  const maskCpf = (cpf) => {
    return cpf && cpf.substr(0, 3)+'.'+cpf.substr(3, 3)+'.'+cpf.substr(6, 3)+'-'+cpf.substr(9, 2);
  }
  const maskMoney = (money) => {
    return money &&  "R$ " + parseFloat(money.toFixed(2)).toLocaleString("pt-BR", {
      currency: "BRL",
      minimumFractionDigits: 2,
    });;
  }
  const maskDate = (date) => {
    return date && `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`;
  }
  return (
    <DivContainer>
       <Typography>
       {name}
      </Typography>
      <Typography color="textSecondary" >
        <Title>Saldo:</Title> {maskMoney(balance)}
        <IconButton size="small" >
          <Replay fontSize="inherit" />
        </IconButton>
      </Typography>
      <Typography color="textSecondary">
        <Title>CPF:</Title> {maskCpf(cpf)}
      </Typography>
      <Typography color="textSecondary">
        <Title>Data de Nascimento:</Title> {maskDate(birtDate)}
      </Typography>
    </DivContainer>
  );
}