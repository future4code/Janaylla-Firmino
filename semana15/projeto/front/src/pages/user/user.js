import React from 'react'
import { useParams } from 'react-router-dom';
import {useRequestData} from '../../hooks/useRequestData'
import Header from '../../components/header/header'
function App() {
    const {cpf} = useParams();
    const [user, getUsers, message, error] = useRequestData(`user/${cpf}`, 'user', {});
   return (
    <div>
        { 
        user && user.name &&
        <>
          <Header title={user.name}/>
         </>
        }
        
    </div>
  );
}

export default App;
