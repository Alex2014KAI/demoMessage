const ADD_MESSAGE = "ADD-MESSAGE";

const initialState = {
  dialogsDataMessage: [
    {
      id: 1,
      name: "Нина",
      img: "../../../images/AvatarNina.webp",
      text: "It is good",
    },
    { id: 2, name: "Диман", img: "", text: "" },
    { id: 3, name: "Саша", img: "", text: "" },
    { id: 4, name: "Юра", img: "", text: "" },
    { id: 5, name: "Паша", img: "", text: "" },
    { id: 6, name: "Денис", img: "", text: "" },
    { id: 7, name: "Олег", img: "", text: "" },
  ],

  messagesDataMessage: [
    {
      id: 1,
      name: "Нина",
      img: "../../../images/AvatarNina.webp",
      text: "It is good",
    },
    {
      id: 2,
      name: "Я",
      img: "../../../images/MyAvatar.jpg",
      text: "Hi, how are you",
    },
    //   { id: 2, name: "Диман", img: "../../../images/avaDima.jpg", text: "я хочу дмой", },
    //   { id: 3, name: "Саша", img: "../../../images/AvaSasha.jpg", text: "", },
    //   { id: 4, name: "Юра", img: "../../../images/avaYra.jpg", text: "", },
    //   { id: 5, name: "Паша", img: "../../../images/avaPasha.jpg", text: "", },
    //   { id: 6, name: "Денис", img: "../../../images/avaDenis.jpg", text: "", },
    //   { id: 7, name: "Олег", img: "../../../images/avaOleg.jpg", text: "", },
  ],
};

const messageReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE: {
      let newmessagesDataMessage = {
        id: state.messagesDataMessage.length + 1,
        name: "Я",
        img: "../../../images/MyAvatar.jpg",
        text: action.newMessageBody,
      };
      return {
        ...state,
        messagesDataMessage: [
          ...state.messagesDataMessage,
          newmessagesDataMessage,
        ],
      };
    }
    default:
      return state;
  }
};

export const addMessageActonCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody}); //
//


export default messageReducer;
