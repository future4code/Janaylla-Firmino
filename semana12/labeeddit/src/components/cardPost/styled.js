import styled from 'styled-components'
import {ThumbDownAltOutlined, ThumbUpAltOutlined, ChatBubbleOutlineOutlined} from '@material-ui/icons'
import {Card, CardHeader} from '@material-ui/core'

export const DivConteiner = styled(Card)`
    margin: 5px;
    width: 800px;
    max-width: calc(100% - 10px);
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
export const MenuShare = styled.ul`
      display: flex;
      z-index: 1;
      justify-content: center;
      align-items: center;
      height: 50px;
 
`
export const MenuDiv =styled.div`
  position: relative;
`
export const MenuItem = styled.li`
list-style: none;
display: flex;
opacity: 0.5;
img{
  width: 32px;
  margin: 0 5px;
}
:hover{
  opacity: 1;
}
`
export const CardHeaderPost = styled(CardHeader)`
display: flex;
flex-wrap: wrap;
` 