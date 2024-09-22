import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import myFriendReducer from './myFriendReducer';
import sidebarReducer from './sidebarReducer';

const store = {
  _state: {
    profilePage: {
      messagesDataProfile: [
        { id: 1, text: "В далекой далекой шалактике", like: 10 },
        { id: 2, text: "И днем и ночью кот ученный", like: 32 },
        { id: 3, text: "а где то лондонский дождь", like: 322 },
        { id: 4, text: "ну кто из нас на палубе ночной", like: 12 },
        { id: 5, text: "виновата ли я ", like: 44 },
        { id: 6, text: "ээ ты кто такой давай до свидания", like: 12 },
        { id: 7, text: "ты это заходи если чёё", like: 10 },
      ],
      newPostText: "",
    },

    messagePage: {
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
      newTextMessage: "",
    },

    myFriendPage: {
      friends: [
        {
          id: 1,
          name: "Нина",
          img: "../../../images/AvatarNina.webp",
          text: "It is good",
        },
        { id: 2, name: "Диман", img: "../../../images/avaDima.jpg", text: "" },
        { id: 3, name: "Саша", img: "../../../images/AvaSasha.jpg", text: "" },
        { id: 4, name: "Юра", img: "../../../images/avaYra.jpg", text: "" },
        { id: 5, name: "Паша", img: "../../../images/avaPasha.jpg", text: "" },
        { id: 6, name: "Денис", img: "../../../images/avaDenis.jpg", text: "" },
        { id: 7, name: "Олег", img: "../../../images/avaOleg.jpg", text: "" },
      ],
    },

    sidebar:{

    },

  },//
  //

  _callSubscrider() {},//
  //

  get state() {
    return this._state;
  },//
  //

  subscribe(observer) {
    this._callSubscrider = observer;
  },//
  //


  dispatch(action) { 

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = messageReducer (this._state.messagePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._state.myFriendPage = myFriendReducer(this._state.myFriendPage, action);

    this._callSubscrider(this._state);

  },//
  //



// delete:{
//   addPost() {
//     let newMessagesDataProfile = {
//       id: 8,
//       text: this._state.profilePage.newPostText,
//       like: 0,
//     };
//     this._state.profilePage.messagesDataProfile.push(newMessagesDataProfile);
//     this._callSubscrider(this._state);
//     this.updateNewPostText("");
//   },
  

//   updateNewPostText(newText) {
//     this._state.profilePage.newPostText = newText;
//     this._callSubscrider(this._state);
//   },
  

//   addMessage() {
//     let newmessagesDataMessage = {
//       id: 2,
//       name: "Я",
//       img: "../../../images/MyAvatar.jpg",
//       text: this._state.messagePage.newTextMessage,
//     };
//     this._state.messagePage.messagesDataMessage.push(newmessagesDataMessage);
//     this._callSubscrider(this._state);
//     this.updateNewMessageText("");
//   },
  

//   updateNewMessageText(newText) {
//     this._state.messagePage.newTextMessage = newText;
//     this._callSubscrider(this._state);
//   },
  

//   increaseLike(id) {
//     this._state.profilePage.messagesDataProfile[id - 1].like++;
//     this._callSubscrider(this._state);
//   },
// }
  
};

window.store = store;

export default store;
