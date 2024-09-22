import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const authMe = () => {
  return async (dispatch) => {
    const data = await authAPI.authMe();
    if (data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  };
};

export const login = (email, password, rememberMe) => {
  return async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
      dispatch(authMe());
    } else {
      const message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Login or password is wrong";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
};

export default authReducer;

// export const authMe = () => {
//   return async (dispatch) => {
//     return authAPI.authMe()
//     .then((data) => {
//       if (data.resultCode === 0) {
//         const { id, email, login } = data.data;
//         dispatch(setAuthUserData(id, email, login, true));
//       }
//     });
//   };
// };
