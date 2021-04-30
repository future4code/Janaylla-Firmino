import React,{useEffect, useState, useContext} from 'react'
import {DivConteiner, Comments, DivComments, DivInteractions} from './styled'
import {usePut, useGet } from '../../hooks/hooksAxio'
import CardComments from '../../components/cardComment/cardComment'
import CardLike from '../../components/cardLike/cardLike'
import CardAddComment from '../../components/cardAddComment/cardAddComment'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useHistory, useParams } from "react-router-dom";
import CardPost from '../../components/cardPost/cardPost'
export default function Post(){
    const [putVote, loadingVote, sucess] = usePut()
    const [post, requirePost, loadinPost, setPost] = useGet();
    const { postsGlobal } = useContext(GlobalStateContext);

    const [userVoteDirection, setUserVoteDirection] = useState()
    const [votesCount, setVoteCount] = useState()

    const token = JSON.parse(window.localStorage.getItem('user'))
    const { id } = useParams();

    const onClickVote = (voto) => {
      setVoteCount(post.votesCount+voto-post.userVoteDirection)
      setUserVoteDirection(voto)
      putVote({Authorization: token.token}, {direction: voto}, `/posts/${post.id}/vote`)
    }
    
    const onClickComment = () => {
      postsGlobal.getPost(post.id)
    }
    
    useEffect(()=>{
        token.token && getPost()
    }, [])
    
    useEffect(()=>{
        if(post && ((!loadingVote && sucess) || !userVoteDirection))
        {
            setUserVoteDirection(post.userVoteDirection)
            setVoteCount(post.votesCount)
        }
    }, [loadingVote, post])

    useEffect(() => {
        if(sucess){
            getPost()
        }
    }, [sucess])
    const getPost = () => {
        requirePost(token.token, "post", `/posts/${id}`)
    }
    const commentFake = (comment) =>{
        const commentFake = {
            userVoteDirection: 0,
            id: "request",
            username: token.user.username,
            text: comment.text,
            votesCount: 0
        }
        console.log(comment)
        const postHaveCommentFake = {...post}
        postHaveCommentFake.comments.unshift(commentFake) 
        setPost(postHaveCommentFake)
    }
    return <DivConteiner>
          {post &&
              <>
         
            <CardPost
            post={post} token={token.token} color={"red"}
            />

            <CardAddComment postId={post.id}
            
          commentFake={commentFake}
          update={getPost} 
            />
        
         {post.comments.map((comment) => {
               return(<CardComments
                 comment={comment} token={token} idPost={post.id}
               
               update={getPost} 
               />)
             })}
             
             </>
             }
    </DivConteiner>
}
