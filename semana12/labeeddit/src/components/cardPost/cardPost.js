import React,{useEffect, useState, useContext} from 'react'
import {DivConteiner, Comments, DivComments, DivInteractions} from './styled'
import {usePut, useGet } from '../../hooks/hooksAxio'
import CardLike from '../cardLike/cardLike'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useHistory} from 'react-router-dom'
import {goToPost} from '../../router/coordinator'

export default function Post({post, index, token}){
    const [putVote, loadingVote, sucess] = usePut()
    const { postsGlobal } = useContext(GlobalStateContext);
    const [userVoteDirection, setUserVoteDirection] = useState(post.userVoteDirection)
    const [votesCount, setVoteCount] = useState(post.votesCount)
    const history = useHistory();
    
    const onClickVote = (voto) => {
      setVoteCount(post.votesCount + voto - post.userVoteDirection)
      setUserVoteDirection(voto)
      putVote({Authorization: token.token}, {direction: voto}, `/posts/${post.id}/vote`)
    }
    useEffect(()=>{
      if(sucess){
        postsGlobal.getPost(post.id)
      }
    }, [sucess])
    const onClickComment = () => {
      goToPost(history, post.id)
    }
    useEffect(()=>{
      if(postsGlobal && loadingVote && sucess){
        setVoteCount(post.votesCount)
        setUserVoteDirection(post.userVoteDirection)
      }
    }, [loadingVote])
    return <DivConteiner>
          <h4>{index}. {post.title}</h4>
          <h6>{post.username}</h6>
          <p>{post.text}</p>
          <DivInteractions>
          <CardLike
          onClickVote={onClickVote} 
          userVoteDirection={userVoteDirection}
          votesCount={votesCount}
          />
            <DivComments>
            <h4>{post.commentsCount}</h4>
            
            <Comments onClick={() => onClickComment()}/>
         
            </DivComments>
            
            </DivInteractions>
           
    </DivConteiner>
}