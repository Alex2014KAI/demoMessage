import classesMusic from './Music.module.css';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { compose } from 'redux';
import Development from "../Development/Development"

const Music = (props)=>{
    return (
        <div>
            <Development/>
        </div>
    );
}

// let AuthRedirectComponentMusic = WithAuthRedirect(Music);
// export default AuthRedirectComponentMusic;

export default compose(WithAuthRedirect)(Music);