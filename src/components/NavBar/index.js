import "./index.css";

const NavBar = () => {
  return (
    <div className="header">
      <div className="headerlogo">
        <a href="/">My Logo</a>
      </div>
      <div className="headercard hcard1">
        <a href="/explore">Explore</a>
      </div>
      <div className="headercard hcard2">
        <a href="/about">About Us</a>
      </div>
      <div className="headercard hcard3">Cities</div>
      <div className="hcall">
        <div className="hcalltext">Call</div>
      </div>
    </div>
  );
};

export default NavBar;
