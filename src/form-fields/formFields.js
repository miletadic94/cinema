import React from 'react'
import DateTimePicker from 'react-datetime'

export const inputField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => {
  return (
    <div className="mb-15">
      <label className="pl-2">{label}</label>
      <input className="form-control" {...input} placeholder={placeholder} type={type} />
      {touched && ((error && <div className="valid valid-danger"> {error} </div>) || (warning && <span> {warning} </span>))}
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
    <div className="mb-15">
      <label className="pl-2">{label}</label>
      <textarea className="form-control" {...input} placeholder={placeholder} />
      {touched && ((error && <div className="valid valid-danger"> {error} </div>) || (warning && <span> {warning} </span>))}
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
      <div className="mb-15">
        <label className="pl-2">{label}</label>
        <select {...input} className="form-control">
          <option value="">Select</option>
          {Object.keys(options).map(renderSelectOptions)}
        </select>
        {touched && ((error && <div className="valid valid-danger"> {error} </div>) || (warning && <span> {warning} </span>))}
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
      <div className="mb-15">
        <label className="pl-2">{label}</label>
        <select multiple {...input} className="form-control">
          <option value="" disabled={true}>Select</option>
          {Object.keys(options).map(renderSelectOptions)}
        </select>
        {touched && ((error && <div className="valid valid-danger"> {error} </div>) || (warning && <span> {warning} </span>))}
      </div>
    )
  }
  return <div></div>
}

export const datePicker = ({
  input,
  label,
  placeholder,
  meta: { touched, error, warning }
}) => {
  return (
    <div className="mb-15">
      <label className="pl-2">{label}</label>
      <DateTimePicker
        {...input}
        timeFormat={false}
        placeholder={placeholder} />
      {touched && ((error && <div className="valid valid-danger"> {error} </div>) || (warning && <span> {warning} </span>))}
    </div>
  )
}