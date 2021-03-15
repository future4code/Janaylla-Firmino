import React from "react";
import styled from 'styled-components';
import PerguntasAbertas from './perguntas-abertas.js'
import PerguntasFechadas from './perguntas-fechadas.js'


const Form = styled.div`
display: flex;
flex-direction: column;
`;
export default class App extends React.Component {
    state = {
        nome:"",
        idade: "",
        email: "",
        escolaridade: "Ensino médio incompleto"
    }
    
    onChangeNome = (event) => {
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
        console.log(this.state.escolaridade);
         this.setState({
            escolaridade: event.target.value
         })
     }
     
    render() {
        // const botao = () => {
        //     if(this.state.escolaridade === "Ensino Superior Completo"){
        //         return  <button onClick={this.props.etapa12}>Próxima Etapa</button>
        //     }
        //     return  <button onClick={this.props.etapa13}>Próxima Etapa</button>
        // }
     return <Form key="form">
         <PerguntasAbertas pergunta={"1. Qual o seu nome?"} funcao={this.onChangeNome} value={this.state.nome}></PerguntasAbertas>
         <PerguntasAbertas pergunta={"2. Qual sua idade?"} funcao={this.onChangeIdade} value={this.state.idade}></PerguntasAbertas>
         <PerguntasAbertas pergunta={"3. Qual seu email?"} funcao={this.onChangeEmail} value={this.state.email}></PerguntasAbertas>
          <PerguntasFechadas pergunta={"4. Qual a sua escolaridade?"} funcao={this.onChangeEscolaridade} value={this.state.escolaridade}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
          ></PerguntasFechadas>
        <button onClick={this.props.etapa1}>Próxima Etapa</button>
           
        </Form>
    }
}