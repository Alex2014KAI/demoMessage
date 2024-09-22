import { friendAPI } from "../api/api";
import { getPageSizeSelector } from "./selectors/findUsersSelector";

const GET_MY_FRIEND = "/myFriendReducer/GET_MY_FRIEND";
const TOGGLE_IS_NEXT_FETCHING = "/myFriendReducer/TOGGLE_IS_NEXT_FETCHING";
const UPDATE_PAGE_SIZE = "/myFriendReducer/UPDATE_PAGE_SIZE";

let initialState = {
  friends: [
    {
      id: 1,
      name: "Нина",
      img: "../../../images/AvatarNina.webp",
      text: "It is good",
      photos: { small: null, large: null },
    },
    {
      id: 2,
      name: "Диман",
      img: "../../../images/avaDima.jpg",
      text: "",
      photos: { small: null, large: null },
    },
    // { id: 3, name: "Саша", img: "../../../images/AvaSasha.jpg", text: "" },
    // { id: 4, name: "Юра", img: "../../../images/avaYra.jpg", text: "" },
    // { id: 5, name: "Паша", img: "../../../images/avaPasha.jpg", text: "" },
    // { id: 6, name: "Денис", img: "../../../images/avaDenis.jpg", text: "" },
    // { id: 7, name: "Олег", img: "../../../images/avaOleg.jpg", text: "" },
  ],
  isNextFetching: false,
  pageSize: 10,
};

const myFriendReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_FRIEND: {
      console.log(action.arrayUsers);
      return {
        ...state,
        friends: [...action.arrayUsers],
      };
    };
    case TOGGLE_IS_NEXT_FETCHING: {
      return {
        ...state,
        isNextFetching: action.isNextFetching,
      };
    };
    case UPDATE_PAGE_SIZE:{
      return{
        ...state,
        pageSize: action.pageSize,
      }
    };
  }
  return state;
};

const addMyFriend = (arrayUsers) => {
  return {
    type: GET_MY_FRIEND,
    arrayUsers,
  };
};

export const toggleIsNextFetching = (isNextFetching) => ({
  type: TOGGLE_IS_NEXT_FETCHING,
  isNextFetching,
});

const updatedPageSize = (prevPegeSize)=>{
  return {
    type: UPDATE_PAGE_SIZE,
    pageSize: prevPegeSize + 10,
  }
}

export const FirstGetFriendUsers = (currentPage = 1, pageSize = 10) => {
  return async (dispatch) => {
    const arrayUsers = await friendAPI.getFriendUsers(currentPage, pageSize);
    dispatch(addMyFriend(arrayUsers));
  };
};

export const addMyFrendsUsers = (prevPegeSize)=>{
  return async(dispatch)=>{
    dispatch(updatedPageSize(prevPegeSize));
    dispatch(toggleIsNextFetching(true));
    const arrayUsers = await friendAPI.getFriendUsers(1, prevPegeSize+10);
    dispatch(addMyFriend(arrayUsers));
    dispatch(toggleIsNextFetching(false));
  }
}





export default myFriendReducer;
