import styled from 'styled-components'

import { Fab, Link, Breadcrumbs} from '@material-ui/core'
export const DivConteiner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #dddddd;
`
export const Form = styled.form`
`
export const Posts = styled.section`
width: 800px;
display: flex;

flex-direction: column;
`
export const PostAddIcon = styled(Fab)`
position: fixed !important;
bottom: 10px;
`
export const OrdenaLink = styled(Link)`
cursor: pointer;
`

export const OrdenaFeed = styled(Breadcrumbs)`
cursor: pointer;
`