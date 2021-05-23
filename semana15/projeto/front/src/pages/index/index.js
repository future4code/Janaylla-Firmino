import React, {useState, useEffect} from 'react'
import Header from '../../components/header/header'
import CardUser from '../../components/cardUser/cardUser'
import Snackbar from '../../components/snackbar/snackbar'
import Form from '../../components/formAddUser/formAddUser'
import {useRequestData} from '../../hooks/useRequestData'
import {useForm} from '../../hooks/useForm'
import {DivContainer, DivMain} from './styled'
import {newUser} from '../../services/API'

function Index() { 
const [users, getUsers, message, error] = useRequestData('users', 'users', []);

const initialForm ={
  name: '',
  cpf: '',
  birtDate: ''
} 
const [form, onChange, resetForm] =  useForm(initialForm);

const [snack, setSnack] = useState({
  text:'',
  error: false,
})
const [loading, setLoading] = useState(false)
const [search, setSearch] = useState('')

const [usersSearch, getUsersSearch, messageSearch, errorSearch] = useRequestData(`search/${search}`, 'users', []);

const onSubmit = (e) => {
  e.preventDefault()
  newUser(form, setSnack, setLoading)
}
useEffect(() => {
  if(search){
    getUsersSearch()
  }
}, [search])

useEffect(() => {
  if(!loading){
    getUsers()
    resetForm(initialForm)
  }
}, [loading])
  return (
    <DivContainer >
    <Header title="Sistema bancário"/>
    <DivMain>
      {search ?  <CardUser users={usersSearch} search={search} setSearch={setSearch}/> :
      <CardUser users={users} search={search} setSearch={setSearch}/>
}
      <Form 
        form={form} 
        onChange={onChange}
        resetForm={resetForm}
        onSubmit={onSubmit}
        
      />
    </DivMain>
    {message && <Snackbar text={message} error={error}/>}
    {snack.text && <Snackbar text={snack.text} error={snack.error}/>}
    </DivContainer>
  );
}

export default Index;
