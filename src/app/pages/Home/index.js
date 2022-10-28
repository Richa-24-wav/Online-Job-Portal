import { useState } from "react";

import Navbar from "../../containers/Navbar";
import JobList from "../../containers/JobList";
import ListLayout from "../../layouts/ListLayout";
// import SearchBar from "../../containers/SearchBar";
import SideBar from "../../containers/SideBar";

const HomePage = () =>  {
    const [skillsFilter, setSkillsFilter] = useState([]);
    return (
        <>  
            <Navbar/>
            <ListLayout sidebar={<SideBar sticky setSkillsFilter={setSkillsFilter}/>}>
                <JobList skillsFilter={skillsFilter}/>
            </ListLayout>
        </>
    );
}

export default HomePage;