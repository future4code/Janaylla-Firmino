import React from 'react';
import {TextField, Button, Typography} from '@material-ui/core';
import { DivContainer } from './styled';
import maskCpf from '../../constants/maskCpf'
export default function Form({onSubmit, form, onChange}) {

    return (
        <DivContainer onSubmit={onSubmit}>
            <Typography variant="h6" noWrap>
          Novo cliente
         </Typography>
                <TextField
                    id="outlined-basic"
                    label="Nome"
                    variant="outlined"
                    margin="normal"
                    value={form.name}
                    name="name"
                    onChange={onChange}
                    fullWidth />
                <TextField
                    id="outlined-basic"
                    label="CPF"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={form.cpf}
                    name="cpf"
                    onChange={(e) =>onChange(e, maskCpf)}
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
                    value={form.birthDate}
                    name="birthDate"
                    onChange={onChange}
                />
                <Button  variant="contained" color="primary" type="submit">
                    Cadastrar
                </Button>
        </DivContainer>
    );
}