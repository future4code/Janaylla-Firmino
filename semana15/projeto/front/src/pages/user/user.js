import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import {useRequestData} from '../../hooks/useRequestData'
import Header from '../../components/header/header'
import Snackbar from '../../components/snackbar/snackbar'
import ButtonTransations from '../../components/butonsTransaction/butonsTransaction'
import Transations from '../../components/modalTransaction/modalTransaction'
import BasicInformation from '../../components/userBasicInformation/userBasicInformation'
import Extract from '../../components/extract/extract'
import {DivContainer} from './styled'
function App() {
    const {cpf} = useParams();
    const [user, getUsers, message, error] = useRequestData(`user/${cpf}`, 'user', {});
    const [transation, setTransation] = useState('')
    return (
    <DivContainer>
        { 
        user && user.name &&
        <>
          <Header title={user.name}/>
          <BasicInformation 
          name={user.name} 
          cpf={user.cpf} 
          balance={user.balance} 
          birtDate={user.birtDate} />
          <ButtonTransations 
          setTransation={setTransation}
          />
          <Transations setTransation={setTransation}  transation={transation}/>
          <Extract
          extract={user.extract}
          />
         </>
        }
         {message && <Snackbar text={message} error={error}/>}
    </DivContainer>
  );
}

export default App;
