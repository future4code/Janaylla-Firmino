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
const FormAdd = styled.div`
`
const UlPlatList = styled.ul`
    li{
        display: flex;

    }
`
export default class Detalhe extends React.Component{
    state = {
        playlist: this.props.playlist,
        tracks: [],
        renderizou: false,
        mostrar: true,
        inputNome: "",
        inputCantor: "",
        inputLink: ""
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
    onChangeAdd = () => {
        this.setState({
            mostrar: !this.state.mostrar
        })
    }
    onChangeInputNome = (e) => {
        this.setState({inputNome: e.target.value})
    }
    onChangeInputCantor = (e) => {
        this.setState({inputCantor: e.target.value})
    }
    onChangeInputLink = (e) => {
        this.setState({inputLink: e.target.value})
    }
    onClickEnviar = () => {
        const bory = {
            name: this.state.inputNome,
            artist: this.state.inputCantor, 
            url: this.state.inputLink
        }
        axios.post(`${baseLink}/${this.state.playlist.id}/tracks`, bory, autorizacao).then(res => {
           alert("Deu certo");
        }).catch(err => {
            console.log(err.response);
            this.props.mudarPagina("ViewPlaylists");
        })
    }
    render(){
        const viewPlaylist = this.state.tracks.map((item) => {
            console.log("o que tem no", item)
            return (<li>
                <p>{item.name}</p>
                <p>{item.artist}</p>
                <p><audio src={item.url} controls>
                </audio></p>
            </li>)
        })
        const formAdd = <FormAdd>
            <label>Nome</label>
            <input value={this.state.inputNome} onChange={this.onChangeInputNome}/>
            <label>Cantor/Banda</label>
            <input value={this.state.inputCantor} onChange={this.onChangeInputCantor}/>
            <label>Link da música</label>
            <input value={this.state.inputLink} onChange={this.onChangeInputLink}/>
            <button onClick={this.onClickEnviar}>Enviar</button>
        </FormAdd>

        return (<Todo>
            <Header mudarPaginaTxt="Voltar para a Home" mudarPagina={this.props.mudarPagina} pagina="ViewPlaylists"/>
                <Conteudo>
                   <div>
                   <div>
                    <p>{this.state.playlist.name}<input type="checkbox" onChange={this.onChangeAdd}>
                        </input></p>  
                        {!this.state.mostrar && formAdd}
                    <UlPlatList>
                      
                        {viewPlaylist}
                    </UlPlatList>
                </div>

                   </div>
                </Conteudo>
            <Foter></Foter>
        </Todo>)
    }
}