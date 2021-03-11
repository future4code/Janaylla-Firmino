import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		textoComentario: ''
	}
	onChangeComentario = (event) =>{
		console.log(event.target.value);

		this.setState({
			textoComentario: event.target.value
		});
	}

	render() {
		return <div className={'comment-container'}>
			<img></img>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.textoComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
