import "./index.css";
import url1 from "./../../assets/explore1.png";
import url2 from "./../../assets/explore2.png";
import ExploreCard from "../../components/ExploreCard";
import Footer from "../../layouts/Footer";

const Explore = () => {
  return (
    <div className="explore">
      <div className="pageheader">Explore</div>
      <div className="subheading">
        From one-guest rooms to penthouses with pools and gardens
      </div>
      <div className="explorelist">
        <ExploreCard
          key={2}
          url={url2}
          price="35$"
          area="28м²"
          name="Room with one king-size bed"
        />
        <ExploreCard
          key={1}
          url={url1}
          price="2039$"
          area="438м²"
          name="Penthouse for 8 person"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
