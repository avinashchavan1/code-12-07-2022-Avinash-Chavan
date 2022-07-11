import "./index.css";
import CenterText from "../../components/CenterText";
import SubText from "../../components/SubText";
import SearchComponent from "../../components/SearchComponent";
import NavBar from "../../components/NavBar";

const HomePage = () => {
  return (
    <div id="container">
      <NavBar />
      <CenterText />
      <SubText />
      <SearchComponent />
    </div>
  );
};

export default HomePage;
