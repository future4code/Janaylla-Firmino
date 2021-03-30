
import styled from 'styled-components'


export const Todo = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-direction: column;
    min-height: 100vh;
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
export const FormDiv = styled.div`
position: relative;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    align-items: center;
    justify-content: center;
    border-radius: 25px 0px 25px 0px;
    margin: 20px 0;
    label{
        color: red;
        cursor:inherit;
    }
    input{
        padding: 5px;
        border: white solid 2px;
        border-radius: 25px;
    }
    input:focus{
        padding: 5px;
        outline: 0;
        border: red solid 2px;
        border-radius: 25px !important;
    }
    button{
        padding: 5px 20px;
        cursor: pointer;
        background-color: black;
        border-radius: 25px;
        color: white;
        border: white solid 2px;
        :focus{
            outline: 0;   
        }
        :hover{
            border: greenyellow solid 2px;
        }
    }
    *{
        font-size: 20px;
        margin: 5px 0;
        font-weight: 700;
    }
`

export const MensagemErro = styled.div`
background-color: red;
color: black;
border-radius: 15px 0px 15px 0px;
padding: 5px 10px;
`
export const MensagemSucesso = styled.div`
background-color: greenyellow;
color: black;
border-radius: 15px 0px 15px 0px;
padding: 5px 10px;
`

export const ButtonDiv = styled.div`
     margin: 10px;
     padding: 10px 20px;
     border-radius: 25px;
     width: auto;
     font-weight: 800;
     cursor: pointer;
         color: red !important;
         background-color: black;
         border: white 2px solid;
     :hover{
         color: red !important;
         background-color: black;
         border: red 2px solid;
     }
`
