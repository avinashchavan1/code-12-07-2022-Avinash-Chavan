import BlurChapter from "../BlurChapter";
import "./index.css";
const Chapter = ({ chapterName, url }) => {
  return (
    <div className="chapter">
      <div className="chapterimage">
        <img style={{ borderRadius: "15px" }} src={url} alt={chapterName}></img>
      </div>
      <BlurChapter chapterName={chapterName} />
    </div>
  );
};

export default Chapter;
