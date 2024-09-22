import classesPost from './NewPosts.module.css';

const NewPosts = (props) => {

    const addOnClickLike = ()=>{       
        props.addOnClickLike(props.id);
    };

    return (
    <div className={classesPost.postWrapper}>
        <div className={classesPost.Post}> {props.massage} </div>
        <div className={classesPost.imageLike}> <img className = {classesPost.imageLike__img} src="../../../images/heart-icon.svg" alt="like" 
        onClick={addOnClickLike}/></div>
        <div className={classesPost.cauntLike}>{props.like}</div>
    </div>
    );
};

export default NewPosts;