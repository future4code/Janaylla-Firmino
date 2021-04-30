import React,{useEffect, useState, useContext} from 'react'
import {DivConteiner, Comments, DivComments, DivPost} from './styled'
import {usePut, useGet } from '../../hooks/hooksAxio'
import CardComments from '../../components/cardComment/cardComment'
import CardAddComment from '../../components/cardAddComment/cardAddComment'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useHistory, useParams } from "react-router-dom";
import CardPost from '../../components/cardPost/cardPost'
import { red, orange, lime, lightGreen, green, cyan, indigo, pink, purple } from '@material-ui/core/colors';

let listColor = []
export default function Post(){
    const [putVote, loadingVote, sucess] = usePut()
    const [post, requirePost, loadinPost, setPost] = useGet();
    const { postsGlobal } = useContext(GlobalStateContext);
    const color = [red, orange, lime, lightGreen, green, cyan, indigo, pink, purple]
 
    const [userVoteDirection, setUserVoteDirection] = useState()
    const [votesCount, setVoteCount] = useState()

    const token = JSON.parse(window.localStorage.getItem('user'))
    const { id } = useParams();
    
    const nRandon = (max, min) => {
        return Math.floor(Math.random() * (max - min  + 1)) + min;
      }
      const randonColor = () => {
        return color[nRandon(0, 8)][nRandon(3, 9) * 100];
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
         <DivPost>
            <CardPost
            post={post} token={token.token} color={"red"}
            />
       </DivPost>
       <DivComments>
            <CardAddComment postId={post.id}
            
          commentFake={commentFake}
          update={getPost} 
            />
          
        <Comments>
         {post.comments.map((comment) => {

let colorU = randonColor();
        const index = listColor.findIndex((i) => {return i[0] === comment.username});
        if(index === -1){
          listColor.push([comment.username, colorU])
       }
       else{
         colorU = listColor[index][1]
       }

               return(<CardComments
                 comment={comment} token={token} idPost={post.id}
                color={colorU}
               update={getPost} 
               />)
             })}
             </Comments>
             </DivComments>
             </>
             }
             
    </DivConteiner>
}
