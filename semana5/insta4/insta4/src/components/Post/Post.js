import React from 'react'
import './Post.css'

import { IconeComContador } from '../IconeComContador/IconeComContador'
import { IconeSemContador } from '../IconeSemContador/IconeSemContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeCompartilhar from '../../img/share-24px.svg'
import iconeDesmarca from '../../img/bookmark_border-24px.svg'
import iconeMarcado from '../../img/bookmark-24px.svg'

import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilha } from '../SecaoCompartilha/SecaoCompartilha'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhando: false,
    textoCompartilhar: ""

  }
  onClickCurtida = () => {
    console.log('Curtiu!');
    if(this.state.curtido){
       this.setState({
         curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas-1
       });
      }
       else{
        this.setState({
          curtido: !this.state.curtido,
         numeroCurtidas: this.state.numeroCurtidas+1
        });
       }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
      compartilhando: false
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      numeroComentarios: this.state.numeroComentarios + 1,
      comentando: false
    })
  }
  
  onClickMarca = () => {
    this.setState({
      marcado: !this.state.marcado
    })
  }
  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando,
      comentando: false
    })
  }
  aoCompartilhar = (event) => {
    let textoCompartilhar = document.getElementById("textComentario").value;
  if(textoCompartilhar != "")
  console.log(`Post compartilhado no ${event.target.id.substring(11)} com a mensagem: '${textoCompartilhar}'`)
  else{
    console.log(`Post compartilhado no ${event.target.id.substring(11)}, sem mensagem`)
  }
    this.setState({
        compartilhando:false
    })
  }
  render() {
    let iconeCurtida;
    let IconeMarca;
    let componenteComentarioOuCompartilha;
    if (this.state.curtido) {
       iconeCurtida = iconeCoracaoPreto
    }
    else {
       iconeCurtida = iconeCoracaoBranco
    }
    
    if (this.state.comentando) {
      componenteComentarioOuCompartilha = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }
    else if(this.state.compartilhando){
      componenteComentarioOuCompartilha = <SecaoCompartilha  aoCompartilhar={this.aoCompartilhar} />
    }
    if(this.state.marcado){
      IconeMarca = iconeMarcado;
    }
    else{
      IconeMarca = iconeDesmarca;
    }

  

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'} />

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />
        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
          <IconeSemContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />
        <IconeSemContador
          icone={IconeMarca}
          onClickIcone={this.onClickMarca}
        />
      </div>
      {componenteComentarioOuCompartilha}
    </div>
  }
}

export default Post