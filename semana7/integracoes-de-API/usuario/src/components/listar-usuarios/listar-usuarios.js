import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Delete from '../../img/delete.ico'

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
`
class Lista extends React.Component{
  state = {
    usuarios:[]
  }
  
 componentDidMount(){
   
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
  onClickDelete = (id, name) =>{
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
  render(){
    const lista = this.state.usuarios.map((item) =>{
        return <li>
          {item.name}
          <img src={Delete} onClick={() => this.onClickDelete(item.id, item.name)}></img>
        </li>
      })
  return (
    <Todo>
     <BotaoMudarPagina onClick={() => this.props.mudarPagina("Cadastro")}>Cadastro</BotaoMudarPagina>
     <DivLista>
       <legend>Lista de usuario</legend>
       <UlUsuario>
            {lista}
       </UlUsuario>
    
     </DivLista>
    </Todo>
  );
  }
}

export default Lista;
