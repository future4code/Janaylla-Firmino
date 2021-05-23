import React from 'react';
import {TextField, Button, Typography} from '@material-ui/core';
import { DivContainer } from './styled';

export default function BasicTextFields() {

    return (
        <DivContainer>
            <Typography variant="h6" noWrap>
          Novo cliente
         </Typography>
                <TextField
                    id="outlined-basic"
                    label="Nome"
                    variant="outlined"
                    margin="normal"
                    fullWidth />
                <TextField
                    id="outlined-basic"
                    label="CPF"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="outlined-full-width"
                    label="Data de nascimento"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    type="date"
                />
                <Button  variant="contained" color="primary">
                    Cadastrar
                </Button>
        </DivContainer>
    );
}