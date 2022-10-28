import { useState } from "react";
import { Link } from "react-router-dom";
import ProfilePhoto from "../../../assets/images/profile-photo.jpg";
import LoginIcon from "../../../assets/images/login.png";
import { useNavigate } from "react-router-dom";

import { LOCAL_STORAGE_KEYS } from "../../constants/commonConstants";
import "./style.css";

const ProfileDropdown = () => {
  const isAuthenticated = localStorage.getItem(LOCAL_STORAGE_KEYS.IS_AUTHENTICATED);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.IS_AUTHENTICATED);
    navigate("/login");
  };

  return isAuthenticated ? (
    <div
      className="profileAvatar"
      onClick={() => setShowDropdown((showDropdown) => !showDropdown)}
    >
      <img src={ProfilePhoto} alt="profile"/>
      <div
        className={`profile-dropdown ${showDropdown ? "d-block" : "d-none"}`}
      >
        <ul className="profile-dropdown-menu">
          {/* <li className="profile-dropdown-menuitem">Applications</li> */}
          {/* <li className="profile-dropdown-menuitem">Posted Jobs</li> */}
          <li className="profile-dropdown-menuitem" onClick={logout}>
            Logout
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <Link to="/login">
      <div className="profileAvatar login">
        <img src={LoginIcon} alt="login"/>
      </div>
    </Link>
  );
};

export default ProfileDropdown;
