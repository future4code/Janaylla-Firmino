import styled from 'styled-components'
import {Button, FormControl, InputLabel, FormHelperText, FilledInput, InputAdornment, TextField, Snackbar } from '@material-ui/core'
import Background from '../assets/background.png'
const colorPrimary = "663399";
const sizeNav = "80";
const sizeNavMobile = "40";

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
      
      span{
          display: none;
      }
    @media(max-width: 600px){
        min-height: ${sizeNavMobile}px; 
        height: auto;
        display: flex;
        align-items:center;
        justify-content: center;
        flex-direction: column;
        position: fixed;
        @media(max-width: 600px){
            z-index: 1;
            #mobile{
                display: flex;
            }
            #desktop{
                display: none;
            }
        }
        span{
            height: 100%;
            width: 100%;
            justify-content: center;
            align-items: center;
                display: flex;
        }
        ul{
            flex-direction: column;
            font-size: 15px; 
            top:${sizeNavMobile}px; 
            left: 0;    
        
        }
    }
      ul{
         
        width: 100%;
      display: flex;
      align-items: center;
      padding: 10px;
      /* font-family: 'Fauna One', serif; */
      li{
          margin: 0 10px;
          cursor: pointer;
          :hover{
              color: #884fbd;
          }
      }
      #currentPage{
        color: #bf8df2;
      }
      }
`
export const NavA = styled(Nav)`
li:last-of-type{
    position: absolute;
  text-align: end;
  right: 0;
  padding: 10px;
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
    /* font-family: 'Fauna One', serif; */

    @media(max-width: 600px){
        font-size: 15px;
        padding: 10px;
    }
    
`
export const ButtonApresetation = styled(Button)`
    /* background-color: #ffffffaa !important; */
    margin: 10px !important;
    font-size: 20px !important;
    border-radius: 200px !important;
    :hover{
        transform: scale(1.05) !important;
    }
    @media(max-width: 600px){
    
            font-size: 18px !important;
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
    width: 100%;
   
`
export const Main = styled.div`
    display: flex;
    align-items: stretch;
    height: calc(100% -  ${sizeNav}px);
    @media(max-width: 600px){
        height: calc(100%);
        padding: 10px;
        flex-direction: column;
        height: auto;
    }
    
`
export const Filtro = styled.div`
    background-color: #dddddd;
    width: 350px;
    height: 100%;
`
export const ListTrips = styled.section`
h4{
    width: 100%;
    padding: 10px;
}
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;   
    width: 100%;
    overflow-y: auto;
    /* background-color: red; */
    @media(max-width: 600px){
        margin-top: ${sizeNavMobile}px;
    }
`
export const Trip = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul{
        min-width: 100%;
        max-width: 400px;
        background-color: #${colorPrimary}20;
        padding: 10px;
        margin: 10px 0;
        border-radius: 10px;
        height: 100%;
        /* font-family: 'Fauna One', serif; */
        font-size: 17px;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        @media(max-width: 600px){
            margin: 10px 0;
        }
    li:first-of-type{
        color: #${colorPrimary};;
        text-align: center;
        font-size: 18px;
        margin: 2px;
        font-weight: 900;
    }
    li:nth-of-type(2){
        text-align: justify;
        margin: 2px 0;
        height: 150px;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 10px 5px;
        ::-webkit-scrollbar-track {
         background-color: #${colorPrimary}30;
         border-radius: 50%;
}
::-webkit-scrollbar {
    border-radius: 50%;
    width: 5px;
    background: #${colorPrimary}30;
}
::-webkit-scrollbar-thumb {
    background: #${colorPrimary}ff;
    border-radius: 50%;
}
    }
    li > span{
        color: #${colorPrimary};
    }
    li:last-of-type{
        align-self: center;
        display: flex;
        flex-wrap: wrap;
    }
    }
    
`
export const Form = styled.form`
    background-color: #ffffffaa;
    padding: 20px;
    width: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    @media(max-width: 600px){
        width: 100%;
        padding: 10px;
    }
    
`
export const FormControlLogin = styled(FormControl)`
margin: 10px !important;
`
export const InputLabelLogin = styled(InputLabel)`

`
export const FormHelperTextLogin = styled(FormHelperText)`
`
export const FilledInputLogin = styled(FilledInput)`
`
export const ButtonForm = styled(Button)`
margin: 10px !important;

border-radius: 200px !important;
:hover{
        transform: scale(1.05) !important;
    }
`
export const InputAdornmentLogin = styled(InputAdornment)`
span{
    cursor: pointer;
    
    :hover{
        color: ${colorPrimary};
        }

}`
export const TextFieldLogin = styled(TextField)`
    margin: 5px !important;
`
export const FormCreate = styled(Form)`
    width: 600px;
`
export const FormFiltro = styled.div`
width: 100%;
padding-right: 25px;
*{
font-size: 18px !important;
}

@media(max-width: 600px){
        margin-top: ${sizeNavMobile}px;
        display: none;
    }
` 
export const DivFormDois = styled.div`
display: flex;
align-items: center;
p{
    color: #${colorPrimary};
}
>:first-child{
    width: calc(50% - 5px);
    padding: 0 10px 0 0;
}
>:last-child{
    width: calc(50% - 5px);
    padding: 0 0 0 10px;
}
`
export const Centalizar = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const MainLeft = styled.div`
    width: 50%;
    background-color: #${colorPrimary}20;
    @media(max-width: 600px){
        width: 100%;
        height: auto;
        }
`
export const MainRight = styled.div`
   width: 50%;
   overflow-y: auto;
    height: 100%;
    padding-top: 50px;
    @media(max-width: 600px){
        width: 100%;
        margin-top: ${sizeNavMobile}px;
        height: auto;
    }

`
export const TripInform = styled.div`
/* background-color: aliceblue; */
min-height: 100%;
display: flex;
justify-content: center;
align-items: center; 

position: relative;  
> div{
  width: 100%;
  height: 100%;
  position: absolute;  
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: -1;
  img{
      max-width: 100%;
      max-height: 100%;
  }
}
ul:first-child{
    z-index: 1;
  position: absolute;  
  /* background-color: black; */
  top: 0;
  left: 0;
    align-self: center;
    position: absolute;
      
}
    ul{
display: flex;
justify-content: center;
align-items: flex-start; 
flex-direction: column;
font-size: 20px;
font-weight: 700;
max-width:400px;

        li:nth-of-type(2){
            padding: 10px 0px;
            display: flex;
            height: 200px;
            overflow-y: auto;
            ::-webkit-scrollbar-track {
                    background-color: #${colorPrimary}30;
                    border-radius: 50%;
            }
            ::-webkit-scrollbar {
                border-radius: 50%;
                width: 5px;
                background: #${colorPrimary}30;
            }
            ::-webkit-scrollbar-thumb {
                background: #${colorPrimary}ff;
                border-radius: 50%;
            }
        }
        li{
            padding: 2px 0px;
            span{
                color: #${colorPrimary};
            }
        }
    }
`
export const MenuDetails = styled.div`
display: flex;
position: fixed;
margin-top: -50px;
padding: 10px;
background-color: #ffffffaa;
width: 100%;
h3{
    cursor: pointer;
    margin: 3px 5px;
}
#current{
    color: #${colorPrimary};
}

@media(max-width: 600px){
    position: relative;
}
`
export const CardCandidates = styled(Trip)`
    ul li:last-child{
        align-self: flex-start
    }
`
export const CardsCandidates = styled.div`

`
export const MaxMin = styled.div`
width: 100%;
display: flex;
font-size: 15px;
font-weight: 700;
justify-content: space-between;
span{
    color: #${colorPrimary};
}
`

export const CentalizarProgess = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const SnackbarGreen = styled(Snackbar)`
    background-color: green !important;
    *{
        background-color: green !important;
    }
`
export const SnackbarRed = styled(Snackbar)`
    background-color: red !important;
    *{
        background-color: red !important;
    }
`