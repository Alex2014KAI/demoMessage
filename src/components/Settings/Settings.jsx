
import classesSettings from './Settings.module.css';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

const Settings = (props)=>{
    return (
        <div>
            Settings
        </div>
    );
};

// let AuthRedirectComponentSettings = WithAuthRedirect(Settings);
// export default AuthRedirectComponentSettings;

export default compose(WithAuthRedirect)(Settings)


