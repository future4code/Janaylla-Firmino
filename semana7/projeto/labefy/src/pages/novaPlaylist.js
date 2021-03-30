import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Header from '../components/header'
import Foter from '../components/footer'
import {baseLink, autorizacao} from '../components/axios'
import {FormDiv, MensagemErro, MensagemSucesso, Todo} from '../components/stylesComuns'
import Pessoa1 from '../img/pessoa1.jpg'
import Pessoa2 from '../img/pessoa2.jpg'
import Pessoa3 from '../img/pessoa3.jpg'
import Pessoa4 from '../img/pessoa4.jpg'

const Conteudo = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    > div{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        flex-grow: 1;
    }
`

const CirculosImgs = styled.div`
display: flex;
width: 600px;
height: 300px;
position: relative;
max-width: 90vw;
max-height: 45vw;
`
const CirculosImg = styled.img`
border-radius: 50%;
width: 35%;
height: 70%;
border: black solid 2px;
:nth-of-type(2){
    position: absolute;
    right: 50%;
    bottom: 0;
}
:nth-of-type(3){
    position: absolute;
    left: 35%;
}
:nth-of-type(4){
    position: absolute;
    right: 10%;
    bottom: 0;
}
`


export default class NovaPlaylist extends React.Component{
    state = {
        inputNomePlaylist: "",
        mensagem: {
            texto: "",
            mostrar: true,
            sucesso: true
        }
    }
    
    mensagem(texto, sucesso, mostra){
        const mensagemAtualizar = {...this.state.mensagem}
        const mensagemRetornar =  {...this.state.mensagem}

        mensagemAtualizar.texto = texto;
        mensagemAtualizar.sucesso = sucesso;
        mensagemAtualizar.mostrar = mostra;

        setTimeout(() => this.setState({
            mensagem: mensagemRetornar
        }),2000);
        this.setState({
            mensagem: mensagemAtualizar
        })
    }

    inputNomePlaylist = (e) =>{
        if(e.code == "Enter"){
            this.onClickEnviar();
        }
        else{
        this.setState({
            inputNomePlaylist: e.target.value
        })
    }
    }
    onClickEnviar = () => {
        const bory = {
            name: this.state.inputNomePlaylist
        }
        axios.post(baseLink, bory, autorizacao).then(res => {
            this.mensagem("Playlist criada", true, true)
            this.setState({inputNomePlaylist: ""})
        }).catch(err => {
            console.log(err.response.data);
            this.mensagem("Algo deu errado", false, true)
         
        })
    }
    render(){
        return (<Todo>
            <Header   mudarPagina={this.props.mudarPagina}/>
                <Conteudo>
                    <div>
                        <h1>
                            Adicione uma nova playlist
                        </h1>
                        <CirculosImgs>
                        <CirculosImg src={Pessoa1}/>
                        <CirculosImg src={Pessoa2}/>
                        
                        <CirculosImg src={Pessoa3}/>
                        
                        <CirculosImg src={Pessoa4}/>
                        </CirculosImgs>
                    </div>
                    <div>
                        <FormDiv>
                        <label>Nome playlists </label>
                        <input type="text" onKeyPress={this.inputNomePlaylist} onChange={this.inputNomePlaylist} value={this.state.inputNomePlaylist}/>
                        <button onClick={this.onClickEnviar}>Criar</button>
                     {this.state.mensagem.texto && (this.state.mensagem.sucesso ? <MensagemSucesso>
                         {this.state.mensagem.texto }
                     </MensagemSucesso> : <MensagemErro> {this.state.mensagem.texto }</MensagemErro>) }
                        </FormDiv>
                    </div>
                </Conteudo>
            <Foter></Foter>
        </Todo>)
    }
}