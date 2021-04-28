import React, {useEffect, useLayoutEffect, useState} from 'react'
import {goToHome} from '../../router/coordinator'
import {DivConteiner} from './styled'
import {useHistory} from 'react-router-dom'
import { useGet } from '../../hooks/hooksAxio'
import Post from '../../components/cardPost/cardPost'
import CardAddPost from '../../components/cardAddPost/cardAddPost'
export default function Feed(){
  
  const history = useHistory();
  const [posts, getPost, loading] = useGet([]);
  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem('user')))
  useLayoutEffect(() => {
     if(!window.localStorage.getItem('user')){
      goToHome(history);
     } 
  })
  useEffect(() => {
     token.token && getPost(token.token, "posts", "/posts");
  }, [])
    return <DivConteiner>
      {<CardAddPost/>}
      {posts.map((item, index) => {
        return (<Post post={item} index={index} token={token}/>)
      })
      }
    </DivConteiner>
}