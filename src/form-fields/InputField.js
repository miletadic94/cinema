import React from 'react'

const InputField = ({
    input,
    placeholder,
    type,
    meta: { touched, error, warning }
  }) => {
    return (
      <div className="mb-15">
        <input className="form-control" {...input} placeholder={placeholder} type={type} />
        {touched && ((error && <div className="valid valid-danger"> {error} </div>) || (warning && <span> {warning} </span>))}
      </div>
    )
  }

  export default InputField

//   <div className="alert alert-danger" role="alert">
//   <strong>Oh snap!</strong> Change a few things up and try submitting again.
// </div>