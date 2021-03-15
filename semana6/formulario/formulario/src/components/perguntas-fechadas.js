import React from "react";
import styled from 'styled-components';

const Pergunta = styled.div`
display: flex;
flex-direction: column;
`;
export default class PerguntasFechadas extends React.Component {
    render() {
      const opcoes = this.props.opcoes.map((opcao) => {
                return <option value={opcao}>{opcao}</option>
            })
     return <Pergunta>
            <label>{this.props.pergunta}</label>
            <select value={this.props.value} onChange={this.props.funcao}>
            {opcoes}
                </select>       
        </Pergunta>
    }
}