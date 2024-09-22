import { createSelector } from "reselect";


export const getUsersSelector = (state)=>{
    console.log("SELECTOR GET USERS")
    return state.findUsers.users;
};

export const getUsersSuperSelector = createSelector ([getUsersSelector], (usersSelector)=>{
    return usersSelector.filter(e=>true);
})

export const getPageSizeSelector = (state)=>{
    return state.findUsers.pageSize;
};

export const getTotalUsersCountSelector = (state)=>{
    return state.findUsers.totalUsersCount;
};

export const getCurrentPageSelector = (state)=>{
    return state.findUsers.currentPage;
};

export const getIsFetchingSelector = (state)=>{
    return state.findUsers.isFetching;
};

export const getIsNextFetchingSelector = (state)=>{
    return state.findUsers.isNextFetching;
};

export const getFollowingInProgressSelector = (state)=>{
    return state.findUsers.followingInProgress;
};
