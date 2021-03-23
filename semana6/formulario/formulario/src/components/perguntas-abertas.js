import React from "react";
import styled from 'styled-components';

const Pergunta = styled.div`
display: flex;
flex-direction: column;
`;
export default class PerguntasAbertas extends React.Component {
    render() {
     return <Pergunta>
            <label>{this.props.pergunta}</label>
            <input type="text" value={this.props.value} onChange={this.props.funcao}></input>           
        </Pergunta>
    }
}