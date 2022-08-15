import './Views.sass';

const Views = ({ count }) => (
  <div className="views">
    <img className="views__icon" src="/images/eye.svg" alt="views" />
    <span className="views__text">
      {count}
    </span>
  </div>
);

export default Views;
