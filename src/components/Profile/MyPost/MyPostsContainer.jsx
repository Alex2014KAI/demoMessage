import React from 'react';
import MyPost from './MyPost';
import StoreContext from '../../../storeContext'
import { connect } from 'react-redux'


import {
    addPostActionCreator, updateNewPostTextActionCreator,
    increaseLikeActonCreator
} from '../../../redux/profileReducer'

// const MyPostContainer = (props) => {

//     const addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     };

//     const onPostChange = (text) => {
//         props.store.dispatch(updateNewPostTextActionCreator(text));
//     }

//     const addOnClickLike = (id) => {
//         props.store.dispatch(increaseLikeActonCreator(id));
//     };

//     return (<div>
//         <MyPost updateNewPostText={onPostChange} addPost={addPost}

//             posts={props.store.getState().profilePage.messagesDataProfile}
//             newPostsText={props.store.getState().profilePage.newPostsText}

//             addOnClickLike={addOnClickLike} />
//     </div>
//     );
// };


const mapStoreToProps = (state)=>{
    return {
        posts: state.profilePage.messagesDataProfile,
        newPostText: state.profilePage.newPostText,
    };
};

const mapDispatchToProps = (dispatch)=>{
    return {
        addPost: (newMyPost)=>{
            dispatch(addPostActionCreator(newMyPost));
        },
        addOnClickLike: (id)=>{
            dispatch(increaseLikeActonCreator(id));
        },

    }
}

const MyPostContainer = connect(mapStoreToProps, mapDispatchToProps)(MyPost);


export default MyPostContainer;




