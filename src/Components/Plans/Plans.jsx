import React from "react";
import "./Plans.css";
import whiteTick from "../../assets/whiteTick.png";
import { plansData } from "../../data/plansData";
const Plans = () => {
  return (
    
      <div className="plans-container" id="plans">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>

        <div className="programs-header" style={{ gap: "2rem" }}>
          <span className="stroke-text">Ready to Start</span>
          <span>Your Journey</span>
          <span className="stroke-text">with us</span>
        </div>
        <div className="plans">
          {plansData.map((item, i) => (
            <div className="plan" key={i}>
              {item.icon}
              <span>{item.name}</span>
              <span>${item.price}</span>
              {item.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
              <div className="see-more">
                <span>See more benefits-></span>
              </div>
              <button className="btn">Join Now</button>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default Plans;
