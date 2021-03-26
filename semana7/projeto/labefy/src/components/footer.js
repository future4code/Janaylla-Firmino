import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const FooterDiv = styled.div`
    background-color: #808080;
    padding: 25px !important;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default class Footer extends React.Component{
    render(){
        return (<FooterDiv>
                Feito com  {"<3"}  por Janaylla Firmino
        </FooterDiv>)
    }
}