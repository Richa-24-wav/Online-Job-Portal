import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import { useLocation } from "react-router-dom";
import routes from "../../../config/route.config";

import "./style.css";
import ProfileDropdown from "../ProfileDropdown";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-logoWrap">
          <Link to="/" className="navbar-logo">
            <img src={Logo} alt="Site Name" />
          </Link>
        </div>
        <div className="navbar-menu-container">
          <ul className="navbar-menu">
            {routes.map(({ title, path, id }) => {
              return (
                title && (
                  <li 
                    key={id}
                    className={`navbar-menuItem ${
                      path === location.pathname ? "active" : ""
                    } `}
                  >
                    <Link to={path}>{title}</Link>
                  </li>
                )
              );
            })}
          </ul>
        </div>
        <div className="navbar-profile-container">
          <div className="navbar-profile">
            <ProfileDropdown/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
