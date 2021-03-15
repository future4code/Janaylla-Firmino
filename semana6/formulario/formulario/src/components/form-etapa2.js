import React from "react";
import styled from 'styled-components';
import PerguntasAbertas from './perguntas-abertas.js'
import PerguntasFechadas from './perguntas-fechadas.js'

const Form = styled.div`
display: flex;
flex-direction: column;

`;

export default class FormEtapa2 extends React.Component {
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
            <PerguntasAbertas pergunta ={"1. Qual o curso?"}
         value={this.state.curso} onChange={this.onChangeCurso}></PerguntasAbertas>
            
            <PerguntasAbertas pergunta ={"2. Qual o qual a unidade de ensino?"}
            type="text" value={this.state.ensino} onChange={this.onChangeUnidade}></PerguntasAbertas>
            

            <button onClick={this.props.etapa2}>Próxima Etapa</button>
        </Form>
    }
}