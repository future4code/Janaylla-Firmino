import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Header from '../components/header'
import Foter from '../components/footer'
import { baseLink, autorizacao, autorizacaoSpotify } from '../components/axios'
import { FormDiv, MensagemErro, MensagemSucesso, Todo, ButtonDiv } from '../components/stylesComuns'
import Pessoa1 from '../img/pessoa1.jpg'
import Pessoa2 from '../img/pessoa2.jpg'
import Pessoa3 from '../img/pessoa3.jpg'
import Pessoa4 from '../img/pessoa4.jpg'

const Conteudo = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    > div{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        flex-grow: 1;
       
    }
    >div:last-of-type{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        align-self: center;
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

const SelectInput = styled.select`
padding: 5px 10px;
text-align: center;
margin: 5px auto;
width:100%;
border-radius: 20px;
option{
    border-radius: 20px !important;
}
`
export default class NovaMusica extends React.Component {
    state = {
        playlists: [],
        idPlaylist: "",
        inputNome: "",
        inputCantor: "",
        inputLink: "",
        mensagem: {
            texto: "",
            sucesso: false,
            mostrar: false
        }
    }
    onChangeInputNome = (e) => {
        this.setState({ inputNome: e.target.value })
    }
    onChangeInputCantor = (e) => {
        this.setState({ inputCantor: e.target.value })
    }
    onChangeInputLink = (e) => {
        this.setState({ inputLink: e.target.value })
        console.log("link", this.state.inputLink)
    }
    componentDidMount() {
        this.rederizarLista();
    }

    rederizarLista = () => {
        axios.get(baseLink, autorizacao).then(res => {
            // console.log(res.data.result.list)
            this.setState({
                playlists: res.data.result.list
            })

        }).catch(err => {
            console.log(err.response.data);
        })
    }
    onChangeSelectPlaylist = (e) => {
        this.setState({ idPlaylist: e.target.value })
    }
    mensagem(texto, sucesso, mostra) {
        const mensagemAtualizar = { ...this.state.mensagem }
        const mensagemRetornar = { ...this.state.mensagem }

        mensagemAtualizar.texto = texto;
        mensagemAtualizar.sucesso = sucesso;
        mensagemAtualizar.mostrar = mostra;

        setTimeout(() => this.setState({
            mensagem: mensagemRetornar
        }), 2000);
        this.setState({
            mensagem: mensagemAtualizar
        })
    }
    onClickEnviar = () => {
        const bory = {
            name: this.state.inputNome,
            artist: this.state.inputCantor,
            url: this.state.inputLink
        }
        console.log(bory, this.state.idPlaylist)
        axios.post(`${baseLink}/${this.state.idPlaylist}/tracks`, bory, autorizacao).then(res => {
           
            this.mensagem("Musica Adicionada", true, true);
        }).catch(err => {
            console.log(err);
            this.mensagem("Algo deu errado", false, true)
        })
    }
    render() {

        const playlists = this.state.playlists.map((item) => {
            return <option value={item.id}>
                {item.name}
            </option>
        })
        return (<Todo>
            <Header mudarPagina={this.props.mudarPagina} />
            <Conteudo>
                <div>
                    <h1>
                        Adicione uma música
                        </h1>
                    <CirculosImgs>
                        <CirculosImg src={Pessoa1} />
                        <CirculosImg src={Pessoa2} />

                        <CirculosImg src={Pessoa3} />

                        <CirculosImg src={Pessoa4} />
                    </CirculosImgs>
                </div>
                <div>

                    <FormDiv>
                        <SelectInput onChange={this.onChangeSelectPlaylist}>
                            <option value="">-Selecione playlist-</option>
                            {playlists}
                        </SelectInput>
                        <label>Nome</label>
                        <input value={this.state.inputNome} onChange={this.onChangeInputNome} />
                        <label>Cantor/Banda</label>
                        <input value={this.state.inputCantor} onChange={this.onChangeInputCantor} />
                        <label>Link da música</label>
                        <input value={this.state.inputLink} onChange={this.onChangeInputLink}/>
                        <button onClick={this.onClickEnviar}>Enviar</button>
                        {this.state.mensagem.texto && (this.state.mensagem.sucesso ? <MensagemSucesso>
                {this.state.mensagem.texto}
                
            </MensagemSucesso> : <MensagemErro> {this.state.mensagem.texto}</MensagemErro>)}
            
                    </FormDiv>
                </div>
            </Conteudo>
            <Foter></Foter>
        </Todo>)
    }
}