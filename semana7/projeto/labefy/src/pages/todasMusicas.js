import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Header from '../components/header'
import Foter from '../components/footer'
import { baseLink, autorizacao } from '../components/axios'
import { FormDiv, MensagemErro, MensagemSucesso, Todo, ButtonDiv } from '../components/stylesComuns'

const Conteudo = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    position: relative;
    flex-wrap: wrap;
    
    >div{
       
        display: flex;
        justify-content: flex-start;
        text-align: center;
        flex-direction: column;
        
        *{
            margin: 4px;
        }
    }
    audio{
        align-self: center;
        width: 400px;
        background-color: black;
        padding: 5px 5px;
        height: 60px !important;
        border-radius: 35px;
    }
`
const MusicasUl = styled.ul`
        width: 700px;
        max-width: 90vw;
         max-height: calc(100vh - 250px);
        overflow-y: auto ;
        overflow-x: unset;
    li{
    list-style: none;
  cursor: pointer !important;
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
export default class TodasMusicas extends React.Component {
    state = {
        playlists: [],
        tracks: [],
        inputLinkPlay: ""
    }
    componentDidMount() {
        this.rederizarLista();
    }
    mostrarPlaylist = (playlists) => {
        playlists.forEach((item) => {
             axios.get(`${baseLink}/${item.id}/tracks`, autorizacao).then(res => {
                 console.log("RES", res.data.result.tracks);
                 this.setState({
                     renderizou: true,
                     tracks: [...this.state.tracks, ...res.data.result.tracks]
                 })
                 console.log("Coonteudo", this.state.traks)
             }).catch(err => {
                 console.log(err.response);
             })
         })
        
     }
 
    rederizarLista = () => {
        axios.get(baseLink, autorizacao).then(res => {
            // console.log(res.data.result.list)
            this.setState({
                playlists: res.data.result.list
            })
            this.mostrarPlaylist(res.data.result.list)
        }).catch(err => {
            console.log(err.response.data);
        })
    }

    onChangeInputLinkPlay = (e) => {
        this.setState({ inputLinkPlay: e.target.value })
        console.log("link", this.state.inputLinkPlay)
    }

    render() {
        const musicaOrdem= this.state.tracks.sort((a, b) => {return a.name.localeCompare(b.name)});
        const verMusicas = musicaOrdem.map(item => {
            if(item.url.substring(0, 31) === "https://open.spotify.com/track/"){
                return (<li key={item.id}>
                    <a target="_blank" href={item.url}>
                    
                    <label for={item.id} id="background">
                        <div>
                    <h4>{item.name}</h4>
                    <h6>{item.artist}</h6>
                    </div>
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
        </label>
            </li>)
        })
        return (<Todo>
                    <Header mudarPagina={this.props.mudarPagina}/>
            <Conteudo>
                
                {<div> 
                    
                    {!this.state.inputLinkPlay && <audio src={this.state.inputLinkPlay} controls></audio>}  

                    {<MusicasUl>
                       
                        {verMusicas}</MusicasUl>}
                   
                </div>}
                  
            </Conteudo> 
            <Foter></Foter>
        </Todo>)
    }
}