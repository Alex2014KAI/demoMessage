import React from "react";
import classesMyPost from "./FormMyPost.module.css"
import { Field, reduxForm } from "redux-form";
import {required, maxLenghtCreator} from "../../../../../utils/validators/validators"
import {Textarea} from "../../../../common/FormControls/FormsConstrols"

const maxLenght10 = maxLenghtCreator(10);

const FormMyPost = (props) => {
    return (
        <form  onSubmit = {props.handleSubmit}>
            <Field 
            // component ="textarea" 
            component ={Textarea} 
            name="newMyPost"
            className={classesMyPost.input} 
            placeholder='Напишите сообщение...' 
            validate={[required, maxLenght10]}/>
            <button className={classesMyPost.btn}
                type="submit"> Добавить </button>
        </form>
    )
};

const FormMyPostRedux = reduxForm({form: "myPostNewMessage"})(FormMyPost);

const FormMyPostReduxContent = (props) => {

    const submit = (formData)=>{
        props.addPost(formData.newMyPost);
    }
    return(<div>
        <FormMyPostRedux onSubmit={submit}/>
        </div>
    )
}


export default FormMyPostReduxContent;