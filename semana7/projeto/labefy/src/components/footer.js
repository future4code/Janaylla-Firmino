import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const FooterDiv = styled.div`
    background-color: black;
    color: white !important;
    padding: 25px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 12px;
    a{
        color: white;
        :hover{
            color: red;
        }
    }
`

export default class Footer extends React.Component{
    render(){
        return (<FooterDiv>
                <p>Feito com  {"<3"}  por Janaylla Firmino</p>
                <a href='https://br.freepik.com/vetores/musica' target="blanck">Música vetor criado por freepik - br.freepik.com</a>
        </FooterDiv>)
    }
}