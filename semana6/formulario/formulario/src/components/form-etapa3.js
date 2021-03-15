import React from "react";
import styled from 'styled-components';
import PerguntasAbertas from './perguntas-abertas.js'
import PerguntasFechadas from './perguntas-fechadas.js'

const Form = styled.div`
display: flex;
flex-direction: column;

`;

export default class FormEtapa3 extends React.Component {
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
            <PerguntasAbertas pergunta={"1. Por que você não terminou um curso de graduação?"}
             type="text" value={this.state.motivo} onChange={this.onChangeMotivo}></PerguntasAbertas>
            
            <PerguntasFechadas pergunta={"2. Você fez algum curso complementar?"}
             value={this.state.cursoComplentar} onChange={this.onChangeCursoComplentar}
                opcoes={["Não fiz curso complementar",
                "Curso técnico",
                "Cursos de inglês",
                "Curso técnico e de inglês"]}>
            </PerguntasFechadas>
            
            <button onClick={this.props.etapa3}>Próxima Etapa</button>
        </Form>
    }
}