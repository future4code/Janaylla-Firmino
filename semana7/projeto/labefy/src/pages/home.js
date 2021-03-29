import React from 'react'
import styled from 'styled-components'
import Foter from '../components/footer'
import {Todo, ButtonDiv} from '../components/stylesComuns'

const Conteudo = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    background-color: black;
    background-size: 300px;

     div{
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        flex-direction: column;
        color: white;
        > div{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
`
export default class Home extends React.Component{
   
    render(){
        return (<Todo>
                <Conteudo>
                    <div>
                        <h3>Adicione uma nova playlist</h3>
                        <ButtonDiv onClick={() => this.props.mudarPagina("NovaPlaylist")} >Nova playlist</ButtonDiv>
                      
                        <h3>Adicione uma novas músicas:</h3>  
                        <div>
                        <ButtonDiv   onClick={() => this.props.mudarPagina("NovaMusica")}>Novas músicas</ButtonDiv>
                        <ButtonDiv onClick={() => this.props.mudarPagina("PesquisaSpotify")}>Pesquisar músicas do spotify</ButtonDiv>
                        </div>
                        <h3>Navegue por suas músicas:</h3>  
                        <div>
                        <ButtonDiv onClick={() => this.props.mudarPagina("VerPlaylist")}>Playlists</ButtonDiv>
                        <ButtonDiv onClick={() => this.props.mudarPagina("TodasMusicas")}>Todas as músicas</ButtonDiv>
                        </div>
                    </div>
                </Conteudo>
            <Foter></Foter>
        </Todo>)
    }
}