import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Title, DivContainer, DivDescription, DivDate, DivValue, TableExtract, Lines } from './styled'
export default function MiddleDividers({ extract }) {

  const maskMoney = (money) => {
    return money && "R$ " + parseFloat(money.toFixed(2)).toLocaleString("pt-BR", {
      currency: "BRL",
      minimumFractionDigits: 2,
    });;
  }
  const maskDate = (date) => {
    return date && `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`;
  }
  return (
    <DivContainer>
      <TableExtract>
        <Title>
          <DivDescription>
            <Typography>
              Descrição
          </Typography>
          </DivDescription>
          <DivDate>
            <Typography>
              Data
          </Typography>
          </DivDate>
          <DivValue>
            <Typography>
              Valor
          </Typography>
          </DivValue>
        </Title>
          {extract.map(tran =>{
            return (<Lines>
              <DivDescription>
                <Typography>
                  
                {tran.description} 
               
              </Typography>
              </DivDescription>
              <DivDate>
                <Typography>
                {maskDate(tran.date)}
              </Typography>
              </DivDate>
              <DivValue>
                <Typography>  
                  {maskMoney(tran.value)}
              </Typography>
              </DivValue>
            </Lines>)
          })}
        

      </TableExtract>
    </DivContainer>
  );
}