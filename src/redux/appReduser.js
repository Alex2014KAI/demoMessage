import { authMe } from "./authReducer";

const INITIALIZED_SUCCESS = "appReduscer/INITIALIZED_SUCCESS";
// import { authAPI } from "../api/api";

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    default: {
      return state;
    }
  }
};

export const initializedSuccess = () => { 
   return {type: INITIALIZED_SUCCESS} 
};

export const initializeApp = () => {
  return (dispatch) => {
    let promis = dispatch(authMe());
    Promise.all([promis]).then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;
