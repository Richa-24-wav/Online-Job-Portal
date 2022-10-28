import Input from "../../components/Input";
import Button from "../../components/Button";

import "./style.css";

const SearchBar = () => {
    const handleSubmit = () => {
        alert("clicked");
    };

    const handlekeyDown = event => {
        if(event.key === 'Enter') {
            event.preventDefault();
            handleSubmit();
        }
    }

    return (
        <div className="inputContainer">
            <Input placeholder="What are you looking for?" handleSubmit={handleSubmit} onKeyDown={handlekeyDown}/>
            <Button extraClasses="searchButton" handleClick={handleSubmit}>Search</Button>
        </div>
    );
};

export default SearchBar;