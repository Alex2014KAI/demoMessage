import React from "react";
import classesProfileStatusc from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

    // statusInputRef = React.createRef();
constructor(props){
    super(props);
    this.props = props;
}
    state = {
        editMode: false,
        status: this.props.status,
    }

    

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode =()=> {
        this.setState({
            editMode: false,
        });

        this.props.updateStatus(this.state.status);
    }

    onStausChange = (event)=>{
        this.setState({status : event.currentTarget.value});
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.status !== prevProps.status){
            this.setState({
                status: this.props.status,
            })
        }
    }


    render() {
        return (<div>
            {!this.state.editMode &&
                <div>
                    <span className={classesProfileStatusc.spanStatus} onDoubleClick={this.activateEditMode}>
                        {this.props.status || "--------"}
                    </span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input type="text" className={classesProfileStatusc.inputStatus}
                        autoFocus={true}
                        value={this.state.status}
                        // ref = {this.statusInputRef}
                        onChange={this.onStausChange}
                        onBlur={this.deactivateEditMode} />
                </div>
            }

        </div>)
    };
}


export default ProfileStatus;



// let ProfileStatus = (props) => {
//     return (<div>
//         <div>
//             <span className={classesProfileStatusc.spanStatus}>{props.status}</span>
//         </div>
//         <div>
//             <input type="text" className={classesProfileStatusc.inputStatus} value={props.status}>
//             </input>
//         </div>

//     </div>)
// };