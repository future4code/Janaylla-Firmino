import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Header from '../components/header'
import Foter from '../components/footer'
import {baseLink, autorizacao, autorizacaoSpotify} from '../components/axios'
import {FormDiv, MensagemErro, MensagemSucesso, Todo, ButtonDiv} from '../components/stylesComuns'
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
const PesquisaInput = styled.input`
width: 400px;
`
const SelectInput = styled.select`
padding: 5px 10px;
text-align: center;
margin: auto;
width: 400px;
border-radius: 20px;
option{
    border-radius: 20px !important;
}
`
const MusicasUl = styled.ul`
width: 400px;   
height: calc(100vh - 310px);
overflow-y: auto;
    li{
        width: 100%;
    list-style: none;
      cursor: pointer;
      
      display: flex;
    justify-content: space-between;
    align-items: center;
    :hover{
            background-color: #ff000060;
        }
        >div{
            display: flex;
   flex-direction: column;
    align-items: flex-start;
        }
        h4{
            font-size: 15px;
            margin: 0;
            text-align: start;
        }
        h6{
            font-size: 10px;
            margin: 0;
            text-align: start;
        }
    }
    input{
        display: none;
    }
    input:checked ~ label{
        background-color: #ff000080;
    }
`
const FormDivEscolherLink = styled.div`
    width: 400px;
    
    div{
        width: auto;
    }
    input{
        width: 100%;
    }
` 
export default class PesquisaSpotify extends React.Component{
    state = {
        tracks: [],
        renderizou: false,
        mostrar: true,
        inputPesquisa: "",
        inputLink: "",
        musicas: [],
        playlists: [],
        musicaEscolhida: ["", "", ""],//name, artita, url
        idPlaylist: ""
    }

    onChangeInputPesquisa = (e) => {
        this.setState({inputPesquisa: e.target.value})
        this.rederizarListaPesquisa(e.target.value);
    }
    onChangeInputLink = (e) => {
        this.setState({inputLink: e.target.value})
    }
    onChangeSelectPlaylist = (e) => {
        this.setState({idPlaylist: e.target.value})
    }
    musicaEscolhida = (nome, artista, link) => {
        let artistas = artista[0].name;
       
        if(this.state.idPlaylist){
      
        for(let n=1; n<artista.length;n++){
            artistas = artistas + artista[n].name + " - ";
        }     
        const musicaEscolhida = [nome, artistas, link]
        this.setState({musicaEscolhida: musicaEscolhida})
    }
    else{
        this.setState({musicaEscolhida: ["", "", ""]})
    }
    }
    rederizarListaPesquisa = (pesquisa) => {
        axios.get(`https://api.spotify.com/v1/search?q=${pesquisa}&type=track%2Cartist&market=BR&limit=30&offset=0`, autorizacaoSpotify).then(res => {

            this.setState({ tracks: res.data.tracks.items})
            
        }).catch(err => {
            console.log(err.response.data);
            this.setState({tracks:[]})
        })
    }
    componentDidMount(){
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
    onClickEnviar = (musicaUrl) => {
      
        let bory = {
            name: this.state.musicaEscolhida[0],
            artist: this.state.musicaEscolhida[1], 
            url: this.state.musicaEscolhida[2]
        }
          if(musicaUrl){
            bory.url = musicaUrl
          }
        axios.post(`${baseLink}/${this.state.idPlaylist}/tracks`, bory, autorizacao).then(res => {
            this.setState({
                musicaEscolhida: ["", "", ""],
                inputPesquisa: "",
                inputLink: ""
            })

        }).catch(err => {
            // console.log(err.response);
            this.props.mudarPagina("ViewPlaylists");
        })
    }
    onClickEnviarComLink = () => {
        let musicas = [... this.state.musicaEscolhida];
        musicas[2] = this.state.inputLink;
        this.setState({
           musicaEscolhida: musicas
        })
        this.onClickEnviar(musicas[2])
    }
    render(){
        const playlist = this.state.tracks.map((item) => {
            return <li onClick={() => this.musicaEscolhida(item.name, item.artists, item.external_urls.spotify)}>
                <div>
                <h4>{item.name}</h4>
                <h6>
                {item.artists.map((item) => {
                    return item.name + " - "
                })
                }
                </h6>
                </div>
            </li>
        })
        const playlists = this.state.playlists.map((item) => {
            return <option value={item.id}>
                    {item.name}
            </option>
        })
        return (<Todo>
                    <Header mudarPagina={this.props.mudarPagina}/>
                <Conteudo>
                    <div>
                        <h1>
                        Pesquise suas musicas
                        </h1>
                        <CirculosImgs>
                        <CirculosImg src={Pessoa1}/>
                        <CirculosImg src={Pessoa2}/>
                        
                        <CirculosImg src={Pessoa3}/>
                        
                        <CirculosImg src={Pessoa4}/>
                        </CirculosImgs>
                    </div>
                    <div>
                    {!this.state.musicaEscolhida[0] || !this.state.idPlaylist ?
                        <FormDiv>
                       <PesquisaInput onChange={this.onChangeInputPesquisa}/>
                       <SelectInput  onChange={this.onChangeSelectPlaylist}>
                           <option value="">-Selecione playlist-</option>
                           {playlists}
                       </SelectInput>
                        <MusicasUl>
                        {playlist}
                       </MusicasUl>    
                       </FormDiv>
                       :<FormDiv>
                           <FormDivEscolherLink>
                           <h4>Adicionar link da sua música(recomendado)</h4>
                           <input value={this.state.inputLink} onChange={this.onChangeInputLink}/> 
                           <ButtonDiv onClick={this.onClickEnviarComLink}>Adicionar música</ButtonDiv>
                           <h4>ou continuar e ser redirecionado quando for escultar a música</h4>
                           <ButtonDiv onClick={this.onClickEnviar}>Continuar sem link</ButtonDiv>
                           </FormDivEscolherLink>
                           </FormDiv>}
                
                    </div>
                </Conteudo>
            <Foter></Foter>
        </Todo>)
    }
}