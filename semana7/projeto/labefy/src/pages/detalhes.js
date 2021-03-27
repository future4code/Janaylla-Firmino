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

export default class Detalhe extends React.Component{
    state = {
        playlist: this.props.playlist,
        tracks: [],
        renderizou: false
    }
    rederizarPlaylist = () => {
        console.log("RES", this.state.playlist.id);
        axios.get(`${baseLink}/${this.state.playlist.id}/tracks`, autorizacao).then(res => {
       
            console.log("RES", res.data.result.tracks);
            this.setState({
                renderizou: true,
                tracks: [... res.data.result.tracks]
            })
            console.log("Coonteudo", this.state.traks)
        }).catch(err => {
            console.log(err.response);
            this.props.mudarPagina("ViewPlaylists");
        })
    }
    componentDidMount(){
        console.log("Aqui 2, ", this.state.playlist)
        this.rederizarPlaylist();
    }
    render(){
        const viewPlaylist = this.state.tracks.map((item) => {
            return (<li></li>)
        })
        return (<Todo>
            <Header mudarPaginaTxt="Voltar para a Home" mudarPagina={this.props.mudarPagina} pagina="ViewPlaylists"/>
                <Conteudo>
                   <div>
                   <div>
                    <p>{this.state.playlist.name}</p>
                    <ul>
                        {viewPlaylist}
                    </ul>
                </div>

                   </div>
                </Conteudo>
            <Foter></Foter>
        </Todo>)
    }
}