import styled from 'styled-components'
import {Button} from '@material-ui/core'
import Background from '../assets/background.png'

const sizeNav = "80";
export const Bory = styled.div`
    width: 100vw;
    height: 100vh;
    *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    
    }
`
export const Nav = styled.nav`
      width: 100%;
      /* background-color: black; */
      color: white;
      font-size: 25px;
      background-image: url(${Background});
      background-size: 100% ;
      height: ${sizeNav}px;
      align-items: center;
      display: flex;
      ul{
      display: flex;
      align-items: center;
      padding: 10px;
      font-family: 'Fauna One', serif;
      li{
          margin: 0 10px;
          cursor: pointer;
          :hover{
              color: rebeccapurple;
          }
      }
      #currentPage{
        font-weight: 700;
      }
      }
`

export const Apresetation = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url(${Background});
    background-size: 100% 100%;
    font-family: 'Fauna One', serif;
    
`
export const ButtonApresetation = styled(Button)`
    /* background-color: #ffffffaa !important; */
    margin: 10px !important;
    font-size: 20px !important;
    border-radius: 200px !important;
    :hover{
        /* background-color: #ffffff !important; */
    }
`
export const TextApresentation = styled.div`
    color: white;
    max-width: 700px;
    text-align: center;
    padding: 20px;
`
export const DivButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
export const Main = styled.div`
    display: flex;
    align-items: stretch;
    height: calc(100% -  ${sizeNav}px);
`
export const Filtro = styled.div`
    background-color: #dddddd;
    width: 250px;
    height: 100%;

`