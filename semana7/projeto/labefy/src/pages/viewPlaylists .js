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
    ul{
        width: 400px;
    }
    ul > li{
        width: 100%;
        display: flex;
        list-style: none;
        align-items: center;
        justify-content: space-between;
    }
`


export default class ViewPlaylist extends React.Component{
    state = {
        playlists: []
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
    onClickDelete = (id) => [
        axios.get(baseLink+`/${id}`, autorizacao).then(res => {
            this.rederizarLista();
            
        }).catch(err => {
            console.log(err.response.data);
         
        })
    ]
    render(){
        const viewPlaylist = this.state.playlists.map(item => {
                return (<li key={item.id}>
                    <p>{item.name}</p><button onClick={() => this.onClickDelete(item.id)}>Delete</button>
                </li>)
            })
        return (<Todo>
            <Header mudarPaginaTxt="Ver playlists" mudarPagina={this.props.mudarPagina} pagina="Home"/>
            <Conteudo>
                <div>
                    <p>Playlists</p>
                    <ul>
                        {viewPlaylist}
                    </ul>
                </div>
            </Conteudo>
            <Foter></Foter>
        </Todo>)
    }
}