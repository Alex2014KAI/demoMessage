import classesMessage from './Message.module.css';

const MyDialog = (props) => {

    return (
        <div className={classesMessage.contacts}>
            <img className={classesMessage.img} src={props.img} alt="avatar" />
            <div className={classesMessage.contacts__name}>{props.name}</div>
            <div className={classesMessage.contacts__dialog}>
                <div className={classesMessage.text}>
                    {props.text}
                </div>
            </div>
        </div>
    );
};

export default MyDialog;