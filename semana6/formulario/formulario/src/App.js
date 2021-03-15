import React from "react";
import styled from 'styled-components';
import FormEtapa1 from './components/form-etapa1.js'
import FormEtapa2 from './components/form-etapa2.js'
import FormEtapa3 from './components/form-etapa3.js'
import FormAgradecimentos from './components/form-agradecimentos.js'

const Todo = styled.div`
/* background-color: green; */
height: 100vh;
`
export default class App extends React.Component {
  state = {
    paginaAtual: "form-etapa1"
  };
  etapa1 = () =>{
    this.setState({
      paginaAtual:"form-etapa2"
    });
  }
  etapa2 = () =>{
    this.setState({
      paginaAtual:"form-etapa3"
    });
  }
  etapa3 = () =>{
    this.setState({
      paginaAtual:"form-agradecimentos"
    });
  }
  render() 
  {  
    const renderizaTela = () =>{
    switch(this.state.paginaAtual){
        case "form-etapa1":
          return <FormEtapa1 etapa12={this.etapa1} etapa13={this.etapa2}></FormEtapa1>;
          case "form-etapa2":
            return <FormEtapa2 etapa2={this.etapa2}></FormEtapa2>;
            
          case "form-etapa3":
            return <FormEtapa3 etapa3={this.etapa3}></FormEtapa3>;
            
          case "form-agradecimentos":
            return <FormAgradecimentos></FormAgradecimentos>
    }
  }
    return <Todo>
      {renderizaTela()}
    </Todo>
  }
}
