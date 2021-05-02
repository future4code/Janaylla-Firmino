import React,{useEffect, useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {CardHeader, CardContent, CardActions, IconButton, Typography, Avatar} from '@material-ui/core';


import MaskDate from '../../constants/maskDate'

import {DivConteiner, Comments, DivComments, DivInteractions, MenuShare, MenuDiv, MenuItem} from './styled'
import {usePut } from '../../hooks/hooksAxio'
import CardLike from '../cardLike/cardLike'
import { useHistory} from 'react-router-dom'
import {goToPost} from '../../router/coordinator'

import {IconButtonNotPointer} from '../../globalStyled'
import Error from '../../components/error/error'

import Whats from '../../assets/whats_icon.png'
import Face from '../../assets/facebook_icon.png'
import Linke from '../../assets/linkedin_icon.png'
import Twitter from '../../assets/twitter_icon.png'
import Email from '../../assets/email_icon.png'

import {LinearProgressGlobal} from '../../globalStyled'
const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 800,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function Post({post, token, color}) {
  const classes = useStyles();
 
  const [putVote, loadingVote, sucess] = usePut()
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
        
      }
    }, [sucess])
  
    useEffect(()=>{
        setVoteCount(post.votesCount)
        setUserVoteDirection(post.userVoteDirection)
    }, [post.votesCount])
    
    const link = "www.google.com"
    const text = "Texto"

const ShareButtons = () => {
  return (  <MenuShare>
    <MenuItem >
    <a target="_blank" href={`https://api.whatsapp.com/send?text=${text}`}><img src={Whats} title={post.title}/></a>
    </MenuItem>

    <MenuItem>
    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${link}`} target="_blank" title={post.title}>
    <img src={Linke}/></a>
    </MenuItem>
       <MenuItem>
    <a href={`https://twitter.com/intent/tweet?url=${link}&text=${text}`} target="_blank" title={post.title}>
    <img src={Twitter}/></a>
    </MenuItem>
    
    <MenuItem>
    <a href={`mailto:info@example.com?&subject=&cc=&bcc=&body=${link}%0A${text}`} target="_blank" title={post.title}>
    <img src={Email}/></a>
    </MenuItem>
    <MenuItem>
    <a href={`https://www.facebook.com/sharer.php?u=${"Texto"}`}target="_blank" title={post.title}>
    <img src={Face}/></a>
    </MenuItem>
    <MenuItem><img/></MenuItem>
  </MenuShare>)
}


return (
    <DivConteiner className={classes.root}>
            
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{backgroundColor: color}}>
               {post.username.substring(0, 1)}
          </Avatar>
        }
        action={
          <>
          {ShareButtons()}
          </>
        }
        title= {post.username}
        subheader={MaskDate(post.createdAt)}
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="h4">
          {post.title}
          </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {post.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
     {post.id !== "request"? <DivInteractions>
          <CardLike
           onClickVote={onClickVote} 
           userVoteDirection={userVoteDirection}
           votesCount={votesCount}
          />
        
            <DivComments>
            <IconButton aria-label="share">
            <Comments onClick={() => goToPost(history, post.id)}/>
         </IconButton>
              <IconButtonNotPointer>
            <h4>{post.commentsCount}</h4>
            </IconButtonNotPointer>
            </DivComments>
            </DivInteractions>
            :
            <LinearProgressGlobal/>
            }
             </CardActions>
             
             {loadingVote &&  <LinearProgressGlobal/>}
             {sucess === -1 && <Error text="Parece que seu voto não foi registrado. Tente novamente"/>}
        </DivConteiner>
  );
}