import React,{useEffect, useState} from 'react'
import {Like, DisLike, DivLike} from './styled'
import IconButton from '@material-ui/core/IconButton';
import {IconButtonNotPointer} from '../../globalStyled'
export default function Post({onClickVote, userVoteDirection, votesCount}){
   
    return <DivLike>
     
          {userVoteDirection === 1? <IconButton onClick={() => onClickVote(0)}><Like color="primary"
          
          /></IconButton>:
          <IconButton onClick={() => onClickVote(1)}>
          <Like />
          </IconButton>}
          
          {userVoteDirection === -1?
          <IconButton  onClick={() => onClickVote(0)}>
          <DisLike color="error"
          />
          </IconButton>
          :<IconButton onClick={() => onClickVote(-1)}>
          <DisLike />
          </IconButton>}
          
            
          <IconButtonNotPointer>
            <h4>{votesCount}</h4></IconButtonNotPointer>
</DivLike>
}