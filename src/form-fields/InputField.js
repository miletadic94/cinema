import React from 'react'

const InputField = ({
    input,
    placeholder,
    type,
    meta: { touched, error, warning }
  }) => {
    return (
      <div className="rdt">
        <input className="form-control" {...input} placeholder={placeholder} type={type} />
        {touched && ((error && <span className="alert alert-warning"> {error} </span>) || (warning && <span> {warning} </span>))}
      </div>
    )
  }

  export default InputField