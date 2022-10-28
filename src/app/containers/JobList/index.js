import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Alert from "../../components/Alert";
import JobCard from "../../components/JobCard";
import JobDescriptionCard from "../../components/JobDescriptionCard";

import jobSearchImage from "../../../assets/images/job-search.png";
import { LOCAL_STORAGE_KEYS, USER_TYPE } from "../../constants/commonConstants";
import "./style.css";

const JobList = ({skillsFilter}) => {
  const FILTERS = {
    ALL: "all",
    APPLIED_JOBS: "appliedJobs",
    POSTED_JOBS: "postedJobs",
  };
  const [selectedCard, setSelectedCard] = useState();
  const [jobsData, setJobsData] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.JOBS))
  );
  const [appliedJobsExist, setAppliedJobsExist] = useState(false);
  const [postedJobsExist, setPostedJobsExist] = useState(false);
  const [showAlert, setAlertDisplay] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(FILTERS.ALL);
  const user = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEYS.AUTHENTICATED_USER)
  );
  let userType = 1;
  if (user) {
    userType = user.userType;
  }

  const getAllJobs = () =>
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.JOBS)) || [];

  const getPostedJobs = () => {
    let postedJobs =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.POSTED_JOBS)) || {};

    if (postedJobs && user && postedJobs[user.id]) {
      postedJobs = postedJobs[user.id];
      setPostedJobsExist(true);
    } else {
      postedJobs = [];
      setPostedJobsExist(false);
    }

    return postedJobs;
  };

  const getAppliedJobs = () => {
    let appliedJobs =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.APPLIED_JOBS)) || {};

    if (appliedJobs && user && appliedJobs[user.id]) {
      appliedJobs = appliedJobs[user.id];
      setAppliedJobsExist(true);
    } else {
      appliedJobs = [];
      setAppliedJobsExist(false);
    }
    return appliedJobs;
  };

  const handleProposalSubmit = () => {
    setAlertDisplay(true);

    const currentUser = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEYS.AUTHENTICATED_USER)
    );
    const selectedJob = jobsData[selectedCard];
    let currentAppliedJobs = [];
    const currentAppliedJobsObject =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.APPLIED_JOBS)) || {};

    if (currentAppliedJobsObject[currentUser.id]) {
      currentAppliedJobs = currentAppliedJobsObject[currentUser.id];
    }

    currentAppliedJobs.unshift(selectedJob);
    currentAppliedJobsObject[currentUser.id] = currentAppliedJobs;
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.APPLIED_JOBS,
      JSON.stringify(currentAppliedJobsObject)
    );
  };

  const setJobsList = (appliedJobs, postedJobs) => {
    switch (selectedFilter) {
      case FILTERS.APPLIED_JOBS:
        setJobsData(appliedJobs);
        break;

      case FILTERS.POSTED_JOBS:
        setJobsData(postedJobs);
        break;

      default:
        const allJobs = getAllJobs();
        setJobsData(allJobs);
    }
  };

  useEffect(() => {
    const appliedJobs = getAppliedJobs();
    const postedJobs = getPostedJobs();
    setJobsList(appliedJobs, postedJobs);
    setSelectedCard({});
  }, [selectedFilter]);

  useEffect(() => {
    let jobs;
    switch (selectedFilter) {
      case FILTERS.APPLIED_JOBS:
        jobs = getAppliedJobs();;
        break;

      case FILTERS.POSTED_JOBS:
        jobs = getPostedJobs();
        break;

      default:
        jobs = getAllJobs();
    }
  
    if (skillsFilter.length) {
      const skills = skillsFilter;
        const filteredJobsData = jobs.filter((job) => {
          const jobSkills = job.skillsRequired.split(",");
          return jobSkills.some((skill) => skills.includes(skill));
        });
        setJobsData(filteredJobsData);
    } else {
      setJobsData(jobs);
    }
  }, [skillsFilter]);

  return (
    <div className="jobList-container">
      <Alert
        onClick={() => {
          setAlertDisplay(false);
        }}
        showAlert={showAlert}
      >
        Proposal was submitted successfully.
      </Alert>
      <div className="jobList">
        {(appliedJobsExist || postedJobsExist) && (
          <div className="jobList-filter">
            <Button
              extraClasses="jobList-filter-button"
              onClick={() => setSelectedFilter(FILTERS.ALL)}
              variant={selectedFilter === FILTERS.ALL ? "" : "grey"}
            >
              All
            </Button>
            {appliedJobsExist && (
              <Button
                extraClasses="jobList-filter-button"
                onClick={() => setSelectedFilter(FILTERS.APPLIED_JOBS)}
                variant={selectedFilter === FILTERS.APPLIED_JOBS ? "" : "grey"}
              >
                Applied Jobs
              </Button>
            )}
            {userType === USER_TYPE.EMPLOYER && postedJobsExist && (
              <Button
                extraClasses="jobList-filter-button"
                onClick={() => setSelectedFilter(FILTERS.POSTED_JOBS)}
                variant={selectedFilter === FILTERS.POSTED_JOBS ? "" : "grey"}
              >
                Posted Jobs
              </Button>
            )}
          </div>
        )}
        {Boolean(jobsData.length) &&
          jobsData.map((jobData, index) => (
            <JobCard
              key={index}
              title={jobData.jobTitle}
              onClick={() => setSelectedCard(index)}
              description={jobData.jobDescription}
              skills={jobData.skillsRequired}
            />
          ))}
      </div>
      <div className="jobList-desciptionCardContainer">
        {jobsData[selectedCard] ? (
          <JobDescriptionCard
            jobData={jobsData[selectedCard]}
            handleProposalSubmit={handleProposalSubmit}
          />
        ) : (
          <div className="jobList-null-state">
            <div className="jobList-image-wrapper">
              <img
                alt="null state"
                className="jobList-image"
                src={jobSearchImage}
              ></img>
            </div>
            <div className="jobList-null-state-note">
              <h3 className="jobList-null-state-note-heading">
                Select a Job to preview its information here
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;
