import { useState } from "react";
import Button from "../../components/Button";
import "./style.css";
import Alert from "../../components/Alert";
import InputGroup from "../../components/InputGroup";
import { LOCAL_STORAGE_KEYS } from "../../constants/commonConstants";

const HireForm = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setAlertDisplay] = useState(false);
  const inputInitialValues = {
    jobTitle: "",
    jobDescription: "",
    skillsRequired: "",
    jobPackage: "",
    eligibilityCriteria: "",
  };

  const [values, setValues] = useState(inputInitialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value.trim(),
    });
  };

  const handleAlertClick = () => {
    setAlertDisplay(false);
  };

  const handleSubmit = () => {
    const currentJobsArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.JOBS)) || [];
    const newJob = values;
    newJob.jobId = currentJobsArray.length;
    currentJobsArray.unshift(newJob);
    localStorage.setItem(LOCAL_STORAGE_KEYS.JOBS, JSON.stringify(currentJobsArray));

    const currentUser = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEYS.AUTHENTICATED_USER)
    );

    let currentPostedJobs = [];
    const currentPostedJobsObject =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.POSTED_JOBS)) || {};

    if (currentPostedJobsObject[currentUser.id]) {
      currentPostedJobs = currentPostedJobsObject[currentUser.id];
    }

    currentPostedJobs.unshift(newJob);
    currentPostedJobsObject[currentUser.id] = currentPostedJobs;
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.POSTED_JOBS,
      JSON.stringify(currentPostedJobsObject)
    );

    setAlertMessage("Job was published succesfully");
    setAlertDisplay(true);
  };

  return (
    <form className="hireForm">
      <Alert onClick={handleAlertClick} showAlert={showAlert}>
        {alertMessage}
      </Alert>
      <div className="hireForm-container">
        <div className="hireForm-block">
          <h1 className="hireForm-heading">Your are hiring for</h1>
          <p className="hireForm-subheading">
            Enter details about job you are offering
          </p>
        </div>
        <InputGroup
          label="Job Title"
          onChange={handleInputChange}
          name="jobTitle"
          value={values.jobTitle}
        />
        <InputGroup
          label="Job Description"
          onChange={handleInputChange}
          name="jobDescription"
          value={values.jobDescription}
          inputProps={{
            textarea: true,
          }}
        />
      </div>
      <div className="hireForm-container">
        <div className="hireForm-block">
          <h1 className="hireForm-heading">Tell us a bit more</h1>
          <p className="hireForm-subheading">
            if there's any particular skill required or if you want to mention
            something else
          </p>
        </div>
        <InputGroup
          label="Skills Required"
          onChange={handleInputChange}
          name="skillsRequired"
          value={values.skillsRequired}
        />
        <InputGroup
          label="CTC"
          onChange={handleInputChange}
          name="jobPackage"
          value={values.jobPackage}
        />
        <InputGroup
          label="Eligibility Criteria"
          onChange={handleInputChange}
          name="eligibilityCriteria"
          value={values.eligibilityCriteria}
          inputProps={{ textarea: true }}
        />
      </div>
      <Button handleClick={handleSubmit} type="button">
        Publish Job
      </Button>
    </form>
  );
};

export default HireForm;
