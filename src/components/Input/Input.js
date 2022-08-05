import './Input.sass';

const Input = ({
  label = '',
  field,
  form: { touched, errors },
  ...props
}) => (
  <div className={errors[field.name] ? 'input-wrapper input-wrapper-error' : 'input-wrapper'}>
    <label className="input-label">{label}</label>
    <input className="input-element" type="text" {...field} {...props} />
    {touched[field.name]
      && errors[field.name]
        && <div className="input-invalid-feedback">{errors[field.name]}</div>}
  </div>
);

Input.Simple = ({ label = '', ...props }) => (
  <div className='input-wrapper'>
    <label className="input-label">{label}</label>
    <input className="input-element" type="text" {...props} />
  </div>
)

export default Input;

