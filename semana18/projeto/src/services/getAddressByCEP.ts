import axios from "axios";
import {address} from '../types'
export const getAddressByCEP = async (
    cep: string
    ): Promise <address | null> => {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
        const address: address = {
          street: response.data.logradouro,
          neighborhood: response.data.bairro,
          city: response.data.localidade,
          state: response.data.uf
        }
        return address
      } catch (error) {
        return null;
      }
}


