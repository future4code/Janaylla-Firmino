import React from 'react';
import {DivConteiner} from './styled'
import {LinearProgressGlobal} from '../../globalStyled'
export default function Loading() {

  return (
    <DivConteiner>
     <p>Carregando...</p>
     <LinearProgressGlobal/>
    </DivConteiner>
  );
}