import {userAPI, profileAPI} from "../api/api"

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const INCREASE_LIKE = "INCREASE-LIKE";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const SET_USER_STATUS = "SET_USER_STATUS";

const DELETE_POST = "DELETE_POST";


const initialState = {
  messagesDataProfile: [
    { id: 1, text: "В далекой далекой шалактике", like: 10 },
    { id: 2, text: "И днем и ночью кот ученный", like: 32 },
    { id: 3, text: "а где то лондонский дождь", like: 322 },
    { id: 4, text: "ну кто из нас на палубе ночной", like: 12 },
    { id: 5, text: "виновата ли я ", like: 44 },
    { id: 6, text: "ээ ты кто такой давай до свидания", like: 12 },
    { id: 7, text: "ты это заходи если чёё", like: 10 },
  ],
  profile: null,
  _status: "",
};


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newMessagesDataProfile = {
        id: state.messagesDataProfile.length + 1,
        text: action.newMyPost,
        like: 0,
      };
      return {
        ...state,
      messagesDataProfile : [...state.messagesDataProfile, newMessagesDataProfile],
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return{
        ...state, 
        newPostText : action.newText,
      }
    }
    case INCREASE_LIKE: {
      let stateCopy = {...state};
      stateCopy.messagesDataProfile = [...state.messagesDataProfile];
      stateCopy.messagesDataProfile[action.id - 1].like++;
      return {
        ...state,
        messagesDataProfile : [...stateCopy.messagesDataProfile],
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    case SET_USER_STATUS: {
      return{
        ...state,
        _status: action.status,
      }
    }
    case DELETE_POST:{

      return {
        ...state,
        messagesDataProfile: state.messagesDataProfile.filter(p=> p.id !== action.postId),
      }
    }
    default: {
      // alert(`Error: is  not to type: ${action.type} (profileReducer)`);
      return state;
    }
  }
};

export const addPostActionCreator = (newMyPost) => ({ type: ADD_POST, newMyPost });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
}); 
export const increaseLikeActonCreator = (id) => ({
  type: INCREASE_LIKE,
  id: id,
}); 
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setStatus = (status) => ({type: SET_USER_STATUS, status: status});

export const getProfile = (profileId)=>{
  return async (dispatch)=>{
    const data = await userAPI.getProfile(profileId)
          dispatch(setUserProfile(data))
  }
};

export const getUserStatus = (id)=>{
  return async (dispatch)=>{
    const status = await profileAPI.getStatus(id)
      dispatch(setStatus(status.data))
  }
};


export const updateStatus = (status) =>{
  return async (dispatch)=>{
    const response = await profileAPI.updateStatus(status)
      if (response.data.resultCode === 0){
        dispatch(setStatus(status))
      }else{

      }
  }
}


export const deletePost = (postId)=> ({type:DELETE_POST, postId});












export default profileReducer;
