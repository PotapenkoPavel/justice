import './Container.sass';

const Container = ({ children, ...props }) => (
  <div className="container" {...props}>{children}</div>
);

export default Container;
