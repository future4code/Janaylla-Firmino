import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useRequestData } from '../../hooks/useRequestData'
import Header from '../../components/header/header'
import Snackbar from '../../components/snackbar/snackbar'
import ButtonTransations from '../../components/butonsTransaction/butonsTransaction'
import Transations from '../../components/modalTransaction/modalTransaction'
import BasicInformation from '../../components/userBasicInformation/userBasicInformation'
import Extract from '../../components/extract/extract'
import { DivContainer } from './styled'
import { putBalance, newBalance, newPayment, newTransfer } from '../../services/API'

function App() {
  const { cpf } = useParams();
  const [user, getUser, message, error] = useRequestData(`user/${cpf}`, 'user', {});
  const [transation, setTransation] = useState('')
  const [snack, setSnack] = useState({
    text: '',
    error: false,
  })
  const [loading, setLoading] = useState(false)

  const onClickUpdate = (cpf, name) => {
    putBalance(cpf, name, setSnack, setLoading)
  }
  const onClickNewBalance = (form) => {
    newBalance(user.cpf, user.name, form, setSnack, setLoading)
  }
  const onClickNewPayment = (form) =>{
    console.log(form)
    newPayment(user.cpf, user.name, form, setSnack, setLoading)
  }
  const onClickNewTranfer = (form) =>{
    console.log(form)
    newTransfer(user.cpf, user.name, form, setSnack, setLoading)
  }
  useEffect(() => {
    if (!loading) {
      getUser()
    }
  }, [loading])
  return (
    <DivContainer>
      {
        user && user.name &&
        <>
          <Header title={user.name} />
          <BasicInformation
            name={user.name}
            cpf={user.cpf}
            balance={user.balance}
            birtDate={user.birtDate}
            onClickUpdate={onClickUpdate}
          />
          <ButtonTransations
            setTransation={setTransation}
          />
          <Transations
            setTransation={setTransation}
            transation={transation}
            newBalance={onClickNewBalance}
            newPayment={onClickNewPayment}
            newTransfer={onClickNewTranfer}
          />
          <Extract
            extract={user.extract}

          />
        </>
      }
      {message && <Snackbar text={message} error={error} />}
      {snack.text && <Snackbar text={snack.text} error={snack.error} />}
    </DivContainer>
  );
}

export default App;
