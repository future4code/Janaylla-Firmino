import React from 'react'
import styled from 'styled-components'
import iconeExcluir from './img/delete_remove_bin_icon-icons.com_72400.ico'
import iconeEditar from './img/pencil_icon-icons.com_72386.ico'
import iconeSalvarEdicao from './img/save-disk_icon-icons.com_71576.ico'

import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
  display: flex;
  justify-content: space-around;
  div{
    flex-grow: 1fr;
    width: 100%;
  }

`

const Tarefa = styled.div`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  display: flex;
  align-items: center;
  justify-content:space-between;
 
`
const TarefaTexto = styled.li`
  text-align: left;
  list-style: none;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  flex-grow: 1fr;
`

const TarefaIcones = styled.div`
  img{
    width:15px;
    cursor: pointer;
    border-radius: 50%;
  }
  img:hover{
    background-color: red;

  }
`
const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: '',
      inputEditarValue: ''
    }

  componentDidUpdate() {
    localStorage.setItem("tarefas",JSON.stringify(this.state.tarefas));
  };

  componentDidMount() {
    if(localStorage.getItem("tarefas"))
    this.setState({
    tarefas: JSON.parse(localStorage.getItem("tarefas"))
    });
  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  criaTarefa = () => {
    if(this.state.inputValue){
      const tarefa = {
        id: Date.now(),
        texto: this.state.inputValue,
        completa: false
      }
      const novasTarefas = [...this.state.tarefas, tarefa];
      this.setState({tarefas: novasTarefas});
    }
  }

  selectTarefa = (id) => {
    this.state.tarefas.map((item, index) => {
      if(item.id === id)
      {
        const novasTarefas = [...this.state.tarefas];
        novasTarefas[index].completa = !novasTarefas[index].completa;
        this.setState({tarefas: novasTarefas});
      } 
    })

  }

  onChangeFilter = (event) => {
    this.setState({
      filtro: event.target.value
    });

  }

  apagarTarefa = (id) => {
    this.state.tarefas.map((item, index) => {
      if(item.id === id)
      {
        const novasTarefas = [...this.state.tarefas];
        novasTarefas.splice(index, 1);
        this.setState({tarefas: novasTarefas});
      } 
    })
  }
  editarTarefa = (id) => {
    this.state.tarefas.map((item, index) => {
      if(item.id === id)
      {
        const novasTarefas = [...this.state.tarefas];
        novasTarefas[index].editar = true;
        this.setState({tarefas: novasTarefas, inputEditarValue: item.texto});
      }
      else{
        const novasTarefas = [...this.state.tarefas];
        delete novasTarefas[index].editar;
        this.setState({tarefas: novasTarefas, inputEditarValue: item.texto});
      }
    })
  }

  onChangeEditarValue = (event) => {
    this.setState({
      inputEditarValue: event.target.value
    });
  }
  filtraLista = (filtro) => {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })
    return listaFiltrada;
  }

  tarefa = (tarefa) =>{
    
    if(tarefa.editar){

      return <Tarefa
      completa={tarefa.completa}
    >
      
      <input onChange={this.onChangeEditarValue} type="text" value={this.state.inputEditarValue}/>

      <TarefaIcones>
        <img src={iconeSalvarEdicao} onClick={() => this.SalvarEdicaoTarefa(tarefa.id)}></img>
      <img src={iconeExcluir} onClick={() => this.apagarTarefa(tarefa.id)}/>
      </TarefaIcones>
    </Tarefa> 
  }
  else{
    return <Tarefa
    completa={tarefa.completa}
  >
    <TarefaTexto onClick={() => this.selectTarefa(tarefa.id)}>
    
    {tarefa.texto}</TarefaTexto>
    <TarefaIcones>
      <img src={iconeEditar} onClick={() => this.editarTarefa(tarefa.id)}></img>
    <img src={iconeExcluir} onClick={() => this.apagarTarefa(tarefa.id)}/>
    </TarefaIcones>
  </Tarefa>
  }
  }
  
  render() {
    const listaTarefas = <TarefaList>
      <div>
    {this.filtraLista(this.state.filtro).map(tarefa => {
      return (
        this.tarefa(tarefa)
      )
    })}
    </div>
  </TarefaList>

    const listaTarefasSeparadas =  <TarefaList>
<div>
        <h3>Pendentes</h3>
        {this.filtraLista("pendentes").map(tarefa => {
      return (
        this.tarefa(tarefa)
      )
      })
}
</div>
      <div>
<h3>Completas</h3>
    {this.filtraLista("completas").map(tarefa => {
      return (
        this.tarefa(tarefa)
      )
      })
}</div>

  </TarefaList>
        return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        {this.state.filtro ? listaTarefas : listaTarefasSeparadas}
      </div>
    )
  }
}

export default App
