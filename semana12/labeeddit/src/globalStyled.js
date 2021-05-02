import {Button, TextField, FormControl, Link, IconButton} from '@material-ui/core'
import { SportsHockeyTwoTone } from '@material-ui/icons'
import styled from 'styled-components'

export const DivApp = styled.div`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
export const TextFieldGlobal = styled(TextField)`
margin: 5px 0px !important; 
`
export const FormControlGlobal = styled(FormControl)`
margin: 5px 0px !important; 
`
export const ButtonGlobal = styled(Button)`
margin: 5px 0px !important; 
width: 100%;
`
export const DivButtons = styled.div`
  align-self: stretch;
  display: flex;
`

export const LinkGlobal = styled(Link)`
cursor: pointer;
`
export const IconButtonNotPointer = styled(IconButton)`
pointer-events:none;
*{
  color: #606060;
  font-size: 28px;
  }
`
export const IconEmoji = styled(IconButton)`
opacity: 1;
color: red !important;
width: 50px;
height: 50px;
`