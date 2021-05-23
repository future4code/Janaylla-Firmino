import React from 'react'
import Header from '../../components/header/header'
import CardUser from '../../components/cardUser/cardUser'
import Snackbar from '../../components/snackbar/snackbar'
import Form from '../../components/formAddUser/formAddUser'
import {useRequestData} from '../../hooks/useRequestData'
import {DivConteiner, DivMain} from './styled'
function Index() {    
const [users, getUsers, message, error] = useRequestData('users', 'users', []);
  return (
    <DivConteiner >
    <Header title="Sistema bancário"/>
    <DivMain>
      <CardUser users={users}/>
      {message && <Snackbar text={message} error={error}/>}
      <Form/>
    </DivMain>
    </DivConteiner>
  );
}

export default Index;
