interface User {
    FirstName: string;
    LastName: string;
    Email: string;
    Phone: string;
  }
  
  interface State {
    users: User[];
    language: string;
    error: string | null;
  }
  
  const initialState: State = {
    users: [],
    language: "ar",
    error: null,
  };
  

const userReducer = (state: State = initialState, action: any): State => {
    switch (action.type) {
        case 'FETCH_USER_SUCCESS':
            return { ...state, users: action.payload, error: null };
        case 'FETCH_USER_FAILURE':
        case 'CREATE_USER_FAILURE':
            return { ...state, error: action.error };
        case 'CHANGE_LANGUAGE':
            return { ...state, language: action.payload };
        case 'CREATE_USER_SUCCESS':
            return state;
        default:
            return state;
    }
};

export default userReducer;