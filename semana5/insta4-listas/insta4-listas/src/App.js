
import './App.css';
import React from 'react';
import Post from './components/Post/Post';
import { IconeSemContador } from './components/IconeSemContador/IconeSemContador'
import iconePlus from './img/Plus_icon-icons.com_71848.svg'
import styled from 'styled-components'

class App extends React.Component {
  
  state = {
    posts: [
      {
        nomeUsuario: 'Paula1990',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Bernardo.Lopes',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nomeUsuario: 'AméliaSantos43',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152'
      }
    ], 
    nomeUsuarioAdd: '',
    fotoUsuarioAdd: '',
    fotoPostAdd: ''
  };
  clickNomeUsuario = (event) => {
    this.setState({
      nomeUsuarioAdd: event.target.value
    });
  }
  clickFotoUsuario = (event) => {
    this.setState({
      fotoUsuarioAdd: event.target.value
    });
  }
  clickFotoPost = (event) =>{
   this.setState({
     fotoPostAdd: event.target.value
   });
  }

  addPost = () =>{
    const listaPosts = this.state.posts;
    const listaNovaPosts = [...listaPosts];
    listaNovaPosts.push({
      nomeUsuario: this.state.nomeUsuarioAdd,
        fotoUsuario: this.state.fotoUsuarioAdd,
        fotoPost:this.state.fotoPostAdd
    });
    this.setState({
      posts:listaNovaPosts,
      nomeUsuarioAdd: '',
      fotoUsuarioAdd: '',
      fotoPostAdd: ''
    });

  
  }
  
 
 
  render() {
   
 const AdicionarPost = styled.div`
     display:flex;
     padding:10px;
    align-items: center;
    cursor: pointer;
    img{
      width:40px
    }`
     const posts = this.state.posts;
    const divPosts = posts.map((item) => {
      return <Post key={item.nomeUsuario}
        nomeUsuario={item.nomeUsuario}
        fotoUsuario={item.fotoUsuario}
        fotoPost={item.fotoPost}
      />;
     });
    
    return (
      <div className={"app-container"}>
               <label>Nome de usuario</label>
               <input type={'text'} onChange={this.clickNomeUsuario} value={this.state.nomeUsuarioAdd} />
              
               <label>Foto(url) de usuario</label>
               <input type={'text'} onChange={this.clickFotoUsuario} value={this.state.fotoUsuarioAdd} />
              
               <label>Foto(url) do post </label>
               <input type={'text'} onChange={this.clickFotoPost} value={this.state.fotoPostAdd}/>
             
               <AdicionarPost onClick={this.addPost}>
                 <img src={iconePlus}/> Adicionar Novo Post
               </AdicionarPost>
               {divPosts}
        </div>
    );
  }
}
export default App;
