import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom'
import {goToHome} from '../../router/coordinators'
import { fade, makeStyles } from '@material-ui/core/styles';
import {Img} from './styled'
import Logo from '../../img/logo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function SearchAppBar({title}) {
  const classes = useStyles();
const history = useHistory()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => goToHome(history)}
          >
              <Img src={Logo}/>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
           
            {title}
          </Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
}