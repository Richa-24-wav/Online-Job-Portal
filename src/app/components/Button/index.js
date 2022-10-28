import "./style.css";

const Button = (props) => {
  const { extraClasses, handleClick, children, variant, ...restProps } = props;

  return (
    <button
      className={`button ${extraClasses ? extraClasses : ""} ${
        variant ? variant : ""
      }`}
      onClick={handleClick}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
