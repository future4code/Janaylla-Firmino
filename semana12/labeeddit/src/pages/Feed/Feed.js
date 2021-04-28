import React, {useEffect, useLayoutEffect, useState, useContext} from 'react'
import {goToHome} from '../../router/coordinator'
import {DivConteiner} from './styled'
import {useHistory} from 'react-router-dom'
import Post from '../../components/cardPost/cardPost'
import CardAddPost from '../../components/cardAddPost/cardAddPost'
import { GlobalStateContext } from "../../global/GlobalStateContext";

export default function Feed(){
  const history = useHistory();
  
  const { postsGlobal, token } = useContext(GlobalStateContext);

  useLayoutEffect(() => {
     if(!window.localStorage.getItem('user')){
        goToHome(history);
     } 
  })
  const postFake = (post) => {
    const postFake = {
    userVoteDirection: 0,
    id: "request",
    text: post.text,
    commentsCount: 0,
    title: post.title,
    username: token.user.username,
    votesCount: 0,
  }
    let postUpdate = [...postsGlobal.currentPosts]
    postUpdate.unshift(postFake)
    postsGlobal.setCurrentPosts([...postUpdate])

  }
    return <DivConteiner>
      {<CardAddPost
      postFake={postFake}
      update={postsGlobal.getPosts}
      />}
      {postsGlobal.currentPosts.map((item, index) => {
        return (<Post post={item} index={index} token={token}/>)
      })
      } 
    </DivConteiner>
}