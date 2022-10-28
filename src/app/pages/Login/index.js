import LoginForm from "../../containers/LoginForm";

import logo from "../../../assets/images/Large-logo.png"
import "./style.css";

const LoginPage = () => (
    <div className="layout login-wrapper">
        <div className="login-image-wrapper">
            <div className="login-image">
                <img src={logo} alt="login"></img>
            </div>
        </div>
        <div className="login-form-wrapper">
            <LoginForm />
        </div>  
    </div>
);

export default LoginPage;