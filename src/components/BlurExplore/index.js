import "./index.css";

const BlurExplore = ({ price, area, name }) => {
  return (
    <div className="blurexplore">
      <div className="exploreheading">{name}</div>
      <div className="detailcard dcard1">
        <div className="explorecardtext explorecardtextnormal">{price}</div>
      </div>
      <div className="detailcard dcard2">
        <div className="explorecardtext explorecardtextnormal">{area}</div>
      </div>
      <div className="detailcard dcard3">
        <div className="explorecardtext explorecardtextbook">Book!</div>
      </div>
    </div>
  );
};

export default BlurExplore;
