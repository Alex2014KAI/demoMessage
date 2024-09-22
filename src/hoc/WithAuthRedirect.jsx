import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux'

// export const WithAuthRedirect = (Component) => {
//     class RedirectComponent extends React.Component {
//         render() {
//             if (!this.props.isAuth) return <Navigate to="/login" />
//             return <Component {...this.props} />
//         }
//     }
//     return RedirectComponent
// }

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
};

export const WithAuthRedirect = (Component) => {
    function RedirectComponent(props) { 
        if (!props.isAuth) return <Navigate to="/login" />
        return <Component {...props} />
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent
}