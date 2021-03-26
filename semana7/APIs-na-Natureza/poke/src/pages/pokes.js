import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Todo = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const PokesDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  >div{
    border: 1px black solid;
    background-color: #ffffffaa;
    margin: 10px;
    padding: 10px;
    text-align: center;
  }
`

export default class Pokes extends React.Component{
  state = {
      imagensPokes: [],
      name: []
  }
  poke(ids){
    const name = [], imagensPokes = [];
    ids.length > 1 && console.log("Aqui 3")
     ids.forEach((item, index) => {
       axios.get(`https://pokeapi.co/api/v2/pokemon/${item}`)
     .then((resposta) => {
        console.log(resposta.data);
        // name = this.state.name.push( resposta.data.name)
        // imagensPokes = this.state.imagensPokes.push(resposta.data.sprites.front_default);
        this.setState({
          imagensPokes: [...this.state.imagensPokes,  resposta.data.sprites.front_default],
          name:  [...this.state.name,  resposta.data.name],
        })
     })
     .catch((erro) => {
       console.log(erro, item);
       this.poke([Math.floor(Math.random() * 1118) + 1]);
     });
     })
  
  }
  trocarPokes = () => {
    this.setState({
      imagensPokes: [],
      name:  []
    })
    let ids = [Math.floor(Math.random() * 1118) + 1, Math.floor(Math.random() * 1118) + 1, Math.floor(Math.random() * 1118) + 1]
      this.poke(ids);
  }
 componentDidMount(){
  this.trocarPokes();
 }
  render(){
    const poksDiv = this.state.name.map((item, index) => {
        return (<div>
          <p>{item}</p>
          <img src={this.state.imagensPokes[index]}></img>
         
        </div>)
      })
  return (
    <Todo>
        <button onClick={this.trocarPokes}>Escolher outros 3 pokemons aleatorios</button>
        <PokesDiv>
        {poksDiv} 
        </PokesDiv>
    </Todo>
  );
}
}

