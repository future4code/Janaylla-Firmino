import './App.css';
import React from 'react';
import Home from './pages/home'
import ViewPlaylist from './pages/viewPlaylists '

class App extends React.Component {
  state = {
    pagina: "viewPlaylists"
  }
  mudarPagina = (pagina) =>{
    console.log(this.state.pagina)
    this.setState({
      pagina: pagina
    })
  }
  render(){
  return (
    <div>
      {this.state.pagina === "Home"? <Home mudarPagina={this.mudarPagina}></Home>
    : <ViewPlaylist mudarPagina={this.mudarPagina}></ViewPlaylist>  
    }
    </div>
  )
  }
}

export default App;
