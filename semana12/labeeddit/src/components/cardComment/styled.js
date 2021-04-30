import styled from 'styled-components'
import {ChatBubbleOutlineOutlined} from '@material-ui/icons'
import {CardContent} from '@material-ui/core'
export const DivConteiner = styled.div`
    margin: 5px;
    >div{
      padding-top: 5px !important;
      padding-bottom: 5px !important;
    }
`
export const Card = styled.div`
  border: solid black 2px;
  
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