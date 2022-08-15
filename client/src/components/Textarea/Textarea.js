import './Textarea.sass';

const Textarea = ({ label, ...props }) => (
  <label className="textarea">
    { label && <span className="textarea-label">{label}</span>}
    <textarea className="textarea-element" {...props} />
  </label>
);

export default Textarea;
