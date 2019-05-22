import React from "react"

const renderForm = ({ fields, onChangeCallback }) => {

  return (
    <React.Fragment>
      {fields &&
        Array.from(fields).map((f, i) => (
          <div key={f.id || i}>
            <input
              name={f.name}
              type={f.type}
              placeholder={f.placeholder}
              required={f.required}
              onChange={onChangeCallback}
              validations={f.regex}
            />
          </div>
        ))}
    </React.Fragment>
  )
}

export default renderForm
