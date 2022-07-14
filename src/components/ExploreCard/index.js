import BlurExplore from "../BlurExplore";
import "./index.css";

const ExploreCard = ({ url, price, area, name }) => {
  return (
    <div className="explorecard">
      <div className="exploreimage">
        <img src={url} alt={name} />
      </div>
      <BlurExplore price={price} area={area} name={name} />
    </div>
  );
};

export default ExploreCard;
