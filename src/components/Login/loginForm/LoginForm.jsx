import React from "react";
import classesLoginForm from './loginForm.module.css';
import { NavLink } from "react-router-dom";
import { Field } from "redux-form";
import { Input, createFild } from "../../common/FormControls/FormsConstrols"
import { required, maxLenghtCreator } from "../../../utils/validators/validators"


const LoginForm = ({handleSubmit, error}) => {
    const maxLength40 = maxLenghtCreator(40);
    return (
        <form onSubmit={handleSubmit}>
            <div className={classesLoginForm.contetnt}>
                <div className={classesLoginForm.contetntData}>
                    <div className={classesLoginForm.telEmail}>Телефон или email</div>
                    {createFild(classesLoginForm.inputTelEmail, "text", "Login", Input, "login",[required, maxLength40])}
                    <div className={classesLoginForm.pasword}> Пароль</div>
                    {createFild(classesLoginForm.inputPasword, "password", "Password", Input, "password",[required, maxLength40])}
                    {error && <div className={classesLoginForm.formSummaryError}>
                        {error}
                    </div>}
                    <button className={classesLoginForm.btnInput} type="submit">
                        Войти
                    </button>
                    <div className={classesLoginForm.contentCheckbox}>
                    {createFild(null, "checkbox", null, "input", "rememberMe",[])}
                        <div>Запмомнить меня</div>
                    </div>
                    <NavLink to="/passwordRecovery" className={classesLoginForm.passwordRecovery}>
                        Забыли пароль?
                    </NavLink>
                </div>
            </div>

        </form>
    )
}

export default LoginForm

