
interface User {
    FirstName: string;
    LastName: string;
    Email: string;
    Phone: string;
  }
import {getUsers,createUser} from "../components/APIS/apireq"
export const fetchUser = () => {
    return async (dispatch) => {
      
            const {data,error} = await getUsers();
            if (!error)
            {
            dispatch({ type: 'FETCH_USER_SUCCESS', payload: data });
            }
            else
            {
            dispatch({ type: 'FETCH_USER_FAILURE', error: error });
            }
        
    };
};

export const createUserapi = (userData:User) => {
    return async (dispatch) => {
        const {data,error} = await createUser(userData);
        if (!error)
            {
            dispatch({ type: 'FETCH_USER_SUCCESS', payload: data });
            }
            else
            {
            dispatch({ type: 'FETCH_USER_FAILURE', error: error });
            }
    };
};

export const changeLanguage = (language:string) => {
    return async (dispatch) => {
        
            dispatch({ type: 'CHANGE_LANGUAGE', payload: language });
            
    };
};