import {applyMiddleware, combineReducers, legacy_createStore as createStore, compose} from "redux";

import { thunk } from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import myFriendReducer from './myFriendReducer';
import sidebarReducer from './sidebarReducer';
import findUsersReducer from './findUsersReducer';
import authReducer from './authReducer';
import appReducer from "./appReduser";

const thunkMiddleware = thunk;

let reducers = combineReducers({
    profilePage : profileReducer,
    messagePage : messageReducer,
    sidebar : sidebarReducer,
    myFriendPage : myFriendReducer,
    findUsers : findUsersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});


//  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


let store = createStore(reducers, applyMiddleware(thunkMiddleware)); // applyMiddleware - промежуточные слои

window.__store__ = store;

export default store;