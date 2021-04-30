import styled from 'styled-components'
import {ThumbDownAltOutlined, ThumbUpAltOutlined, ChatBubbleOutlineOutlined} from '@material-ui/icons'

export const DivConteiner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #dddddd;
min-height: 100vh;
`
export const DisLike = styled(ThumbDownAltOutlined)`
cursor:pointer;
`
export const Like = styled(ThumbUpAltOutlined)`
cursor:pointer;
`
export const Comments = styled.div`
width: 700px;
display: flex;
flex-direction: column;

`
export const DivLike = styled.div`
display: flex;
`
export const DivComments = styled.div`
display: flex;
max-width: 800px;
width:100%;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #cccccc;
margin: 5px;
border-radius: 10px;
`
export const DivInteractions =  styled.div`
display:flex;
width: 100%;
align-items: center;
justify-content: space-between;
`
export const DivPost = styled.div`
    width: 800px;
    max-width: 100%;
    display: flex;
    align-items: center;
`