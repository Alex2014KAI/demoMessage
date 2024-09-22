import React from "react";
import classesMessage from '../Message.module.css';
import { Field, reduxForm } from "redux-form";
import {required, maxLenghtCreator} from "../../../utils/validators/validators"
import {Textarea} from "../../../components/common/FormControls/FormsConstrols"

const AddMessageForm = (props) => {

    const maxLength10 = maxLenghtCreator(10);

    return (
        <form onSubmit={props.handleSubmit}
        className={classesMessage.formNewPost}>
            <button className={classesMessage.btnMyMassege} type="submit">
                Отправить </button>

            <Field component = {Textarea}
                validate={[required, maxLength10]}
                name = "newMessageBody"
                placeholder='Напишите сообщение...'
                className={classesMessage.myMassege} />
        </form>
    )
};
 
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

const addMessageFormContent = (props)=>{
    const submit = formData=>{
        props.addNewMessage(formData.newMessageBody);
    }

    return (<div>
        <AddMessageFormRedux onSubmit = {submit}/>
    </div>)
}

export default addMessageFormContent;
