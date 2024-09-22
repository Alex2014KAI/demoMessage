import React from 'react';
import classesProfile from './Profile.module.css';

import MyPost from './MyPost/MyPost';

import MyPostContainer from './MyPost/MyPostsContainer';

import CartUser from './CartUser/CartUser';


const Profile = (props)=>{

    return (
        <div>
          
        <CartUser profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
        <MyPostContainer />

      </div>
    );
}

export default Profile;