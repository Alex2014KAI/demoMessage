import classesAvaFriend from './avaFrend.module.css'
import avaDefaultUser from "../../../assets/images/images.png"
import { NavLink } from 'react-router-dom';

const avaFriend = (props) => {

    return (
        <div className={classesAvaFriend.content}>
            <NavLink to={'/profile/' + props.data.id}>
                <img className={classesAvaFriend.img} src={props.data.photos.small !== null ?
                    props.data.photos.small :
                    avaDefaultUser}
                    alt="avatar" />
            </NavLink>
            <div className={classesAvaFriend.name}> {props.data.name} </div>
        </div>
    )
};

export default avaFriend;



