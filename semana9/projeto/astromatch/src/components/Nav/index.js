import styled from "styled-components"
import React, { useEffect } from 'react';
import {Box} from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const Nav = styled.nav`
width: 100%;
justify-content: space-around;
align-items: center;
position: relative;
display: flex;
border-bottom: 1px solid black;
height: 10%;
#home{
font-size: 40px;
width: 80px;
 align-items: center;
 display: flex;
 justify-content: center;
 letter-spacing: -13px;
 cursor: pointer;
 color: black;
  opacity: 0.7;
  transition: 0.3s ease-in;
  :hover{
    opacity: 1;
  }
  #favorite30{
    font-size: 30px;
 }
 #favorite40{
    font-size: 40px;
 }
 h2{
  font-size: 40px !important;
  display: flex;
  flex-wrap:nowrap;
justify-content: space-around;
align-items: center;

 }
}


#match{
font-size: 40px !important;
width: 80px;

 align-items: center;
 display: flex;
 justify-content: center;
 letter-spacing: -10px;
 cursor: pointer;
 color: black;
  opacity: 0.7;
 transition: 0.3s ease-in;
  :hover{
    opacity: 1;
  }
  div:nth-of-type(n+2){
    font-size: 20px;
    letter-spacing: -5px;
    
   align-self: flex-start;
 }

}
h2{
  font-size: 30px;
  display: flex;
  flex-wrap:nowrap;
justify-content: space-around;
align-items: center;
cursor: pointer;
  }
`
function Index(props) {
 
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [coracao, setCoracaoBate] = React.useState(false);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setCoracaoBate(true);
    setTimeout(function(){
      setCoracaoBate(false);
    }, 1000);
  }, [props.matchesLength])
  const open = Boolean(anchorEl);

    return (
      <Nav>
       <Box color="primary.main"><h2 onClick={() => props.setPage("home")}>astroMatch</h2></Box>
       { props.page === "match" ?
        <span class="material-icons" id="match" onClick={() => props.setPage("home")}>
            <Box>perm_identity</Box>
          <Box color="primary.main">favorite</Box>
          <Box>add</Box>
         </span>     
       :
        <div>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >  
      <span class="material-icons" id="home" onClick={() => props.setPage("match", props.matchesLength )}>
        <Box>perm_identity</Box>
        {coracao ? <Box color="primary.main" id="favorite40">favorite</Box> :
        <Box color="primary.main" id="favorite30">favorite</Box>
        }
        
        <Box>perm_identity</Box> 
         </span> 
      </Typography>
    
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>{props.matchesLength} meetch</Typography>
      </Popover>
    </div>
      }
      </Nav>
      
    );
  }
  
  export default Index;
  