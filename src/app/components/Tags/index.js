import { useEffect, useState } from "react";
import "./style.css";

const Tags = (props) => {
  const { items, clickable, onClick, initialSelectedValues } = props;
  let updatedList;
  const [selectedValues, setSelectedValues] = useState(initialSelectedValues || []);
  const handleClick = (val) => {
    if (selectedValues.includes(val)) {
      // unselect tag
      updatedList = selectedValues.filter((item) => item !== val);
    } else {
      // select tag
      updatedList = [...selectedValues, val];
    }

    setSelectedValues(updatedList);
    onClick(updatedList);
  };

  useEffect(() => {
    setSelectedValues(initialSelectedValues);
  }, [initialSelectedValues]);

  return (
    <div className="tagsContainer">
      <div className="tags">
        {items.map((item, index) => (
          <span
            onClick={clickable ? () => handleClick(item) : () => {}}
            key={index}
            className={`tagItem ${clickable ? "clickable" : " "} ${
              selectedValues.includes(item) ? "selected" : ""
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

Tags.defaultProps = {
  initialSelectedValues: [],
}

export default Tags;
