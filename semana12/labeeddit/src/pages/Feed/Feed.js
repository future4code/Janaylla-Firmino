import React, {useEffect, useLayoutEffect, useState, useContext} from 'react'
import {goToHome} from '../../router/coordinator'
import {DivConteiner, Posts, PostAddIcon} from './styled'
import {useHistory} from 'react-router-dom'
import Post from '../../components/cardPost/cardPost'

import CardAddPost from '../../components/cardAddPost/cardAddPost'
import Header from '../../components/header/header'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { red, orange, lime, lightGreen, green, cyan, indigo, pink, purple } from '@material-ui/core/colors';
import {Add} from '@material-ui/icons'

let colorTestes = []
export default function Feed(){
  const history = useHistory();
  const { postsGlobal, token } = useContext(GlobalStateContext);
  const color = [red, orange, lime, lightGreen, green, cyan, indigo, pink, purple]
  const [open, setOpen] = useState(false)
  const nRandon = (max, min) => {
    return Math.floor(Math.random() * (max - min  + 1)) + min;
  }
  const randonColor = () => {
    return color[nRandon(0, 8)][nRandon(3, 9) * 100];
  }

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
      
     <Header/>
      {<CardAddPost
      postFake={postFake}
      update={postsGlobal.getPosts}
      open={open} 
      setOpen={setOpen}
      />}
          <PostAddIcon color="primary" aria-label="scroll back to top" onClick={() => setOpen(true)}>
          <Add />
        </PostAddIcon>
      <Posts>
 
      {postsGlobal.currentPosts.map((item) => {
        let colorU = randonColor();
        const index = colorTestes.findIndex((i) => {return i[0] === item.username});
        if(index === -1){
        colorTestes.push([item.username, colorU])
       }
       else{
         colorU = colorTestes[index][1]
       }
        return (<>
        <Post post={item} token={token} color={colorU} />
        </>
        )
      })
      } 
      </Posts>

    </DivConteiner>
}