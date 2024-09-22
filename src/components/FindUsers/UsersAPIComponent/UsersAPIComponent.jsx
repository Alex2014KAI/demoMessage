import React from 'react';

import Users from './Users/Users';

import axios from 'axios'

import preloader from '../../../assets/images/preloader.svg'

import Preloader from './Preloader/Preloader';

import { userAPI } from "../../../api/api";


class UsersAPIComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);

        // this.props.toggleIsFetching(true);
        // userAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //     });
    
    }

    componentWillUnmount() {
        // alert("удалилась компонента FindUsers")
    }

    onPageChenged = (number) => {

        this.props.setCurrentPage(number);
        this.props.getUsers(number, this.props.pageSize);


        // this.props.setCurrentPage(number);
        // this.props.toggleIsFetching(true);
        // userAPI.getUsers(number, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //     });

    }

    addUsers = () => {

        this.props.addUsers(this.props.currentPage + 1, this.props.pageSize);

        // this.props.addCurrentPage();
        // this.props.toggleIsNextFetching(true);
        // userAPI.getUsers(this.props.currentPage + 1, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsNextFetching(false);
        //         this.props.addSetUsers(data.items);
        //     });

    }


    render() {

        return <>
            {
                this.props.isFetching ?
                    <Preloader /> :
                    null
            }
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChenged={this.onPageChenged}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                addUsers={this.addUsers}
                isNextFetching={this.props.isNextFetching}
                toggleWolliwingProgress = {this.props.toggleWolliwingProgress}
                followingInProgress = {this.props.followingInProgress}
            />
        </>
    }
}



export default UsersAPIComponent;

