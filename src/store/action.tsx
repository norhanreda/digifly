
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

export const createUserapi = (userData) => {
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