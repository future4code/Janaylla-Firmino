import styled from 'styled-components'

export const DivContainer = styled.div`
margin-top: 25px;
   text-align: start;
   width:700px;
   max-width:100%;
   padding: 20px;
   align-self: center;
    border-radius: 3px;
    border: solid #909090 1px;
  >:first-child{
    font-size: 1.2em;
  }
`
export const Title = styled.th`
    color:black;
    display: flex;
    justify-content: space-between;
    text-align: start;
    border-bottom: solid #909090 1px;
    margin-bottom: 10px;
`
export const Lines = styled.th`
    color:#707070;
    display: flex;
    justify-content: space-between;
    text-align: start;
`

export const DivValue = styled.td``
export const DivDescription = styled.td`
 width: 50%;
`
export const DivDate = styled.td``
export const TableExtract = styled.table`
 width: 100%;
`