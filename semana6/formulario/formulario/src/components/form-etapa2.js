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
        curso:"",
        ensino: ""
    }
    
    onChangeCurso = (event) => {
        console.log(event)
        this.setState({
            nome: event.target.value
        })
    }  
    onChangeUnidade = (event) => {
        this.setState({
            idade: event.target.value
        })
    }
    render() {
     return <Form key="form">
         <h1>Etapa 2 - informações do ensino superior</h1>
            <label>5. Qual o curso?</label>
            <InputResposta type="text" value={this.state.curso} onChange={this.onChangeCurso}></InputResposta>
            
            <label>6 .Qual a unidade de ensino?</label>
            <InputResposta type="text" value={this.state.ensino} onChange={this.onChangeUnidade}></InputResposta>
            
            <button onClick={this.props.etapa2}>Próxima Etapa</button>
        </Form>
    }
}