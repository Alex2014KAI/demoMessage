import React from 'react';
import classesMyPost from './MyPost.module.css';
import NewPosts from './NewPost/NewPost';
import classesPost from '../MyPost/NewPost/NewPosts.module.css';

import FormMyPostReduxContent from './NewPost/formMyPost/FormMyPost'


const MyPost = React.memo((props) => {

    const messagesDataElements = props.posts.map((val) => <NewPosts massage={val.text}
        like={val.like} key={val.id} id={val.id}
        addOnClickLike={props.addOnClickLike} />);

    console.log("COMPONENT <MyPost/>");

    return (<div>
        <div className={classesMyPost.content__myPost}>
            <h2> My post </h2>

            <FormMyPostReduxContent
                addPost={props.addPost} />

        </div>
        <div className={classesMyPost.content__otherPosts}>
            {messagesDataElements}
        </div>
    </div>
    );
});




class _MyPost extends React.PureComponent {

    // shouldComponentUpdate(nextProps, nextState){
  
    //     return nextProps !== this.props || nextState !== this.state
    // }

    

    render() {

        let messagesDataElements = this.props.posts.map((val) => {
            return (<div className={classesPost.postWrapper}>
                <div className={classesPost.Post}> {val.text} </div>
                <div className={classesPost.imageLike}> <img className={classesPost.imageLike__img} src="../../../images/heart-icon.svg" alt="like"
                    onClick={() => { this.props.addOnClickLike(val.id) }} /></div>
                <div className={classesPost.cauntLike}>{val.like}</div>
            </div>)
        });

        console.log("COMPONENT <MyPost/>");

        return (<div>
            <div className={classesMyPost.content__myPost}>
                <h2> My post </h2>

                <FormMyPostReduxContent addPost={this.props.addPost} />

            </div>
            <div className={classesMyPost.content__otherPosts}>
                {messagesDataElements}
            </div>
        </div>
        );
    }

};

export default MyPost;




// return (<div>
//     <div className={classesMyPost.content__myPost}>
//         <h2> My post </h2>
//         <textarea className={classesMyPost.input} placeholder='Напишите сообщение...' ref={newPostElement}
//             value={props.newPostText} onChange={onPostChange} />

//         <button className={classesMyPost.btn}
//             onClick={onAddPost} > Send </button>

//     </div>
//     <div className={classesMyPost.content__otherPosts}>

//         {messagesDataElements}

//     </div>

// </div>
// );