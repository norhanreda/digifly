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
  
  type UserSuccessAction = { type: 'USER_SUCCESS'; payload: User[] };
  type UserFailureAction = { type: 'USER_FAILURE'; error: string };
  type ChangeLanguageAction = { type: 'CHANGE_LANGUAGE'; payload: string };
  
  type Action = UserSuccessAction | UserFailureAction | ChangeLanguageAction;


const userReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case 'USER_SUCCESS':
            return { ...state, users: action.payload, error: null };
        case 'USER_FAILURE':
          return { ...state, error: action.error };
        case 'CHANGE_LANGUAGE':
            return { ...state, language: action.payload };
        
        default:
            return state;
    }
};

export default userReducer;