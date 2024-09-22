import React from "react";
import { connect } from "react-redux";

import Profile from "../Profile";
import axios from "axios";

import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

import { userAPI } from "../../../api/api"

import {
    setUserProfile, getProfile,
    getUserStatus, updateStatus
} from "./../../../redux/profileReducer";

import { Navigate } from "react-router-dom";
import { WithAuthRedirect } from "../../../hoc/WithAuthRedirect"
import { compose } from "redux";



class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let profileId = this.props.router.params.userId;
        if (!profileId && this.props.isAuth) {
            profileId = this.props.authorizedUserId;
            if (!profileId){
                this.props.history.push("/login");
            }
        };
        this.props.getProfile(profileId);

        // userAPI.getProfile(profileId)
        // .then(data=>{this.props.setUserProfile(data);});
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`)
        //     .then(respons => {
        //         this.props.setUserProfile(respons.data);
        //     });

        this.props.getUserStatus(profileId);
    }
    render() {
        return (<div>
            <Profile {...this.props} profile={this.props.profile}
                status={this.props.status} 
                updateStatus = {this.props.updateStatus}/>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage._status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
};


// let WithUrlDataContainerComponent = withRouter(ProfileContainer);
// export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
// class ProfileContainer extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     componentDidMount() {
//         debugger;
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
//             .then(respons => {
//                 this.props.setUserProfile(respons.data);
//             });
//     }

//     render() {
//         return (<div>
//             <Profile {...this.props} profile = {this.props.profile}/>
//         </div>
//         )
//     }
// }

// const mapStateToProps = (state)=>{
//     return {
//         profile: state.profilePage.profile,
//     }
// };

// export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);



function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}


// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);
// export default connect(mapStateToProps, { setUserProfile, getProfile })(withRouter(AuthRedirectComponent));
// export default connect(mapStateToProps, { setUserProfile, getProfile })(withRouter(ProfileContainer));


export default compose(connect(mapStateToProps, { setUserProfile, getProfile, getUserStatus, updateStatus }), withRouter, WithAuthRedirect)(ProfileContainer);
