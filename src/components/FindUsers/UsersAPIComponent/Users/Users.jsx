import React from "react";
import User from "./User/User";
import Preloader from "../Preloader/Preloader"
import classesUsers from './Users.module.css';
import Paginator from "../../../common/Paginator/Paginators";


const Users = ({totalUsersCount, pageSize, currentPage, onPageChenged,...props}) => {
    return (<div>
        <div className={classesUsers.header}>
            {/* Users */}
        </div>

        <span className={classesUsers.page}>
            <Paginator currentPage={currentPage} onPageChenged={onPageChenged}
            totalItemsCount={totalUsersCount} pageSize={pageSize} />
        </span>

        <div className={classesUsers.users}>
            {props.users.map(user => <User
                key={user.id}
                dataUsers={user}
                follow={props.follow}
                unFollow={props.unFollow}
                // toggleWolliwingProgress = {props.toggleWolliwingProgress} 
                followingInProgress={props.followingInProgress}
            />
            )}
        </div>

        <div className={classesUsers.futer}>
            {props.isNextFetching ?
                <Preloader /> :
                null}
            <button className={classesUsers.futer__btn}
                onClick={props.addUsers}
            >
                Загрузить еще пользователей
            </button>
        </div>
    </div>
    )
}

export default Users;