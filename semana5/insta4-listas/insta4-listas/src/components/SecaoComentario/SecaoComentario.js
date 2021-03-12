import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		textoComentario: '',
		comentarios: []
	}
	onChangeComentario = (event) =>{
		if(event.data == "Enter"){
			this.aoEnviar();
		}
		else{
		this.setState({
			textoComentario: event.target.value
		});
	}
	}
	aoEnviar = () => {
		const lista = this.state.comentarios;
		const novaLista = [...lista];
		novaLista.push(this.state.textoComentario);
		this.setState({
			comentarios: novaLista
		});
		console.log(novaLista);
	}

	render() {
		const lista = this.state.comentarios;
		const comentarios = lista.map((item, indice) => {
			return (<div c className={'comment'} key={indice}>{item}</div>)
		});
		return <div>
		<div  className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.textoComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.aoEnviar}>Enviar</button>	
			</div>
			<div>
			{comentarios}
			</div>
		</div>
	}
}
