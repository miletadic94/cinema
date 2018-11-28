import React from 'react'
import DateTimePicker from 'react-datetime'

export const inputField = ({
  input,
  label,
  icon,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => {
  return (
    <div className="form-group has-danger">
      <label className="pl-2">
        {label}
        {icon ?
          <i className={`${icon} ml-2`} aria-hidden="true" />
          : null
        }
      </label>
      <input className={`form-control ${error ? 'is-invalid' : ''}`} {...input} placeholder={placeholder} type={type} />
      {touched && ((error && <div className="d-block invalid-feedback"> {error} </div>) || (warning && <span> {warning} </span>))}
    </div>
  )
}

export const textAreaField = ({
  input,
  label,
  placeholder,
  meta: { touched, error, warning }
}) => {
  return (
    <div>
      <label className="pl-2">{label}</label>
      <textarea className={`form-control ${error ? 'is-invalid' : ''}`} {...input} placeholder={placeholder} />
      {touched && ((error && <div className="d-block invalid-feedback"> {error} </div>) || (warning && <span> {warning} </span>))}
    </div>
  )
}

export const dropdownField = ({
  input,
  options,
  label,
  meta: { touched, error, warning }
}) => {
  const renderSelectOptions = (id, index) => {
    return (
      <option
        key={`${index}-${id}`}
        value={id}
      >
        {options[id].name}
      </option>
    );
  }

  if (options) {
    return (
      <div>
        <label className="pl-2">{label}</label>
        <select {...input} className={`form-control ${error ? 'is-invalid' : ''}`}>
          <option value="">Select</option>
          {Object.keys(options).map(renderSelectOptions)}
        </select>
        {touched && ((error && <div className="d-block invalid-feedback"> {error} </div>) || (warning && <span> {warning} </span>))}
      </div>
    )
  }
  return <div></div>
}

export const multipleDropdownField = ({
  input,
  options,
  label,
  meta: { touched, error, warning }
}) => {
  const renderSelectOptions = (id, index) => {
    return (
      <option
        key={`${index}-${id}`}
        value={id}
      >
        {options[id].name}
      </option>
    );
  }

  if (options) {
    return (
      <div>
        <label className="pl-2">{label}</label>
        <select multiple {...input} className={`form-control ${error ? 'is-invalid' : ''}`}>
          <option value="" disabled={true}>Select</option>
          {Object.keys(options).map(renderSelectOptions)}
        </select>
        {touched && ((error && <div className="d-block invalid-feedback"> {error} </div>) || (warning && <span> {warning} </span>))}
      </div>
    )
  }
  return <div></div>
}

export const checkboxField = ({
  input,
  label,
  id,
  meta: { touched, error, warning }
}) => {
  return (
    <div className="col-auto my-1">
    <div className="custom-control custom-checkbox mr-sm-2">
    <input {...input} type="checkbox" id={id} className={`custom-control-input ${error ? 'is-invalid' : ''}`} />
      <label className="custom-control-label" htmlFor={id}>{label}</label>
      {touched && ((error && <div className="d-block invalid-feedback"> {error} </div>) || (warning && <span> {warning} </span>))}
    </div>
  </div>
 
  )
}

export const datePicker = ({
  input,
  label,
  placeholder,
  meta: { touched, error, warning }
}) => {
  return (
    <div>
      <label className="pl-2">{label}</label>
      <DateTimePicker
        {...input}
        timeFormat={false}
        placeholder={placeholder} />
      {touched && ((error && <div className="d-block invalid-feedback"> {error} </div>) || (warning && <span> {warning} </span>))}
    </div>
  )
}