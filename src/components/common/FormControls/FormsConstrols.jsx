import React from "react";
import classesFormControls from './FormsControls.module.css';
import { Field } from "redux-form";

// const FormControl = ({input, meta, child, ...props})=>{
//     const hasError = meta.touched && meta.error;
//     console.log(meta)
//     return (<div className= {classesFormControls.wrapper}>
//         <props.children/>
//        {hasError && <span className={classesFormControls.error}> {meta.error}</span>}
//     </div>)
// }

// export const Textarea = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     console.log(meta)
//     return (<div className= {classesFormControls.wrapper}>
//         <textarea {...input} {...props} 
//         className={hasError && classesFormControls.error}
//         />
//        {hasError && <span className={classesFormControls.error}> {meta.error}</span>}
//     </div>)
// }

// export const Input = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     console.log(meta)
//     return (<div className= {classesFormControls.wrapper}>
//         <input {...input} {...props} 
//         className={hasError && classesFormControls.error}
//         />
//        {hasError && <span className={classesFormControls.error}> {meta.error}</span>}
//     </div>)
// }


const Element = Element => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={classesFormControls.wrapper}>
      <Element {...input} {...props}
        className={hasError ? classesFormControls.error : classesFormControls.inputForm} />
      {hasError && <span className={classesFormControls.error}> {meta.error} </span>}
    </div>
  );
};

export const Textarea = Element("textarea");
export const Input = Element("input");

export const createFild = (className = null, type = null, placeholder = "",
  component = null, name = null, validate = [], text = "") => {
  return (
    (<Field className={className}
      type={type}
      placeholder={placeholder}
      component={component}
      name={name}
      validate={validate} />)
  )
  }





