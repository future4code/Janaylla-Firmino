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
        motivo:"",
        cursoComplentar: ""
    }
    
    onChangeMotivo = (event) => {
        console.log(event)
        this.setState({
            motivo: event.target.value
        })
    }  
    onChangeCursoComplentar = (event) => {
        this.setState({
            cursoComplentar: event.target.value
        })
    }
    render() {
     return <Form key="form">
         <h1>Etapa 2 - informações gerais de ensino</h1>
            <label>Por que você não terminou um curso de graduação? </label>
            <InputResposta type="text" value={this.state.motivo} onChange={this.onChangeMotivo}></InputResposta>
            
            <label>Você fez algum curso complementar?</label>
            <select value={this.state.cursoComplentar} onChange={this.onChangeCursoComplentar}>
                <option>Não fiz curso complementar</option>
                <option>Curso técnico</option>
                <option>Cursos de inglês</option>
                <option>Curso técnico e de inglês</option>
            </select>
            
            <button onClick={this.props.etapa3}>Próxima Etapa</button>
        </Form>
    }
}