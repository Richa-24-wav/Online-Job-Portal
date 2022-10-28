import JobIcon from "../../../assets/images/suitcase.png";
import Button from "../Button";
import Tags from "../Tags";

import "./style.css";

const JobDescriptionCard = (props) => {
    const { jobData, handleProposalSubmit } = props;
    if(!jobData) return <></>;

    const { jobTitle, jobDescription, skillsRequired, jobPackage, eligibilityCriteria } = jobData;

    return (
        <div className="jobDescriptionCard-container">
            <div className="jobDescriptionCard-header">
                <div className="jobDescriptionCard-image">
                    <img src={JobIcon} alt="Sample logo" width="60px" height="60px" />
                </div>
                <div className="jobDescriptionCard-content">
                    <h2 className="jobDescriptionCard-heading">{jobTitle}</h2>
                </div>
            </div>
            <div className="jobDescriptionCard-detail">
                <p className="jobDescriptionCard-detailContent">{jobDescription}</p>
            </div>
            <div className="jobDescriptionCard-detail">
                <h3 className="jobDescriptionCard-detailHeading">Skills and Expertise</h3>
                <Tags items={skillsRequired.split(",")} />
            </div>
            <div className="jobDescriptionCard-detail">
                <h3 className="jobDescriptionCard-detailHeading">Package</h3>
                <p className="jobDescriptionCard-detailContent">
                    {jobPackage}
                </p>
            </div>
            <div className="jobDescriptionCard-detail">
                <h3 className="jobDescriptionCard-detailHeading">Eligibilty Criteria</h3>
                <p className="jobDescriptionCard-detailContent">
                    {eligibilityCriteria}
                </p>
            </div>
            <div className="jobDescriptionCard-footer">
                <Button>Share</Button>
                <Button onClick={handleProposalSubmit}>Submit a Proposal</Button>
            </div>
        </div>
    );
}

export default JobDescriptionCard;