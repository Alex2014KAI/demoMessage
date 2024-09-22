import React, { useEffect, useState } from "react";
import classesProfileStatusc from './ProfileStatus.module.css';


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status);
    }, [props.status]); 

    const activateEditMode = () => {
        // alert(editMode);
        setEditMode(true);
    }

    const onStausChange = (event) => {
        setStatus(event.currentTarget.value);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }



    return (
        <div>
            {!editMode &&
                <div>
                    <span className={classesProfileStatusc.spanStatus} 
                    onDoubleClick={activateEditMode}>
                        {props.status || "--------"}
                    </span>
                </div>
            }
            {editMode &&
                <div>
                    <input type="text" className={classesProfileStatusc.inputStatus}
                        autoFocus={true}
                        value={status}
                        // ref = {statusInputRef}
                        onChange={onStausChange}
                        onBlur={deactivateEditMode} />
                </div>
            }

        </div>
    )
}


export default ProfileStatusWithHooks;