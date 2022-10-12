import React from "react";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nick from "../../assets/nike.png";
import tick from "../../assets/tick.png";
import "./Reasons.css";
const Reasons = () => {
  return (
    <div className="reasons" id="why_us">
      <div className="left-r">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
      <div className="right-r">
        <span>Some reasons</span>
        <div>
          <span className="stroke-text">Why </span>
          <span>choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>Over 140+ expert coach</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Train Smarter and faster then before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 Free Program for new Member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Relaiable Partners</span>
          </div>
        </div>
        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          Our Partners
        </span>
        <div className="partners">
          <img src={nick}alt="" />
          <img src={adidas} alt="" />
          <img src={nb} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
