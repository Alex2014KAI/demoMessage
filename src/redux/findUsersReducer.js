import { userAPI } from "../api/api";

import {updateObjectInArray} from '../utils/object-helpers/objectHelpers';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const ADD_CURRENT_PAGE = "ADD_CURRENT_PAGE";
const ADD_SET_USERS = "ADD_SET_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING ";
const TOGGLE_IS_NEXT_FETCHING = "TOGGLE_IS_NEXT_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
  users: [],              // Массив пользователей
  totalUsersCount: null,  // Число зарегистрированных пользователей
  pageSize: 10,     // Число отображаемых пользователей
  currentPage: 1,   // отображаемая страница
  isFetching: false,
  isNextFetching: false,
  followingInProgress: [],
};

const findUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true}),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false}),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
        // users: newUsers,
        // users: state.users.concat(action.users),
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    }
    case ADD_CURRENT_PAGE: {
      state.currentPage++;
      return {
        ...state,
        currentPage: state.currentPage,
      };
    }
    case ADD_SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOGGLE_IS_NEXT_FETCHING: {
      return {
        ...state,
        isNextFetching: action.isNextFetching,
      };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFething
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }
    default: {
      return state;
    }
  }
};

export const followSuccess = (userId = 1) => ({ type: FOLLOW, userId });

export const unFollowSuccess = (userId = 1) => ({ type: UNFOLLOW, userId });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

export const addCurrentPage = () => ({ type: ADD_CURRENT_PAGE });

export const addSetUsers = (users) => ({ type: ADD_SET_USERS, users });

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleIsNextFetching = (isNextFetching) => ({
  type: TOGGLE_IS_NEXT_FETCHING,
  isNextFetching,
});

export const toggleWolliwingProgress = (isFething, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFething,
  userId,
});

export const getUsers = (currentPage, pageSize) => {
  // getUsersThunkCreator
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await userAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

export const addUsers = (currentPage, pageSize) => {
  // addUsersThuncCreator
  return async (dispatch) => {
    dispatch(addCurrentPage());
    dispatch(toggleIsNextFetching(true));
    const data = await userAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsNextFetching(false));
    dispatch(addSetUsers(data.items));
  };
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleWolliwingProgress(true, userId));
  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleWolliwingProgress(false, userId));
};

export const follow = (id) => {
  return (dispatch) => {
    followUnfollowFlow(dispatch, id, userAPI.follow.bind(userAPI), followSuccess);
  };
};

export const unFollow = (id) => {
  return (dispatch) => {
    followUnfollowFlow(dispatch, id, userAPI.unFollow.bind(userAPI), unFollowSuccess);
  };
};

export default findUsersReducer;

// export const follow = (id)=>{
//   return async (dispatch)=>{
//     dispatch(toggleWolliwingProgress(true, id));
//         const data = await userAPI.follow(id)
//                 if (data.resultCode === 0) {
//                   dispatch(followSuccess(id));
//                 };
//                 dispatch(toggleWolliwingProgress(false, id));
//   }
// }

// export const unFollow = (id)=>{
//   return async (dispatch)=>{
//     dispatch(toggleWolliwingProgress(true, id));
//         const data = await userAPI.unFollow(id)
//                 if (data.resultCode === 0) {
//                   dispatch(unFollowSuccess(id));
//                 }
//                 dispatch(toggleWolliwingProgress(false, id));
//   }
// }
