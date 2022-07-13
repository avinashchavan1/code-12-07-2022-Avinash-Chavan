import "./index.css";

const BlurChapter = ({ chapterName }) => {
  return (
    <div className="blurchapter">
      <div className="chapterheading">{chapterName}</div>
      <div className="chapterdescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididun
      </div>
    </div>
  );
};

export default BlurChapter;
