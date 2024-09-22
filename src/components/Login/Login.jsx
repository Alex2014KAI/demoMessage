import React from "react";
import classesLogin from './Login.module.css';
import LoginForm from './loginForm/LoginForm'
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer"
import { Navigate } from "react-router-dom";


const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);

const Login = ({login, isAuth}) => {

    const submit = (formData) => {
        login(formData.login, formData.password, formData.rememberMe = false)
    }
    if (isAuth) {
        return <Navigate to="/profile" />
    }
    return (<div>
        <h3 className={classesLogin.Header}>Для продолжения Вам необходимо войти  </h3>
        <LoginReduxForm onSubmit={submit} />
    </div>

    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
};



// export default Login;
export default connect(mapStateToProps, { login })(Login);