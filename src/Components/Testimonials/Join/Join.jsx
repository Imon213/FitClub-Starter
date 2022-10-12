import React from "react";
import "./Join.css";
const Join = () => {
  return (
    <div className="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to</span>
          <span> leave up</span>
        </div>
        <div>
          <span>Your body</span>
          <span className="stroke-text"> With us?</span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className="email-form">
          <input
            type="text"
            className="user-email"
            placeholder="Write your Email here..."
          />
          <button className="btn join-btn">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
