import Chapter from "../../components/Chapter";
import "./index.css";
import url1 from "./../../assets/chapter1.png";
import url2 from "./../../assets/chapter2.png";
import url3 from "./../../assets/chapter3.png";
import url4 from "./../../assets/chapter4.png";
import Footer from "../../layouts/Footer";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="pageheader">About Us</div>
      <div className="subheading">Allow us to tell us a short story...</div>
      <div className="chapterlist">
        <Chapter chapterName="Chapter I" url={url1} key={1} />
        <Chapter chapterName="Chapter II" url={url2} key={2} />
      </div>

      <div className="chapterlist">
        <Chapter chapterName="Chapter III" url={url3} key={3} />
        <Chapter chapterName="Chapter IV" url={url4} key={4} />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
