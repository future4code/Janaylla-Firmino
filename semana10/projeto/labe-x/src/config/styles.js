import styled from 'styled-components'
import {Button} from '@material-ui/core'

export const Nav = styled.nav`
      width: 100%;
      background-color: black;
      color: white;
      ul{
      display: flex;
      align-items: center;
      padding: 10px;
      li{
          margin: 0 10px;
          cursor: pointer;
          :hover{
              color: rebeccapurple;
          }
      }
      #currentPage{
        font-weight: 900;
      }
      }
`
export const Bory = styled.div`
    width: 100vw;
    height: 100vh;
    *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    }
`
export const Apresetation = styled.div`
    width: 100%;
    height: 100%;
    /* background-color:rebeccapurple; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const ButtonApresetation = styled(Button)`
    background-color: #111111;
    color: #f8f;
`
export const TextApresentation = styled.div`

`
export const DivButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`