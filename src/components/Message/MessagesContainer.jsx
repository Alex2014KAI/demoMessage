import React from 'react';
import {Navigate} from 'react-router-dom'

import Message from './Message';
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect"

import { addMessageActonCreator,} from '../../redux/messageReducer';


import {connect} from 'react-redux'
import { compose } from 'redux';

const mapStateToProps = (state)=>{

    return {
        dialogsDataMessage: state.messagePage.dialogsDataMessage,
        messagesDataMessage: state.messagePage.messagesDataMessage,
        newTextMessage: state.messagePage.newTextMessage,
    }
}

const mapDispatchToProps = (dispatch)=>{
    
    return {
        addNewMessage: (newMessageBody)=>{
            dispatch(addMessageActonCreator(newMessageBody));
        },


    }
}

// let AuthRedirectComponent = (props)=>{
//     if (!props.isAuth) return  <Navigate to="/login"/>
//     return <Message {...props}/>
// }





// let AuthRedirectComponent = WithAuthRedirect(Message);
// const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);
// export default MessagesContainer;


export default compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Message);