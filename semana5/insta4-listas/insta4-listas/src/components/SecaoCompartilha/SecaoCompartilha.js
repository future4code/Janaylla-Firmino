import React, {Component} from 'react'
import './SecaoCompartilha.css'
import iconeFacebook from '../../img/facebook-24px.svg'
import iconeInstagram from '../../img/instagram_icon-icons.com_65435.svg'
import iconeTwitter from '../../img/twitter_icon-icons.com_65436.svg'
export class SecaoCompartilha extends Component {
	
	render() {

		return <div> 
			
			<div className={'share-container'}>
				<textarea
				className={'input-share'}
				placeholder={'Compatilhar com msg'}
				id="textComentario"
			/>
		<img src={iconeFacebook} onClick={this.props.aoCompartilhar} id='CompartilhaFaceboook' />

		<img src={iconeInstagram} onClick={this.props.aoCompartilhar} id='CompartilhaInstagram' />
		<img src={iconeTwitter}  onClick={this.props.aoCompartilhar}id='CompartilhaTwitter' /></div>
 	
		</div>
	}
}
