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
        case 'USER_SUCCESS':
            return { ...state, users: action.payload, error: null };
        case 'USER_FAILURE':
        case 'CHANGE_LANGUAGE':
            return { ...state, language: action.payload };
        
        default:
            return state;
    }
};

export default userReducer;