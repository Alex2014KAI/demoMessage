import profileReducer from "./profileReducer";
import React from "react";
import { addPostActionCreator, deletePost } from "./profileReducer";
// import {createRenderer} from "react-test-render";
import ProfileStatus from "../components/Profile/CartUser/ProfileStatus/ProfileStatus"

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
};

describe("test ProfileReduser", () => {
  test("lenght of posts should be incremented", () => {
    let action = addPostActionCreator("hI, main name Alexei");
    let newState = profileReducer(initialState, action);
    expect(newState.messagesDataProfile.length).toBe(8);
  });

  test("expected messages", () => {
    let action = addPostActionCreator("hI, main name Alexei");
    let newState = profileReducer(initialState, action);
    expect(newState.messagesDataProfile[7].text).toBe("hI, main name Alexei");
  });

  test("after deleting length of messages should be decrement", () => {
    let action = deletePost(20000);
    let newState = profileReducer(initialState, action);
    expect(newState.messagesDataProfile.length).toBe(7);
  });
});

// describe("BPfofile status component", ()=>{
//   test("status from props should be in the status",()=>{
//   const component = createRenderer(<ProfileStatus status="it-camsutra"/>);
//   const instance = component.getInstance();
//   expect(instance.state.status).toBe("it-camsutra");
//   })
// })