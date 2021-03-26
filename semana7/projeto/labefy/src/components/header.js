import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const HeaderDiv = styled.div`
    background-color: #808080;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 25px !important;
`

export default class Header extends React.Component{
    render(){
        return (<HeaderDiv>
            <button onClick={() => this.props.mudarPagina(this.props.pagina)}>{this.props.mudarPaginaTxt}</button>
        </HeaderDiv>)
    }
}