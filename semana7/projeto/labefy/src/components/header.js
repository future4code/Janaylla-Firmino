import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const HeaderDiv = styled.div`
    background-color: black;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 15px !important;
    color: white;
    > h1 {
        cursor: pointer;
        font-size: 30px;
        :hover{
            color: red;
        }   
    }
`

export default class Header extends React.Component{
    render(){
        return (<HeaderDiv>
           <h1 onClick={() => {this.props.mudarPagina("Home")}}>Menu principal</h1>
        </HeaderDiv>)
    }
}