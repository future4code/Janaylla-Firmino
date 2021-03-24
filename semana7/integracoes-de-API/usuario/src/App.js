import React from 'react'
import styled from 'styled-components'
import Cadastro from './components/cadastrar-usuarios/cadastrar-usuarios'
import Lista from './components/listar-usuarios/listar-usuarios'
const Todo = styled.div`
`
export default class App extends React.Component{
  state = {
    pagina: "Lista"
  }
  mudarPagina = (pagina) => {
    this.setState({
      pagina: pagina
    })
  }
  render(){
  return (
    <Todo>
      {this.state.pagina === "Cadastro"?
      <Cadastro mudarPagina={this.mudarPagina}></Cadastro>:
      <Lista  mudarPagina={this.mudarPagina}></Lista>}
    </Todo>
  );
}
}


