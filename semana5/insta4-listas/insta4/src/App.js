import React from 'react';
import './App.css';
import Post from './components/Post/Post';


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
    ]
  };
  
  render() {

    const posts = this.state.posts;
    const divPosts = posts.map((item) =>{
        return <Post key={item.nomeUsuario}
        nomeUsuario={item.nomeUsuario}
        fotoUsuario={item.fotoUsuario}
        fotoPost={item.fotoPost}
        />;
    })
    
    return (
      <div className={'app-container'}>
        {divPosts}
      </div>
    );
  }
}
export default App;
