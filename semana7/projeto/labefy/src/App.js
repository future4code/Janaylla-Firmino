import './App.css';
import React from 'react';
import Home from './pages/home'
import VerPlaylist from './pages/verPlaylists '
import TodasMusicas from './pages/todasMusicas'
import PesquisaSpotify from './pages/pesquisaSpotify'
import NovaPlaylist from './pages/novaPlaylist'
import NovaMusica from './pages/novaMusica'

class App extends React.Component {
  state = {
    pagina: "Home",
    id: undefined,
    playlist: undefined
  }
  mudarPagina = (pagina, playlist) =>{
  console.log("playlist obj", playlist)
    this.setState({
      pagina: pagina,
      playlist: playlist
    })
    
  }
  pagina = () =>{
    console.log(this.state.pagina)
    switch(this.state.pagina){
      case "NovaPlaylist":
        return(<NovaPlaylist mudarPagina={this.mudarPagina}></NovaPlaylist>)
      case "Home":
        return(<Home mudarPagina={this.mudarPagina}></Home>)
      case "PesquisaSpotify":
        return (<PesquisaSpotify  mudarPagina={this.mudarPagina}></PesquisaSpotify>)
      case "VerPlaylist":
        return(<VerPlaylist mudarPagina={this.mudarPagina}></VerPlaylist>)
      case "TodasMusicas":
        return(<TodasMusicas mudarPagina={this.mudarPagina} playlist={this.state.playlist}></TodasMusicas>)
        case "NovaMusica":
          return(<NovaMusica mudarPagina={this.mudarPagina} playlist={this.state.playlist}></NovaMusica>)
    }
  }
  render(){
  return (
    <div>
      {this.pagina()}
    </div>
  )
  }
}

export default App;
