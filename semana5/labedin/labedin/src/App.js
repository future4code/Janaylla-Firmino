import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/77745607?s=460&u=40e2aa16322c0b7eec7a970a0850ba2cd94584e9&v=4" 
          nome="Janaylla Firmino" 
          descricao="Oi, eu sou Janaylla estudante da turma Cruz na Labeny, estou aprendendo e me impressionado sobre as funcionalidades do React"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
    <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn.icon-icons.com/icons2/1906/PNG/512/iconfinder-email-4550857_121355.png"
          nome="E-mail"
          descricao="naoteinteressa@gmail.com"
        />
        <CardPequeno
          imagem="https://cdn.icon-icons.com/icons2/1364/PNG/512/mapsmark_89134.png"
          nome="Endereço"
          descricao="Na casa do chapéu"
        />
    </div>
      <div className="page-section-container">
        <h2>Formação</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Labenu (Previsão de formação (07/2021)" 
        />
        
        
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
