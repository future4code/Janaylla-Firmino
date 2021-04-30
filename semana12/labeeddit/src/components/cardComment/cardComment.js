import React, { useState, useEffect } from 'react'
import {DivConteiner, Card} from './styled'
import {Comments, DivComments, DivInteractions, CardContentComment} from './styled'
import CardLike from '../cardLike/cardLike'
import {usePut, useGet } from '../../hooks/hooksAxio'


import { makeStyles } from '@material-ui/core/styles';
import {CardHeader, CardContent, CardActions, IconButton, Typography, Avatar} from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import MaskDate from '../../constants/maskDate'

import styled from 'styled-components'

import {IconButtonNotPointer} from '../../globalStyled'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 800,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    
  },
}));

export default function CardCommennts({token, comment, idPost, update}){
  const [putVote, loadingVote, sucess] = usePut()
  const [userVoteDirection, setUserVoteDirection] = useState(comment.userVoteDirectio)

  const AvatarBgColor = styled(Avatar)`
  background-color: ${"red"} !important;
  `
  const classes = useStyles();
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
     if(comment.userVoteDirection === userVoteDirection || !userVoteDirection){
   setVoteCount(comment.votesCount)
   setUserVoteDirection(comment.userVoteDirection)
  }
  }, [loadingVote])
 
    return <DivConteiner>
      <CardHeader
        avatar={
          <AvatarBgColor aria-label="recipe" className={classes.avatar}>
               {(typeof(comment.username) === "string")? comment.username.substring(0, 1) : ""}
          </AvatarBgColor>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={MaskDate(comment.createdAt)}
        title= {comment.username}
      />
      <CardContentComment>
        <Typography variant="body2" color="textSecondary" component="p">
        {(typeof(comment.username) === "string")?comment.text : "Não é possivel exibir este comentário"}
        </Typography>
      </CardContentComment>
      <CardActions disableSpacing>
     
     
      <DivInteractions>
        
          <CardLike
           onClickVote={onClickVote} 
           userVoteDirection={userVoteDirection}
           votesCount={votesCount}
          />
            </DivInteractions>
             </CardActions>

    </DivConteiner>
}