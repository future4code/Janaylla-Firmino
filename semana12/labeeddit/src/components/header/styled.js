import styled from 'styled-components'
import {Button} from '@material-ui/core'

export const DivConteiner = styled.div`
    background-color: #1976d2;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
`
export const ButtonHeader = styled(Button)`
background-color: white !important;
`
export const DivIcon = styled.div`
    cursor: pointer;
    opacity: 0.9;
    display: flex;
    align-items: center;
    color:white; 
    :hover{
        opacity: 1;
    }
    h3{
        margin: 5px;
    }
    @media(max-width: 600px){
        h3{
            display: none;         
        }
    }
`
export const ImgIcon = styled.img`
    width: 55px;
`
export const DivStart = styled.div`
 display: flex;
    align-items: center;
`