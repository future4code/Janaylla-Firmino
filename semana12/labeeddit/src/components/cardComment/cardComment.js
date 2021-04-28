import React, { useState, useEffect } from 'react'
import {DivConteiner, Card} from './styled'
import CardLike from '../cardLike/cardLike'
import {usePut, useGet } from '../../hooks/hooksAxio'
export default function CardCommennts({token, comment, idPost}){
    const [putVote, loadingVote, sucess] = usePut()
    const [postCurrent, getPost, loadinPost] = useGet()
    const [commentCurrent, setCommentCurrent] = useState(comment)
   const onClickVote = (voto) => {
     putVote({Authorization: token.token}, {direction: voto}, `/posts/${idPost}/comment/${comment.id}/vote`)
   }
    useEffect(()=>{
     if(sucess){
        getPost(token.token, "post", `/posts/${idPost}`)
     }
   }, [sucess])
   useEffect(()=>{
    if(postCurrent){
      const index = postCurrent.comments.findIndex(x => x.id === commentCurrent.id)
      index > -1 && setCommentCurrent(postCurrent.comments[index])
      console.log(postCurrent.comments, index, commentCurrent.id)
    }
  }, [postCurrent])
    return <DivConteiner>
               <Card>
                  <h4>{commentCurrent.username}</h4>
                  <p>{commentCurrent.text}</p>
                      <CardLike
              onClickVote={onClickVote} 
              userVoteDirection={commentCurrent.userVoteDirection}
              votesCount={commentCurrent.votesCount}
              />
              </Card> 

    </DivConteiner>
}