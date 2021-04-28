import Router from "../src/router/Router";
import React from 'react';
import {DivApp} from './globalStyled'
import GlobalState from "./global/GlobalState";
import './App.css';
function App() {
  return (
    <GlobalState>
    <DivApp>
      <Router/>
    </DivApp>
    </GlobalState>
  );
}

export default App;
