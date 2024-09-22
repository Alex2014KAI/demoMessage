import classesMyFriends from './myFriends.module.css'
import AvaFriend from './avaFrends/avaFrend';
import { useEffect } from 'react';
import Preloader from "../../components/FindUsers/UsersAPIComponent/Preloader/Preloader"

const MyFriends = (props) => {

    useEffect(() => {
        props.FirstGetFriendUsers();
    }, []);

    const addUsers = ()=>{
        // props.toggleIsNextFetching(true);
        // setTimeout(()=>{
        //     props.toggleIsNextFetching(false);
        // }, 2000);
        props.addMyFrendsUsers(props.pageSize);
    }

    const myFriends = props.friends.map(val => <AvaFriend data={val} key={val.id} />);
    return (<div>
        <div className={classesMyFriends.wrapper}>
            {myFriends}
        </div>

        <div className={classesMyFriends.futer}>
            {props.isNextFetching ?
                <Preloader /> :
                <button className={classesMyFriends.futer__btn}
                onClick={addUsers}
                // onClick={props.addUsers}
            >
                Загрузить еще друзей
            </button>
                }
            {/* <button className={classesMyFriends.futer__btn}
                // onClick={props.addUsers}
            >
                Загрузить еще друзей
            </button> */}
        </div>
    </div>

    )
}

export default MyFriends;
