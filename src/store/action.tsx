
interface User {
    FirstName: string;
    LastName: string;
    Email: string;
    Phone: string;
  }
import {getUsers,createUser} from "../components/APIS/apireq"
import { Dispatch } from 'redux';
export const fetchUser = () => {
    return async (dispatch:Dispatch) => {
      
            const {data,error} = await getUsers();
            if (!error)
            {
            dispatch({ type: 'USER_SUCCESS', payload: data });
            }
            else
            {
            dispatch({ type: 'USER_FAILURE', error: error });
            }
        
    };
};

export const createUserapi = (userData:User) => {
    return async (dispatch:Dispatch) => {
        const {data,error} = await createUser(userData);
        if (!error)
            {
            dispatch({ type: 'USER_SUCCESS', payload: data });
            }
            else
            {
            dispatch({ type: 'USER_FAILURE', error: error });
            }
    };
};

export const changeLanguage = (language:string) => {
    return async (dispatch:Dispatch) => {
        
            dispatch({ type: 'CHANGE_LANGUAGE', payload: language });
            
    };
};