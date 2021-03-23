import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const FormCadastro = styled.fieldset`

width: 400px;
display: flex;
flex-direction: column;
font-size: 30px;
align-items: center;
input{
  width: 100%;
  margin: 5px 0px;
  padding: 3px;
  font-size: 18px;
}
button{
  margin-top: 5px;
}
button:hover{
  background-color: green;
  color:white;

}
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
}
`
class Cadastro extends React.Component{
  state = {
    pagina: "cadastra",
    inputNomeUsuario: "",
    inputEmailUsuario: ""
  }
  onChangeInputNome = (e) => {
    this.setState({inputNomeUsuario: e.target.value})
  }
  onChangeInputEmail = (e) => {
    this.setState({inputEmailUsuario: e.target.value})
  }
  onClickEnviar = () => {
    const bory = {
      name: this.state.inputNomeUsuario,
      email: this.state.inputEmailUsuario
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
    bory,
    {
      headers: {
        Authorization: "janaylla-firmino-cruz"
      }
    }
    ).then((res) => {
      this.setState({
        inputNomeUsuario: "",
        inputEmailUsuario: ""
      })
      alert("Enviado com sucesso")
    }).catch((err) => {
      console.log(err.response.data);
    })
  }
  render(){
  return (
    <Todo>
      <BotaoMudarPagina  onClick={() => this.props.mudarPagina("Lista")}>Lista</BotaoMudarPagina>
     <FormCadastro>
       <legend>Cadastro</legend>
         <input type="text" value={this.state.inputNomeUsuario} onChange={this.onChangeInputNome}></input>
         <input type="email" value={this.state.inputEmailUsuario} onChange={this.onChangeInputEmail}></input>
         <button onClick={this.onClickEnviar}>Enviar</button>
     </FormCadastro>
    </Todo>
  );
  }
}

export default Cadastro;
