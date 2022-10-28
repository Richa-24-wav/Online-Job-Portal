import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputGroup from "../../components/InputGroup";
import Button from "../../components/Button";
import Alert from "../../components/Alert";

import { LOCAL_STORAGE_KEYS } from "../../constants/commonConstants";
import "./style.css";

const LoginForm = () => {
  const inputInitialValues = {
    userName: "",
    password: "",
  };

  const [values, setValues] = useState(inputInitialValues);
  const [showAlert, setAlertDisplay] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setAlertDisplay(false);
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlertDisplay(false);
    const username = values.userName.trim();
    const password = values.password.trim();
    if (!username || !password) {
      setAlertDisplay(true);
    } else {
      const users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.USERS));
      const requestedUser = users.find((user) => {
        return user.username === username;
      });
      if (requestedUser && requestedUser.password === password) {
        localStorage.setItem(LOCAL_STORAGE_KEYS.IS_AUTHENTICATED, true);
        localStorage.setItem(
          LOCAL_STORAGE_KEYS.AUTHENTICATED_USER,
          JSON.stringify(requestedUser)
        );
        navigate("/");
      } else {
        setAlertDisplay(true);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Alert
        onClick={() => setAlertDisplay((showAlert) => !showAlert)}
        showAlert={showAlert}
      >
        Please check your credentials.
      </Alert>
      <div className="mb-32">
        <h1 className="login-form-heading">Welcome back.</h1>
        <p className="login-form-subheading">Please enter your details.</p>
      </div>
      <InputGroup
        label="Username"
        onChange={handleInputChange}
        name="userName"
        value={values.userName}
      />
      <InputGroup
        label="Password"
        onChange={handleInputChange}
        name="password"
        value={values.password}
        inputProps={{ type: "password" }}
      />
      <input type="submit" hidden />
      <Button
        extraClasses="login-button"
        handleClick={handleSubmit}
        type="button"
      >
        Sign in
      </Button>
    </form>
  );
};

export default LoginForm;
