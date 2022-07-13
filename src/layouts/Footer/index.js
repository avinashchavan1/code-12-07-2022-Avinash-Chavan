import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerlogo">
        <a href="/">My Logo</a>
      </div>
      <div className="copyright">
        © 2021 Created by Avinash Chavan, All rights reserved
      </div>
      <div className="footercard card1">
        <a href="/explore">Explore</a>
      </div>
      <div className="footercard card2">
        <a href="/about">About Us</a>
      </div>
      <div className="footercard card3">Cities</div>
      <div className="call">
        <div className="calltext">Call</div>
      </div>
    </div>
  );
};

export default Footer;
