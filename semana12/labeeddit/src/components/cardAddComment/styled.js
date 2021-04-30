import styled from 'styled-components'
import {ThumbDownAltOutlined, ThumbUpAltOutlined, ChatBubbleOutlineOutlined} from '@material-ui/icons'

import {CardContent} from '@material-ui/core'
export const DivConteiner = styled(CardContent)`

max-width: 700px;
width: 100%;
    margin: 5px;
`
export const Form = styled.form`
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

