import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Delete from '../../img/delete.ico'
import Editar from '../../img/editar.ico'
import Salvar from '../../img/salvar.ico'
import Fechar from '../../img/fechar.ico'

const Todo = styled.div`
position: fixed;
height: 100vh;
width: 100%;
background-color: #000000aa;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const DivDetalhe = styled.fieldset`
background-color: white;
flex-direction: column;
align-items: center;
  width: 500px;
legend{
display: flex;
  background-color: white;
  padding: 0px 10px;
  border-radius: 5px;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  div{
    display: flex;
    
  }
}

`
const UlUsuario = styled.ul`
list-style: none;
display: flex;
flex-direction:column;
width: 100%;
font-size: 25px;
li{
  
}
li > img{
  width: 25px;
  cursor: pointer;
}
`
const Botao = styled.div`
cursor:pointer;
display: flex;
align-items: center;
font-size: 17px;
margin-left: 10px;
    img{
width: 20px;  

filter: gray; /* IE6-9 */
    -webkit-filter: grayscale(75%);
    }
:hover{
  img{
    -webkit-filter: grayscale(0%);
  }
}
`
const DivBotao = styled.div`
display: flex;
`
class Detalhar extends React.Component{
  state = {
    usuario: {},
    editar: false,
    inputNomeE: this.props.nome,
    inputEmailE: this.props.email,
    inputIdE: this.props.id
  }
  editar = () => {
    this.setState({
      editar: !this.state.editar
    })
  }
  ulUsuario = () => {
    return (
  <div>
    <UlUsuario>
      <li>Nome: {this.state.inputNomeE}</li>
      <li>E-mail: {this.state.inputEmailE}</li>
   </UlUsuario>
   </div>
    )
  }
  onClickEditarSalvar = () => {
    const id = this.state.inputIdE;
    const bory = {
      name: this.state.inputNomeE,
      email: this.state.inputEmailE
    };
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
    bory,
   {
      headers: {
        Authorization: "janaylla-firmino-cruz"
      }
  }).then((res) => {
      alert(`Informações Editadas`);
      this.setState({
        editar: false
      })
    }).catch((err) => {
      console.log(err.response.data);
      console.log(id)
    })
  }
  onChangeNameE = (e) => {
    this.setState({inputNomeE: e.target.value})
  }
  onChangeEmailE = (e) =>{
    this.setState({inputEmailE: e.target.value})
  }
  ulUsuarioEditar = () => {
    return (
      <div>
      <UlUsuario>
      <li>Nome: <input value={this.state.inputNomeE} onChange={this.onChangeNameE}/></li>
      <li>E-mail:  <input value={this.state.inputEmailE} onChange={this.onChangeEmailE}/></li>
      
   </UlUsuario>
   <DivBotao>
    <Botao onClick={this.onClickEditarSalvar}>  <img src={Salvar}></img>
   Salvar</Botao>
    <Botao onClick={this.editar}>  <img src={Fechar}></img>Cancelar</Botao>
    </DivBotao>
    </div>
    )
  }
  render(){
  return (
    <Todo>
      <DivDetalhe>
        <legend>Usuário detalhes
          <div>
            <Botao onClick={this.editar}><img src={Editar} />Editar</Botao>
            <Botao onClick={() => this.props.onClickDelete(this.props.id, this.props.nome)}><img src={Delete}/>Delete</Botao>
            <Botao onClick={() => this.props.onClickFechar()}> <img src={Fechar} />Fechar</Botao>
                </div>
                </legend>
                
         
            {this.state.editar ? this.ulUsuarioEditar(): this.ulUsuario() }
      </DivDetalhe>
    </Todo>
  );
  }
}
export default Detalhar;
