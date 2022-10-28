import "./style.css";

const FormLayout = ({ children, vector }) => (
  <div className="container layout">
    {vector && <div className="form-vector">{vector}</div>}
    {children}
  </div>
);

export default FormLayout;
