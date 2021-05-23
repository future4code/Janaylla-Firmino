import React from 'react'
import Header from '../../components/header/header'
import CardUser from '../../components/cardUser/cardUser'
import Snackbar from '../../components/snackbar/snackbar'
import Form from '../../components/formAddUser/formAddUser'
import {useRequestData} from '../../hooks/useRequestData'
import {DivContainer, DivMain} from './styled'
function Index() {    
const [users, getUsers, message, error] = useRequestData('users', 'users', []);
  return (
    <DivContainer >
    <Header title="Sistema bancário"/>
    <DivMain>
      <CardUser users={users}/>
      <Form/>
    </DivMain>
    {message && <Snackbar text={message} error={error}/>}
    </DivContainer>
  );
}

export default Index;
