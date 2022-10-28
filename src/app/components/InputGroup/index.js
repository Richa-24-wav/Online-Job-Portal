import Input from "../../components/Input";
import "./style.css";

const InputGroup = (props) => {
  const { label, name, onChange, value, inputProps, ...restProps } = props;

  return (
    <div className="input-group" {...restProps}>
      <label className="input-label">{label}</label>
      <Input onChange={onChange} name={name} {...inputProps} />
    </div>
  );
};

export default InputGroup;
