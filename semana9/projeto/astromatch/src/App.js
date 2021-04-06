import React from 'react';
import { ThemeProvider } from "@material-ui/core/styles"
import styled from "styled-components"
import { Theme } from "./Theme"
import Coracao from './img/coracao.png'
import Index from './pages/index'
const Todo = styled.div`
  background-image: url(${Coracao});
  background-size: 30px;
  height: 100vh;
 
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    
  }
  >div{
    background-color: #ffffffaa;
   padding: 20px;
   height: 100%;
    width: 100%;
    
  display: flex;
  justify-content: center;
  align-items: center;
  }
 
`
const Tela = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 500px;
  background-color: white;
  border-radius: 20px; 
  border: black 1px solid; 
`
function App() {
  return (
    
    <Todo>
      <div>
    <ThemeProvider  theme={Theme}>
      <Tela>
        <Index/>
      </Tela>
    </ThemeProvider>
    </div>
    </Todo>
    
  );
}

export default App;
