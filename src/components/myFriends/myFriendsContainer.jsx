import MyFriends from './myFriends';

import StoreContext from '../../storeContext';

import {connect} from 'react-redux';

import {WithAuthRedirect} from '../../hoc/WithAuthRedirect'
import { compose } from 'redux';
import {FirstGetFriendUsers, toggleIsNextFetching, addMyFrendsUsers} from "../../redux/myFriendReducer"

// const MyFriendsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {

//                     return (
//                         <MyFriends friends={store.getState().myFriendPage.friends} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }




const mapStateToProps = (state)=>{
    return {
        friends: state.myFriendPage.friends,
        isNextFetching: state.myFriendPage.isNextFetching,
        pageSize: state.myFriendPage.pageSize,
    };
};

const mapDispatchToProps = (dispatch)=>{
    return {
        FirstGetFriendUsers: (currentPage, pageSize)=>{ dispatch(FirstGetFriendUsers(currentPage, pageSize))},
        toggleIsNextFetching: (isNextFetching)=>{dispatch(toggleIsNextFetching(isNextFetching))},
        addMyFrendsUsers: (prevPegeSize)=>{dispatch(addMyFrendsUsers(prevPegeSize))},
    };
}


// let AuthRedirectComponent = WithAuthRedirect(MyFriends);
// const MyFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);



export default compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(MyFriends);