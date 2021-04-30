import styled from 'styled-components'
import {ThumbDownAltOutlined, ThumbUpAltOutlined, ChatBubbleOutlineOutlined} from '@material-ui/icons'
import {Card} from '@material-ui/core'

export const DivConteiner = styled(Card)`
    margin: 5px;
    width: 800px;
    max-width: 100%;
`
export const DisLike = styled(ThumbDownAltOutlined)`
cursor:pointer;
`
export const Like = styled(ThumbUpAltOutlined)`
cursor:pointer;
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