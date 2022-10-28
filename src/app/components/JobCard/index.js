import JobIcon from "../../../assets/images/suitcase.png";
import Tags from "../Tags";

import "./style.css";

const JobCard = (props) => {
    const { title, description, skills, onClick, ...restProps } = props;

    return (
        <div className="jobCard-container" {...restProps}>
            <a className="jobCard-click-overlay" onClick={onClick} aria-hidden="true"> </a>
            <div className="jobCard-header">
                <div className="jobCard-image">
                    <img src={JobIcon} alt="Sample logo" width="60px" height="60px" />
                </div>
                <div className="jobCard-content">
                    <h2 className="jobCard-heading">
                        {title}
                    </h2>
                    <p className="jobCard-desc">
                        {description}
                    </p>
                </div>
            </div>
            <div className="jobCard-tagsContainer">
                <Tags items={skills.split(",")}/>
            </div>
        </div>
    );
}

export default JobCard;