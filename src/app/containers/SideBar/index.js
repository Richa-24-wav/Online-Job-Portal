import { useState } from "react";

import Button from "../../components/Button";
import Tags from "../../components/Tags";
import "./style.css";

const SideBar = ({ sticky, setSkillsFilter }) => {
  const [selecetedSkills, setSelectedSkills] = useState([]);

  const selectedSkillsClickHandler = (selecetedSkills) => {
    setSelectedSkills(selecetedSkills);
  };

  const setFilter = () => {
    if (selecetedSkills.length) {
      setSkillsFilter(selecetedSkills);
    } else {
      setSkillsFilter([]);
    }
  };

  const clearFilter = (e) => {
    e.preventDefault();
    setSelectedSkills([]);
    setSkillsFilter([]);
  };

  return (
    <div className={`sidebar-container ${sticky ? "sticky" : ""}`}>
      <div className="sidebar-block">
        <div className="sidebar-block-header">
          <h3 className="sidebar-block-heading">Skills</h3>
          {Boolean(selecetedSkills.length) && (
            <a className="sidebar-block-clear" onClick={clearFilter} href="#">
              Clear
            </a>
          )}
        </div>
        <Tags
          clickable
          onClick={selectedSkillsClickHandler}
          initialSelectedValues={selecetedSkills}
          items={["Figma UX designer", "UI/UX", "Game Design"]}
        />
      </div>
      <Button onClick={setFilter}>Filter</Button>
    </div>
  );
};

export default SideBar;
