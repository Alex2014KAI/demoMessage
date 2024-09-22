import classesMessage from './Message.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props)=>{

    const setActiveLink = ({isActive})=>{
         
        if (isActive){
            return classesMessage.activeLinkClassNameDialog;
        }else{
           return classesMessage.defaultLinkClassNameDialog;
        }
    };

    const path = `/message/${props.id}`;

    return (
        <div>
            <NavLink className= {setActiveLink} to={path}> {props.name}</NavLink>
        </div>
    );
}

export default DialogItem;