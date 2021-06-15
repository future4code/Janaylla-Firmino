import {getTokenData} from '../services/authenticator'
import { authenticationData } from "../types/user"
import {selectUserById} from '../data/selectUserById'

export const validateToken = async (token: string): Promise<boolean> => {
        const userAuthenticationData:authenticationData = getTokenData(token);

        const user = selectUserById(userAuthenticationData.id)
        if(user){
            return true;
        }
        else{
               return false;
        }
}