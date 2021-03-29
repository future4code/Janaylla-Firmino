import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Header from '../components/header'
import Foter from '../components/footer'
import { baseLink, autorizacao } from '../components/axios'
import DeleteXImg from '../img/baseline_delete_forever_black_24dp.png'
import DeleteImg from '../img/baseline_delete_black_24dp.png'
import FecharImg from '../img/baseline_disabled_by_default_black_24dp.png'
import { FormDiv, MensagemErro, MensagemSucesso, Todo, ButtonDiv } from '../components/stylesComuns'
import IconePlay from '../img/round_play_circle_black_24dp.png'
const Conteudo = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    position: relative;
    flex-wrap: wrap;

    >div{
        max-height: calc(100vh - 165px);
        overflow-y: auto ;
        display: flex;
        justify-content: flex-start;
        text-align: center;
        flex-direction: column;
        
        *{
            margin: 4px;
        }
    }
    audio{
        width: 400px;
        background-color: black;
        padding: 5px 5px;
        height: 60px;
        border-radius: 35px;
    }
`
const Form = styled.div`
    width: 400px;
    align-self: center;
`
const IconDelete = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${DeleteImg});
    background-size: 100%;
    cursor: pointer;
    :hover{
        background-image: url(${DeleteXImg});
    }
`
const IconFechar = styled.label`
position: absolute;
top: 0;
right: 0;
 background-color: white;
    background-image: url(${FecharImg});
    background-size: 100%;
    width: 30px;
    height: 30px;
    padding: 0px!important; 
    cursor: pointer;
    align-self: flex-end;
    :hover{
        background-color: red;
    }
    *{
        margin: 0px !important;
    }

`
const LabelButton = styled.label`
     display: flex;
     height: auto;
     input{
        display: none;
     }
label{
     padding: 10px 20px;
     border-radius: 25px;
     width: auto;
     font-weight: 800;
     cursor: pointer;
         color: white !important;
         background-color: black;
         border: white 2px solid;
     :hover{
         color: red !important;
         background-color: black;
         border: red 2px solid;
     }
    }
`
const MusicasUl = styled.ul`
        width: 400px;
    li{
    list-style: none;
        cursor: pointer;

    }
    label{
      
    :hover{
            background-color: #ff000020;
        }
    }
    input{
        display: none;
    }
    
   input:checked ~ #background{
        background-color: #ff000080;
        display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    }
    #background{
        width: 100%;
        display: flex;
        padding: 0px; 
        align-items: center;
        justify-content: space-between;
        font-size: 25px;
        flex-direction: row;
        text-align: start;
        cursor: pointer;
        flex-wrap: nowrap;
        :hover{
            background-color: #ff000020;
        }
        label{
            flex-grow:  1;
        }
    }
    a{
        text-decoration: none;
        color: black;
        margin: 0;
        padding: 0;
    }
`
const PlaylistsUl = styled.ul`
    align-self: center;
    width:400px;
    margin-bottom: 50px;
    li{  
        list-style: none;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 25px;
    }
    label{
        padding: 0px; 
        cursor: pointer;
        
    }
    #addMusica{
        display: none;
    }
    input{
        display: none;
    }
   input:checked ~ #background{
        background-color: #ff000080;
        display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    }
    #background{
        width: 100%;
        display: flex;
        padding: 0px; 
        align-items: center;
        justify-content: space-between;
        font-size: 25px;
        flex-direction: row;
        text-align: start;
        h4{
            font-size: 12px;
            margin: 0;
            text-align: start;
        }
        h6{
            font-size: 10px;
            margin: 0;
            text-align: start;
        }
        :hover{
            background-color: #ff000020;
        }
        label{
            flex-grow:  1;
        }
    }
`
const IconPlay = styled.div`
background-image: url(${IconePlay});
width: 40px;
height: 40px;
background-size: 100%;
background-color: red;
border-radius: 50%;
`
const IconPlaySpoty = styled(IconPlay)`
background-color: green;
`


export default class VerPlaylist extends React.Component {
    state = {
        playlists: [],
        playlist: {},
        tracks: [],
        renderizou: false,
        addMusica: false,
        inputNome: "",
        inputCantor: "",
        inputLink: "",
        inputLinkPlay: "",
        mensagem: {
            texto: "",
            mostrar: true,
            sucesso: true
        }
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
            // console.log(err.response.data);
        })
    }
    onClickDelete = (id) => {
        axios.delete(baseLink + `/${id}`, autorizacao).then(res => {
            this.rederizarLista();
        }).catch(err => {
            // console.log(err);
        })
    }
    mostrarPlaylist = (playlist) => {
        axios.get(`${baseLink}/${playlist.id}/tracks`, autorizacao).then(res => {
            // console.log("RES", res.data.result.tracks);
            this.setState({
                renderizou: true,
                tracks: [...res.data.result.tracks]
            })
            // console.log("Coonteudo", this.state.traks)
        }).catch(err => {
            // console.log(err.response);
        })
    }
    trocaPlaylist = (playlist) => {
        let play = { ...this.state.playlist };
        play.id = playlist.id;
        play.name = playlist.name;
        this.setState({ playlist: { ...play } });
        this.mostrarPlaylist(playlist);
        // console.log("playlist clicada", playlist)
    }
    onChangeAddMusica = () => {
        this.setState({
            addMusica: !this.state.addMusica
        })
    }
    onChangeInputNome = (e) => {
        this.setState({ inputNome: e.target.value })
    }
    onChangeInputCantor = (e) => {
        this.setState({ inputCantor: e.target.value })
    }
    onChangeInputLink = (e) => {
        this.setState({ inputLink: e.target.value })
        // console.log("link", this.state.inputLink)
    }
    onChangeInputLinkPlay = (e) => {
        this.setState({ inputLinkPlay: e.target.value })
        // console.log("link", this.state.inputLinkPlay)
    }
    onClickEnviar = () => {
        const bory = {
            name: this.state.inputNome,
            artist: this.state.inputCantor,
            url: this.state.inputLink
        }
        axios.post(`${baseLink}/${this.state.playlist.id}/tracks`, bory, autorizacao).then(res => {
            this.mostrarPlaylist(this.state.playlist)
            this.mensagem("Musica Adicionada", true, true);
            this.setState({ addMusica: false,
                inputCantor: "",
                inputLink: "",
                inputNome: ""
            })
        }).catch(err => {
            // console.log(err.response);
            this.mensagem("Algo deu errado", false, true)
        })
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

    render() {
        const formAdd = <FormDiv>
            <IconFechar  onClick={this.onChangeAddMusica} />
            <ButtonDiv onClick={() => this.props.mudarPagina("PesquisaSpotify")}>Pesquisar no Spotyfy</ButtonDiv>
            <label>Nome</label>
            <input value={this.state.inputNome} onChange={this.onChangeInputNome} />
            <label>Cantor/Banda</label>
            <input value={this.state.inputCantor} onChange={this.onChangeInputCantor} />
            <label>Link da música</label>
            <input value={this.state.inputLink} onChange={this.onChangeInputLink} />
            <button onClick={this.onClickEnviar}>Enviar</button>
            {this.state.mensagem.texto && (this.state.mensagem.sucesso ? <MensagemSucesso>
                {this.state.mensagem.texto}
            </MensagemSucesso> : <MensagemErro> {this.state.mensagem.texto}</MensagemErro>)}

        </FormDiv>
        const verPlaylists = this.state.playlists.map(item => {
            return (<li key={item.id}>
                <input type="radio" name="playlists" id={item.id} onChange={() => this.trocaPlaylist(item)} />
                <div id="background">
                <label for={item.id}>{item.name}   </label>
                <IconDelete onClick={() => this.onClickDelete(item.id)}></IconDelete>
                </div>
           
            </li>)
        })
        const verMusicas = this.state.tracks.map(item => {
            if(item.url.substring(0, 31) === "https://open.spotify.com/track/"){
                return (<li key={item.id}>
                    <a target="_blank" href={item.url}  >
                    
                    <label for={item.id} id="background">
                        <div>
                    <h4>{item.name}</h4>
                    <h6>{item.artist}</h6>
                  
                    </div>  
                     <IconPlaySpoty/>
                </label>
             
               </a>
                    </li>)
            }
            return (<li key={item.id}>
            <input type="radio" name="musicas" id={item.id} onChange={this.onChangeInputLinkPlay} value={item.url}/>
            <label for={item.id} id="background">
                <div>
            <h4>{item.name}</h4>
            <h6>{item.artist}</h6>
            
            </div>
            
            <IconPlay/>
        </label>
       
            </li>)
        })
        return (<Todo>
            <Header mudarPagina={this.props.mudarPagina}/>
            <Conteudo>
                <div>
                    <h2>Playlists</h2>
                    {this.state.inputLinkPlay && <audio src={this.state.inputLinkPlay} controls></audio>}
                    <PlaylistsUl>
                        {verPlaylists}
                    </PlaylistsUl>
                     
                </div>
                {this.state.renderizou && <div>
                    {this.state.addMusica ?
                     <Form>{formAdd}</Form> : <LabelButton>
                     <label  onClick={this.onChangeAddMusica} >Adicione musicas a sua playlists</label>
                 </LabelButton>}
                    {this.state.renderizou && <MusicasUl>{verMusicas}</MusicasUl>}
                </div>}
                  
            </Conteudo> 
            <Foter></Foter>
        </Todo>)
    }
}