import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import heroImage from "../../assets/hero_image.png";
import heroImageBack from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calorise from "../../assets/calories.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 4 };
  const mobile = window.innerWidth<=768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className=" blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? '178px' : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here you will help you to shape and build Your ideal body and
              live up your life to fullset
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expart coachs</span>
          </div>
          <div>
            <span>978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-btn">
          <div className="btn">Get Started</div>
          <div className="btn">Learn More</div>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        {" "}
        <motion.div initial={{ right: "-1rem" }} whileInView={{ right: "8rem" }} transition=
        {transition} className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span> <span>116bps</span>
        </motion.div>
        <img className="hero-image" src={heroImage} alt="" />
        <motion.img initial={{ right: "11rem" }} whileInView={{ right: "20rem" }} transition=
        {transition} className="hero-image-back" src={heroImageBack} alt="" />
        <motion.div initial={{ right: "37rem" }} whileInView={{ right: "28rem" }} transition=
        {transition}  className="calories">
          <img src={calorise} alt="" />
          <div>
            <span>Calories</span>
            <span>220</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
