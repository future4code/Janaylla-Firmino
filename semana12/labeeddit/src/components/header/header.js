import {DivConteiner, ButtonHeader, DivIcon, ImgIcon, DivStart} from './styled'
import Reddit from '../../assets/reddit_icon.png'
import {goToHome} from '../../router/coordinator'
import { useHistory } from "react-router-dom";
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header({textButton, onClickButton, search, onChangeSearch}){
  const history = useHistory();  
  const classes = useStyles();

    return (<DivConteiner>
      <DivStart>
<DivIcon onClick={() => goToHome(history)}>
  <ImgIcon src={Reddit} />
  <h3>LabeEddit</h3>
</DivIcon>
{(onChangeSearch) &&  <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
               value={search}
              onChange={onChangeSearch}
            />
          </div>}
</DivStart>
        {onClickButton && <ButtonHeader variant="outlined" color="primary" onClick={onClickButton} >
        {textButton}
      </ButtonHeader>  }
    </DivConteiner>)
}