import axios from 'axios';
import classesNews from './News.module.css';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { compose } from 'redux';
import Clock from "./Time/Time"



const News = (props)=>{
   
    return (
        <div>
           <h1>Time:</h1>
           <h2 className={classesNews.time}>
            <Clock/>
            </h2> 
        </div>
    );
}


// let AuthRedirectComponentNews = WithAuthRedirect(News);
// export default AuthRedirectComponentNews;


export default compose(WithAuthRedirect)(News); 