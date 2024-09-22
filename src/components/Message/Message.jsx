import React from 'react';
import classesMessage from './Message.module.css';
import DialogItem from './DialogItem';
import MyDialog from './MyDialog';

import AddMessageFormRedux from './addMessageForm/addMessageForm'

import { Navigate } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form';


const Message = (props) => {

    const dialogsElements = props.dialogsDataMessage.map((value) => <DialogItem name={value.name} id={value.id} key={value.id} />);
    const messagesElements = props.messagesDataMessage.map(val => <MyDialog img={val.img} name={val.name} text={val.text} key={val.id} />);

    const addNewMessage = () => {
        props.addNewMessage();
    };

    return (<div>
        <div className={classesMessage.content}>
            <div className={classesMessage.dialogs}>
                DIALOGS
                {dialogsElements}
            </div>


            <div className={classesMessage.dialog}>

                <MyDialog img='../../../images/MyAvatar.jpg' name='My' text='My hobbi is hockei' />
                {/* <MyDialog img={props.state.messagesDataMessage[0].img} name={props.state.messagesDataMessage[0].name} text={props.state.messagesDataMessage[0].text} /> */}


                {messagesElements}

            </div>


        </div>
        <AddMessageFormRedux addNewMessage={props.addNewMessage} />
    </div>
    );
};

export default Message;

{/* <div className={classesMessage.formNewPost}>
            <button className={classesMessage.btnMyMassege} onClick={addNewMessage}> Отправить </button>

            <textarea className={classesMessage.myMassege} placeholder='Напишите сообщение...'
                value={props.newTextMessage} onChange={onMessageChange} />
        </div> */}