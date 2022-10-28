import "./style.css";

const Input = (props) => {
  const { textarea, placeholder, ...restProps } = props;

  return textarea ? (
    <textarea
      className="input textarea"
      placeholder={placeholder}
      {...restProps}
    ></textarea>
  ) : (
    <input
      className="input"
      type="text"
      placeholder={placeholder}
      {...restProps}
    />
  );
};

export default Input;
