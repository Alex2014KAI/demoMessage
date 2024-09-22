import React from 'react';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'

import UsersAPIComponent from './UsersAPIComponent/UsersAPIComponent'
import {
    followSuccess, unFollowSuccess, setUsers, setCurrentPage,
    setTotalUsersCount, addCurrentPage, addSetUsers,
    toggleIsFetching, toggleIsNextFetching, toggleWolliwingProgress,
    getUsers, addUsers, follow, unFollow
} from '../../redux/findUsersReducer';
import { compose } from 'redux';

import {getUsersSelector, getPageSizeSelector,
    getTotalUsersCountSelector, getCurrentPageSelector,
    getIsFetchingSelector, getIsNextFetchingSelector,
    getFollowingInProgressSelector,
} from "../../redux/selectors/findUsersSelector";





// const mapStateToProps = (state) => {
//     return {
//         users: state.findUsers.users,
//         pageSize: state.findUsers.pageSize,
//         totalUsersCount: state.findUsers.totalUsersCount,
//         currentPage: state.findUsers.currentPage,
//         isFetching: state.findUsers.isFetching,
//         isNextFetching: state.findUsers.isNextFetching,
//         followingInProgress: state.findUsers.followingInProgress,

//     }
// }

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        isNextFetching: getIsNextFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
    }
}





export default compose(connect(mapStateToProps, {
    setCurrentPage,
    getUsers,
    addUsers,
    follow,
    unFollow,
}),
//  WithAuthRedirect
)(UsersAPIComponent);

// let AuthRedirectComponent = WithAuthRedirect(UsersAPIComponent);
// const FindUsersContainer = connect(mapStateToProps, {
//     setCurrentPage,
//     getUsers,
//     addUsers,
//     follow,
//     unFollow,
// })(AuthRedirectComponent);
// export default FindUsersContainer;

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },

//         unFollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber)=>{
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount)=>{
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         addCurrentPage: ()=>{
//             dispatch(addCurrentPageAC());
//         },
//         addSetUsers: (users)=>{
//             dispatch(addSetUsersAC(users));
//         },
//         toggleIsFetching: (isFetching)=>{
//             dispatch(toggleIsFetchingAC(isFetching));
//         },
//         toggleIsNextFetching: (isFetching)=>{
//             dispatch(toggleIsNextFetchingAC(isFetching));
//         }
//     }
// }

// const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);







