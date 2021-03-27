import './App.css';
import React from 'react';
import Home from './pages/home'
import ViewPlaylist from './pages/viewPlaylists '
import Detalhe from './pages/detalhes'

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
      case "Home":
        return(<Home mudarPagina={this.mudarPagina}></Home>)
      case "ViewPlaylists":
        return(<ViewPlaylist mudarPagina={this.mudarPagina}></ViewPlaylist>)
      case "Detalhe":
        return(<Detalhe mudarPagina={this.mudarPagina} playlist={this.state.playlist}></Detalhe>)
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
