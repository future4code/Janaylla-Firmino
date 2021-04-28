import React,{useEffect, useState} from 'react'
import {DivConteiner, Like, DisLike, DivLike, Comments, DivComments, DivInteractions} from './styled'
import {usePut, useGet } from '../../hooks/hooksAxio'
import CardComments from '../cardComment/cardComment'
import CardLike from '../cardLike/cardLike'
import CardAddComment from '../cardAddComment/cardAddComment'

export default function Post({post, index, token}){
    const [putVote, loadingVote, sucess] = usePut()
    const [postCurrent, getPost, loadinPost] = useGet(post)
    const [showComments, setShowComments] = useState(false)
    const onClickVote = (voto) => {
      putVote({Authorization: token.token}, {direction: voto}, `/posts/${postCurrent.id}/vote`)
    }
    useEffect(()=>{
      if(sucess){
        getPost(token.token, "post", `/posts/${post.id}`)
      }
    }, [sucess])
    const onClickComment = () => {
      setShowComments(!showComments)
      getPost(token.token, "post", `/posts/${post.id}`)
    }
    return <DivConteiner>
          <h4>{index}. {postCurrent.title}</h4>
          <h6>{postCurrent.username}</h6>
          <p>{postCurrent.text}</p>
          <DivInteractions>
          <CardLike
          onClickVote={onClickVote} 
          userVoteDirection={postCurrent.userVoteDirection}
          votesCount={postCurrent.votesCount}
          />
            <DivComments>
            <h4>{postCurrent.commentsCount}</h4>
            
            <Comments onClick={() => onClickComment()}/>
         
            </DivComments>
            
            </DivInteractions>
         
            {(showComments && postCurrent.hasOwnProperty("comments")) && 
            <>
             <CardAddComment postId={postCurrent.id}/>
             {postCurrent.comments.map((comment) => {
               return(<CardComments comment={comment} token={token} idPost={postCurrent.id}/>)
             })}
             
             </>
    
            }
    </DivConteiner>
}