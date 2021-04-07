import styled from "styled-components"
import React,{useEffect, useState} from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
const CardImg = styled.div`
    height: 100%;
    width: 100%;
     /* background-color: rosybrown;  */
    display: flex;
    align-items: center;
    justify-content: center;
    
    img{
        max-height: 100%;
        max-width: 100%;
    }
`
const CardMatche = styled.div`
    width: 100%;
    justify-content: flex-start;
    align-items:center;
    display: flex;
    padding: 5px 5px;
    cursor: pointer;
    h3{
      margin-left: 10px;
    }
    :hover{
      background-color: #880e4f20;
    }

`
const CardMatches = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    flex-direction: column;
    width: calc(100% - 40px);
`

const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
function Index(props) {
  const classes = useStyles();

  const [match, setMatch] = useState([]);


  const getMatch = async () => {
    try {
      const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Janaylla/matches`);
      console.log(response.data.matches);
      setMatch(response.data.matches);
     console.log(Object.keys(response.data.profile).length === 0)
    } catch (error) {
      // console.log(error.message)
    }
  }
  useEffect(() => {
    getMatch();
  }, [])
        return (
        <CardMatches>
            {match.map((person) => {
              return (
                <CardMatche>
                <Avatar alt="Remy Sharp" src={person.photo}  className={classes.large} />
                <h3>{person.name}</h3>
                </CardMatche>
              );
            })
            
}
    </CardMatches>
    );
  }
  
  export default Index;
  