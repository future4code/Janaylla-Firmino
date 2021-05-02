import styled from 'styled-components'
import {ChatBubbleOutlineOutlined} from '@material-ui/icons'
import {Card, CardContent} from '@material-ui/core'
export const DivConteiner = styled(Card)`
    margin: 5px;
    background-color: white;
    >div{
      padding-top: 5px !important;
      padding-bottom: 5px !important;
    } 
    width: 700px;
    max-width: 100%;
`

export const Comments = styled(ChatBubbleOutlineOutlined)`
cursor:pointer;
`
export const DivLike = styled.div`
display: flex;
`
export const DivComments = styled.div`
display: flex;
`
export const DivInteractions =  styled.div`
display:flex;
width: 100%;
align-items: center;
justify-content: space-between;
`
export const CardContentComment = styled(CardContent)`
`