import React,{useEffect, useState} from 'react'
import {Like, DisLike, DivLike} from './styled'

export default function Post({onClickVote, userVoteDirection, votesCount}){
   
    return <DivLike>
          {userVoteDirection === 1?<Like color="primary"
          onClick={() => onClickVote(0)}
          />:<Like onClick={() => onClickVote(1)}/>}
          {userVoteDirection === -1?<DisLike color="error"
          onClick={() => onClickVote(0)} />:<DisLike onClick={() => onClickVote(-1)}/>}
            <h4>{votesCount}</h4>
</DivLike>
}