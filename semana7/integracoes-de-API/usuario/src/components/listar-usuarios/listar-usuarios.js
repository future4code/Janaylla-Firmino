import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Delete from '../../img/delete.ico'
import Detalhar from '../detalhar-usuarios/detalhar-usuarios'

const DivLista = styled.fieldset`
width: 400px;
display: flex;
flex-direction: column;
font-size: 30px;
align-items: center;
`

const BotaoMudarPagina = styled.button`
align-self: flex-start;
margin: 15px;
`

const Todo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
button{
  font-size: 18px;
  cursor: pointer;
  padding: 3px 5px;
}`
const UlUsuario = styled.ul`
list-style: none;
display: flex;
flex-direction:column;
width: 100%;
font-size: 25px;
li{
  
  display: flex;
  align-items: center;
  justify-content: space-between;
}
li > img{
  width: 25px;
  cursor: pointer;
  :hover{
    background-color: red;
    border-radius: 50%;
  }
}

li > div{
    cursor: pointer;
    color: #505050;
    width: 100%;
    justify-content: space-between;
    :hover{
      color: black;
    }
  } 
  `
const Botao = styled.div`
cursor:pointer;
display: flex;
align-items: center;
font-size: 18px;
:hover{
  img{
    background-color: red;
    border-radius: 50%;
  }
}
`

const DivPesquisa = styled.div`
display: flex;
align-items: center;
`

class Lista extends React.Component{
  state = {
    usuarios:[],
    usuarioDetalhe: [],
    inputBuscaUsuario:"",
    pesquisa: false
  }
  
 
  atualizarLista = () =>{
 
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
    {
        headers: {
        Authorization: "janaylla-firmino-cruz"
      }
    }
    ).then((res) => {
      console.log(res.data);
      this.setState({
        usuarios: res.data
      })
    }).catch((err) => {
      console.log(err.response.data);
    })
  }
  componentDidMount(){
  this.atualizarLista();
  }
  onClickDelete = (id, name) =>{
    console.log(id)
    if(window.confirm("Tem certeza que deseja deletar?")){
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
   {
      headers: {
        Authorization: "janaylla-firmino-cruz"
      }
  }).then((res) => {
      alert(`O usuário ${name} foi deletado`)
    }).catch((err) => {
      console.log(err.response.data);
      console.log(id)
    })
  }
}
onClickdetalharUsuarioID = (id) => {
  if(id){
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
    {
       headers: {
         Authorization: "janaylla-firmino-cruz"
       }
   }).then((res) => {
    this.setState({
      usuarioDetalhe: res.data
    });
    console.log(res.data);

     }).catch((err) => {
       console.log(err.response.data);
     })
  }
}
onClickPesquisa = () => {

  axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.inputBuscaUsuario}&email= `,
  {
    headers: {
      Authorization: "janaylla-firmino-cruz"
    }
  }).then((res) => {
    console.log(res.data);
    this.setState({
      inputBuscaUsuario: "",
      usuarios: res.data,
      pesquisa: true
    })
  }).catch((err) => {
    console.log(err.response.data);
  })
}

onClickFechar = () => {
  this.setState({usuarioDetalhe: ''});
}
onChangeInputBusca = (e) => {
    this.setState({inputBuscaUsuario: e.target.value})
}
onClickLimparPesquisa = () => {
  this.setState({pesquisa: false});
  this.atualizarLista();
}
detalhar = () => {
  
  return (<Detalhar onClickFechar={this.onClickFechar}
    nome={this.state.usuarioDetalhe.name}
    email={this.state.usuarioDetalhe.email} 
    id={this.state.usuarioDetalhe.id}
    onClickDelete={this.onClickDelete}
  ></Detalhar>)
  }

  render(){
    const lista = this.state.usuarios.map((item) =>{
        return <li>
          <div onClick={() => this.onClickdetalharUsuarioID(item.id)}>{item.name}</div>
          <img src={Delete} onClick={() => this.onClickDelete(item.id, item.name)}></img>
        </li>
      })
  return (
    <Todo>
     <BotaoMudarPagina onClick={() => this.props.mudarPagina("Cadastro")}>Cadastro</BotaoMudarPagina>
     <DivLista>
       <legend>Lista de usuario</legend>
       <DivPesquisa>
       <input type="text" value={this.state.inputBuscaUsuario} onChange={this.onChangeInputBusca}></input>
       <Botao onClick={this.onClickPesquisa}>
       <img src={Delete}></img>
       Pesquisa
       </Botao>
       {this.state.pesquisa && <Botao onClick={this.onClickLimparPesquisa}>
       <img src={Delete}></img>
       Limpar pesquisa
       </Botao>}
       </DivPesquisa>
       <UlUsuario>
            {lista}
       </UlUsuario>
    
     </DivLista>
      {this.state.usuarioDetalhe !="" && this.detalhar()}
    </Todo>
  );
}
}

export default Lista;
