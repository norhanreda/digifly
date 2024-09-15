// const initialState = {
    
//         FirstName: "",
//         LastName: "",
//         Email: "testmail@email.com",
//         Phone: ""
      
// };
// const userReducer  = (state=initialState,action) => {
//     switch(action.type){
//         case "Fetch_start":
//             return {...state,loading:true,error:null}
//         case "Fetch_success":
//             return {...state,loading:false,data:action.payload}
//         case "Fetch_error":
//             return {...state,loading:false,error:action.payload}
     
//         default:
//              return state
//     }


// };

// export default userReducer;

// reducers/userReducer.js

const initialState = {
    users: [],
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_SUCCESS':
            return { ...state, users: action.payload, error: null };
        case 'FETCH_USER_FAILURE':
        case 'CREATE_USER_FAILURE':
            return { ...state, error: action.error };
        case 'CREATE_USER_SUCCESS':
            // Handle success state after creating a user
            return state;
        default:
            return state;
    }
};

export default userReducer;