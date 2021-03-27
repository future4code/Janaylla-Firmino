import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Header from '../components/header'
import Foter from '../components/footer'
import {baseLink, autorizacao} from '../components/axios'

const Todo = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-direction: column;
    min-height: 100vh;
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
const Conteudo = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    div{
        display: flex;
        justify-content: center;
        align-items: stretch;
        text-align: center;
        flex-direction: column;
        *{
            margin: 4px;
        }
    }
`
const Mensagem = styled.div`
`

export default class Home extends React.Component{
    state = {
        inputNomePlaylist: "",
        mensagem: {
            texto: "",
            mostrar: true,
            color: ""
        }
    }
    
    mensagem(texto, color, mostra){
        const mensagemAtualizar = {...this.state.mensagem}
        const mensagemRetornar =  {...this.state.mensagem}

        mensagemAtualizar.texto = texto;
        mensagemAtualizar.color = color;
        mensagemAtualizar.mostrar = mostra;

        setTimeout(() => this.setState({
            mensagem: mensagemRetornar
        }),2000);
        this.setState({
            mensagem: mensagemAtualizar
        })
    }

    inputNomePlaylist = (e) =>{
        this.setState({
            inputNomePlaylist: e.target.value
        })
    }
    onClickEnviar = () => {
        const bory = {
            name: this.state.inputNomePlaylist
        }
        axios.post(baseLink, bory, autorizacao).then(res => {
            this.mensagem("Deu tudo certo", "green", true)
        }).catch(err => {
            console.log(err.response.data);
            this.mensagem("Algo deu errado", "red", true)
         
        })
    }
    render(){
        return (<Todo>
            <Header mudarPaginaTxt="Ver para a Playlists" mudarPagina={this.props.mudarPagina} pagina="ViewPlaylists"/>
                <Conteudo>
                    <div>
                        <p>Criar playlists</p>
                        <label>Nome playlists </label>
                        <input type="text" onChange={this.inputNomePlaylist} value={this.state.inputNomePlaylist}/>
                        <button onClick={this.onClickEnviar}>Enviar</button>
                        <Mensagem>{this.state.mensagem.texto}</Mensagem>
                    </div>
                </Conteudo>
            <Foter></Foter>
        </Todo>)
    }
}