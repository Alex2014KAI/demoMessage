import React from 'react';

import classesUser from './User.module.css'

import avaDefaultUser from '../../../../../assets/images/images.png';
import { NavLink } from 'react-router-dom';
import preloaderFollowing from '../../../../../assets/images/preloaderFollowing.gif';
import axios from 'axios';

import { userAPI } from "../../../../../api/api"

class User extends React.Component {

    statusFollowed = (followed) => {
        if (followed) {
            return "Отписаться"
        } else {
            return "Подписаться"
        }
    }

    follow = () => {

        this.props.follow(this.props.dataUsers.id);

        // this.props.toggleWolliwingProgress(true, this.props.dataUsers.id);
        // userAPI.follow(this.props.dataUsers.id)
        //     .then(data => {
        //         if (data.resultCode === 0) {
        //             this.props.follow(this.props.dataUsers.id);
        //         };
        //         this.props.toggleWolliwingProgress(false, this.props.dataUsers.id);
        //     })
    }


    unFollow = () => {

        this.props.unFollow(this.props.dataUsers.id);

        // this.props.toggleWolliwingProgress(true, this.props.dataUsers.id);
        // userAPI.unFollow(this.props.dataUsers.id)
        //     .then(data => {
        //         if (data.resultCode === 0) {
        //             this.props.unFollow(this.props.dataUsers.id);
        //         }
        //         console.log(this.props.followingInProgress);
        //         this.props.toggleWolliwingProgress(false, this.props.dataUsers.id);
        //     })
    }

    render() {
        return (<div>
            <div className={classesUser.cartUser}>
                <div className={classesUser.avatar}>
                    <NavLink to={'/profile/' + this.props.dataUsers.id}>
                        <img className={classesUser.img} src={this.props.dataUsers.photos.small !== null ?
                            this.props.dataUsers.photos.small :
                            avaDefaultUser}
                            alt="avatar" />
                    </NavLink>
                </div>
                <div className={classesUser.name}>

                    <div>
                        {this.props.dataUsers.name}
                    </div>
                    <div className={classesUser.on_of_Line}>
                        {/* {onOfLine(props.dataUsers.on_ofLine)} */}
                        online
                    </div>
                </div>
                <div className={classesUser.dataPerson}>
                    <div className={classesUser.dataPerson_dateOfSiteVisit}>
                        {/* Время последнего посещения сайта: {props.dataUsers.dateOfSiteVisit} */}
                        Время последнего посещения сайта:
                    </div>
                    <div className={classesUser.dataPerson_location}>
                        {/* Страна: {props.dataUsers.location.country}, */}
                        {/* Город: {props.dataUsers.location.city}, */}
                        Страна: ,
                        Город: .
                    </div>
                </div>
                <div className={classesUser.status}>
                    {this.props.dataUsers.status}
                </div>
                <div>
                    {
                    this.props.followingInProgress.some(id => id === this.props.dataUsers.id) ?
                        <img className={classesUser.preloaderFollowing} src={preloaderFollowing} alt="Загрузка" /> :
                        this.props.dataUsers.followed ?
                            <button className={classesUser.unFollowed} onClick={this.unFollow}>
                                {this.statusFollowed(this.props.dataUsers.followed)}
                            </button> :
                            <button className={classesUser.followed} onClick={this.follow}>
                                {this.statusFollowed(this.props.dataUsers.followed)}
                            </button>
                }
                </div>
            </div>

        </div>
        )
    }
}


export default User;