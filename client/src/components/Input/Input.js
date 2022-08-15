import React, { useRef } from 'react';

import './Input.sass';

export const FileInput = ({ id, placeholder, ...props }) => {
  const ref = useRef();

  return (
    <div className="file-input">
      <input
        id={id}
        type="file"
        name="file"
        accept="image/png, image/jpeg"
        hidden
        onChange={(e) => ref.current.textContent = e.target.files[0].name}
        {...props}
      />
      <label className="file-input-label" htmlFor={id}>Browse</label>
      <span className="file-input-span" ref={ref}>{placeholder}</span>
    </div>
  );
};

export const TextInput = ({ label, ...props }) => (
  <label className="input">
    {label && <span className="input-label">{label}</span>}
    <input className="input-element" type="text" {...props} />
  </label>
);

export const ValidateInput = ({
  label,
  field,
  form: { touched, errors },
  ...props
}) => (
  <div className={errors[field.name] ? 'input-wrapper input-wrapper-error' : 'input-wrapper'}>
    <label className="input">
      {label && <span className="input-label">{label}</span>}
      <input className="input-element" type="text" {...field} {...props} />
    </label>
    {touched[field.name]
      && errors[field.name]
      && <div className="input-invalid-feedback">{errors[field.name]}</div>}
  </div>
);

const Input = ({ type, ...props }) => {
  switch (type) {
    case 'file':
      return <FileInput {...props} />;
    case 'validate':
      return <ValidateInput {...props} />;
    default:
      return <TextInput {...props} />;
  }
};

export default Input;

