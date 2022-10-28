import { useNavigate } from "react-router-dom";

import HireForm from "../../containers/HireForm";
import Navbar from "../../containers/Navbar";
import FormLayout from "../../layouts/FormLayout";
import vector from "../../../assets/images/job-vector.svg";
import logo from "../../../assets/images/logo.png";

import { LOCAL_STORAGE_KEYS, USER_TYPE } from "../../constants/commonConstants";

import "./style.css";
import Button from "../../components/Button";

const SvgVector = () => <img src={vector} className="hire-vector" alt="job vector" />;

const getUser = () =>
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.AUTHENTICATED_USER));

const isEmployer = () => {
    if(getUser()) {
        return getUser().userType === USER_TYPE.EMPLOYER;
    }
    return false;
}


const HirePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      {isEmployer() ? (
        <FormLayout vector={<SvgVector />}>
          <HireForm />
        </FormLayout>
      ) : (
        <div className="layout container hire">
          <div className="hire-vector-wrapper">
            <SvgVector />
          </div>
          <div className="hire-note-wrapper">
            <h2 className="hire-note-heading">Finding the best candidate</h2>
            <p className="hire-note-subheading">
              placeItUp helps you grow up your business by finding the best
              candidate for you out of the masses and let them explore their
              potential with you.
            </p>
            <Button
              onClick={() => {
                localStorage.removeItem(LOCAL_STORAGE_KEYS.IS_AUTHENTICATED);
                navigate("/login");
              }}
            >
              Sign in as Employer
            </Button>
          </div>
          <>
            <div className="hire-footer-image-wrapper">
              <img className="hire-footer-image" src={logo} alt="logo" />
            </div>
          </>
        </div>
      )}
    </>
  );
};

export default HirePage;
