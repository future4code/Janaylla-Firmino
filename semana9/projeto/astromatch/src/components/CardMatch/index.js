import styled from "styled-components"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Index(props) {
  
  const CardMatche = styled.div`
    width: 100%;
    justify-content: flex-start;
    align-items:center;
    display: flex;
    padding: 10px 50px;
    cursor: pointer;
  
    h3{
      margin-left: 10px;
      text-align: start;
    }
    :hover{
      background-color: #880e4f20;
    }

`

  const classes = useStyles();

        return (
                <CardMatche>
                <Avatar alt={"foto de " + props.name} src={props.photo} className={classes.large} />
                <h3>{props.name}</h3>
                </CardMatche>
              );
  }
  
  export default Index;
  