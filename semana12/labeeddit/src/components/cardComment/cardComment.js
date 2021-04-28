import React, { useState, useEffect } from 'react'
import {DivConteiner, Card} from './styled'
import CardLike from '../cardLike/cardLike'
import {usePut, useGet } from '../../hooks/hooksAxio'
export default function CardCommennts({token, comment, idPost, update}){
  const [putVote, loadingVote, sucess] = usePut()
  const [userVoteDirection, setUserVoteDirection] = useState(comment.userVoteDirectio)
  const [votesCount, setVoteCount] = useState(comment.votesCount)
  const onClickVote = (voto) => {
    setVoteCount(comment.votesCount+voto-comment.userVoteDirection)
    setUserVoteDirection(voto)

    putVote({Authorization: token.token}, {direction: voto}, `/posts/${idPost}/comment/${comment.id}/vote`)
  }
   useEffect(()=>{
     if(sucess){
      update()
     }
   }, [sucess])
   useEffect(()=>{
     if(comment.userVoteDirection === userVoteDirection){
   setVoteCount(comment.votesCount)
   setUserVoteDirection(comment.userVoteDirection)
  }
  }, [loadingVote])
  
    return <DivConteiner>
               <Card>
                  <h4>{comment.username}</h4>
                  <p>{comment.text}</p>
                      <CardLike
                  onClickVote={onClickVote} 
                  userVoteDirection={userVoteDirection}
                  votesCount={votesCount}
               />
              </Card> 

    </DivConteiner>
}