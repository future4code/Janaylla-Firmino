import React from "react";
import styled from 'styled-components';

const Form = styled.div`
display: flex;
flex-direction: column;

`;
const LabelPegunta = styled.label`
`;
const InputResposta = styled.input``;

const SelectResposta = styled.select``;

export default class App extends React.Component {
    state = {
        nome:"",
        idade: "",
        email: "",
        escolaridade: "Ensino Médio Incompleto"
    }
    
    onChangeNome = (event) => {
        console.log(event)
        this.setState({
            nome: event.target.value
        })
    }  
    onChangeIdade = (event) => {
        this.setState({
            idade: event.target.value
        })
    }
    onChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }    
    onChangeEscolaridade = (event) => {
         this.setState({
            escolaridade: event.target.value
         })
     }
     
    render() {
        const botao = () => {
            if(this.state.escolaridade === "Ensino Superior Completo"){
                return  <button onClick={this.props.etapa12}>Próxima Etapa</button>
            }
            return  <button onClick={this.props.etapa13}>Próxima Etapa</button>
        }
     return <Form key="form">
            <label>1. Qual o seu nome?</label>
            <InputResposta type="text"  value={this.state.nome}  onChange={this.onChangeNome}></InputResposta>
            
            <label>2. "Qual sua idade?</label>
            <InputResposta type="text" value={this.state.idade} onChange={this.onChangeIdade}></InputResposta>
            
            <label>3. Qual seu email?</label>
            <InputResposta type="text" value={this.state.email} onChange={this.onChangeEmail}></InputResposta>
            
            <label>4. Qual a sua escolaridade?</label>
            <select value={this.state.escolaridade} onChange={this.onChangeEscolaridade}>
                <option>Ensino Médio Incompleto</option>
                <option>Ensino Médio </option>
                <option>Ensino Superior Incompleto</option>
                <option>Ensino Superior Completo</option>
            </select>
            {botao()}
           
        </Form>
    }
}