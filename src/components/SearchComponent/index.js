import SearchButton from "../SearchButton";
import SerachOption from "../SearchOption";
import "./index.css";

const SearchComponent = () => {
  return (
    <div className="searchcomponent">
      <SerachOption
        key="0"
        headingName="City"
        placeholderText="Select your city"
      />
      <SerachOption
        key="1"
        headingName="Dates"
        placeholderText="Select your dates"
      />
      <SerachOption
        key="2"
        headingName="Guests"
        placeholderText="Select your guests"
      />
      <SearchButton />
    </div>
  );
};

export default SearchComponent;
