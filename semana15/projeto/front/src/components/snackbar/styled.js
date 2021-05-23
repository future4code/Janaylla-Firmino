import styled from "styled-components";

import Snackbar from "@material-ui/core/Snackbar";

export const DivContainer = styled.div``;
export const SnackbarMessage = styled(Snackbar)`
  background-color: ${(props) => props.error ? "#e02020":"green"} !important;
  * {
  background-color:${(props) => props.error ? "#e02020":"green"}  !important;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
  }
`;