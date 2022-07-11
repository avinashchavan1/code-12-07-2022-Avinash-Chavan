import "./index.css";

const SerachOption = ({ headingName, placeholderText }) => {
  return (
    <div className="searchoption">
      <div className="searchheading">{headingName}</div>
      <div className="searchplaceholder">{placeholderText}</div>
    </div>
  );
};

export default SerachOption;
