import styled from 'styled-components'

import { Fab, Link, Breadcrumbs} from '@material-ui/core'
export const DivConteiner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #dddddd;
min-height: 100vh;
`
export const Form = styled.form`
`
export const Posts = styled.section`
width: 800px;
max-width: 100%;
display: flex;
flex-grow: 1;

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