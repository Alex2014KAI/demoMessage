import axios from "axios";
import React from "react";
import { connect } from "react-redux";

import { setAuthUserData, authMe } from "../../../redux/authReducer";
import {logout} from "../../../redux/authReducer"
import Header from "../Header";
import { userAPI } from "../../../api/api"


class HeaderContainer extends React.Component {

    // componentDidMount() {

    //     this.props.authMe();

    //     // userAPI.authMe()
    //     //     .then(data => {
    //     //         if (data.resultCode === 0) {
    //     //             const { id, email, login } = data.data;
    //     //             this.props.setAuthUserData(id, email, login);
    //     //         }
    //     //     })

    // }

    
    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login} logout = {this.props.logout} />
    }
}



const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};


export default connect(mapStateToProps, { logout })(HeaderContainer);
// export default HeaderContainer;