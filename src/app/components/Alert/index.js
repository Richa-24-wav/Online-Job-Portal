import { useState, useEffect } from "react";

import "./style.css";

const Alert = (props) => {
  const {
    extraClasses,
    handleClick,
    children,
    variant,
    showAlert,
    ...restProps
  } = props;
  const [alertDisplay, setAlertDisplay] = useState(showAlert);

  const handleOnClick = () => {
    setAlertDisplay(false);
    if (handleClick) {
      handleClick();
    }
  };

  useEffect(()=>{
    setAlertDisplay(showAlert);
  }, [showAlert])

  return (
    <div
      onClick={handleOnClick}
      className={`alert ${variant ? variant : ""} ${
        alertDisplay ? "show" : ""
      }`}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Alert;
