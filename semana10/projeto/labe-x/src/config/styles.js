import styled from 'styled-components'
import {Button, FormControl, InputLabel, FormHelperText, FilledInput, InputAdornment, TextField } from '@material-ui/core'
import Background from '../assets/background.png'
const colorPrimary = "663399";
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
              color: ${colorPrimary};
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
        transform: scale(1.05) !important;
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
`
export const Filtro = styled.div`
    background-color: #dddddd;
    width: 350px;
    height: 100%;
`
export const ListTrips = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;   
    width: 100%;
    overflow-y: auto;
    /* background-color: red; */
`
export const Trip = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
 
    ul{
        width: 350px;
    background-color: #${colorPrimary}20;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    height: 100%;
      font-family: 'Fauna One', serif;
      font-size: 17px;
      font-weight: 600;
    
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
        height: 40px;
    }
    li > span{
        color: #${colorPrimary}bb;
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
export const ButtonLogin = styled(Button)`
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
padding-right: 20px;
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
    background-color: #${colorPrimary}50;
`
export const MainRight = styled.div`
   width: 50%;
   overflow-y: auto;
    height: 100%;
    padding-top: 50px;

`
export const TripInform = styled.div`
/* background-color: aliceblue; */
min-height: 100%;
display: flex;
justify-content: center;
align-items: center; 
ul:first-child{
    align-self: center;
}
    ul{
display: flex;
justify-content: center;
align-items: flex-start; 
flex-direction: column;
font-size: 20px;
width: 300px;
img{
    width: 150px;
}

        li{
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
`
export const CardCandidates = styled.div`

`
export const CardsCandidates = styled.div`

`