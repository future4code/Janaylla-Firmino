import React, {useState} from 'react';
import { ThemeProvider } from "@material-ui/core/styles"
import styled from "styled-components"
import { Theme } from "./Theme"
import Coracao from './img/coracao.png'
import Index from './pages/index'
import Match from './pages/match'
import Nav from './components/Nav'
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
  max-width: 100%;
  background-color: white;
  border-radius: 20px; 
  border: black 1px solid; 
  flex-direction: column;
  overflow: hidden;
`
function App() {
  const [page, setPage] = useState("home");
  const [matchesLength, setMatchesLength] = useState(0);
  const setPages = (page) => {
    setPage(page);
  }
const matchesLengthFuctons = (matchesLength) => {
  setMatchesLength(matchesLength);
}
  return (
    <Todo>
      <div>
    <ThemeProvider  theme={Theme}>
      <Tela>
        <Nav setPage={setPages} page={page} matchesLength={matchesLength}/>
        {page === "match" ?
        <Match matchesLengthFuctons={matchesLengthFuctons}/>  :  <Index matchesLength={matchesLengthFuctons}/>}
      </Tela>
    </ThemeProvider>
    </div>
    </Todo>
    
  );
}

export default App;
